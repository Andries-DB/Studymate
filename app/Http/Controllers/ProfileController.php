<?php

namespace App\Http\Controllers;

use App\Models\ChMessage;
use App\Models\Projects;
use App\Models\StudyRooms;
use App\Models\StudyRooms_invitations;
use App\Models\StudyRooms_Owner;
use App\Models\StudyRoomsUser;
use App\Models\Tasks;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Instellingen', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    public function updateMainInfo(Request $request): RedirectResponse
    {
      $client = User::find(auth()->id());
      $client->first_name = $request->first_name;
      $client->last_name = $request->last_name;
      $client->name = $request->first_name . ' ' . $request->last_name;
      $client->username = $request->username;
      $client->email = $request->email;
      if ($request->hasFile('avatar'))
      {
        $imagepath = $request->file('avatar')->storeAs(
          'users-avatar',
          $client->username . '.' . $request->file('avatar')->getClientOriginalExtension() ,
          'public');
        $client->avatar = $imagepath;
      }
      $client->save();

      return redirect()->route('instellingen');
      }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        // Delete all of the user's studyrooms
        StudyRoomsUser::where('user_id', $user->id)->delete();
        StudyRooms_Owner::where('user_id', $user->id)->delete();
        StudyRooms_invitations::where('user_id', $user->id)->delete();
        $projects = Projects::where('user_id', $user->id)->get();
        foreach ($projects as $project) {
          Tasks::where('project_id', $project->id)->delete();
        }
        Projects::where('user_id', $user->id)->delete();
        ChMessage::where('from_id', $user->id)->orWhere('to_id', $user->id)->delete();
        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
