<?php

namespace App\Http\Controllers\StudyRooms\Detail;

use App\Models\StudyRoom__user_active;
use App\Models\StudyRooms;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\StudyRooms_invitations;
use App\Models\StudyRooms_Owner;
use App\Models\StudyRoomsUser;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudyRoomDetailController
{
    // Get details of specific studyroom
    public function index(Request $r)
    {
      // Check if the user is the studyroom owner
      $isOwner = StudyRooms_Owner::where('user_id', auth()->user()->id)->where('study_room_id', $r->id)->first();
      // If not owner, redirect to the studyroom
      if (!$isOwner) {
        return redirect()->route('studeerkamers');
      }


      // Get the studyroom
      $studyroom = StudyRooms::where('id', $r->id)->first();
      // Get the users that are invited
      $studyroomInvitations = StudyRooms_invitations::where('study_room_id', $r->id)->with('user')->get();

      // Get the users that aren't invited yet and that aren't the owner or that aren't in the studyroom
      $users = User::whereNotIn('id', function($query) use ($r) {
        $query->select('user_id')->from('study_rooms_invitations')->where('study_room_id', $r->id);
      })->whereNotIn('id', function($query) use ($r) {
        $query->select('user_id')->from('study_rooms__owners')->where('study_room_id', $r->id);
      })->whereNotIn('id', function($query) use ($r) {
        $query->select('user_id')->from('study_rooms_users')->where('study_room_id', $r->id);
      })->get();


      // Get the users that are in the studyroom
      $studyroomUsers = StudyRoomsUser::where('study_room_id', $r->id)->with('user')->get();


      return Inertia::render('EditForm/EditStudyRoom', [
        'studyroomUsers' => $studyroomUsers,
        'users' => $users,
        'studyroom' => $studyroom,
        'studyroomInvitations' => $studyroomInvitations,
      ]);
    }

    // Go study in a studyroom
    public function Study(Request $r) {
      // check if user is in studyroom or not
      $user = StudyRoomsUser::where('user_id', auth()->user()->id)->where('study_room_id', $r->id)->first();
      if ($user == null) {
        return redirect()->back();
      }

      $client = auth()->user();
      $studyroomInformation = StudyRooms::where('id', $r->id)->first();
      $owner = StudyRooms_Owner::where('study_room_id', $r->id)->with('user')->first();
      $activeUsers = StudyRoom__user_active::where('study_room_id', $r->id)->with('user')->get();

      return Inertia::render('StudyDetail', [
        'studyroomInformation' => $studyroomInformation,
        'client' => $client,
        'owner' => $owner,
        'activeUsers' => $activeUsers,

      ]);

    }

}
