<?php

namespace App\Http\Controllers;

use App\Models\StudyRoom__user_active;
use App\Models\StudyRooms;
use App\Models\User;
use App\Models\StudyRooms_invitations;
use App\Models\StudyRooms_Owner;
use App\Models\StudyRoomsUser;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudyRoomController extends Controller
{
    // Get all studyrooms (public, private, shared, owned, invites)
    public function index()
    {
      $client = auth()->user()->id;

      $SharedStudyRoom = StudyRoomsUser::where('user_id', $client)->with('Studyroom')->get();
      $Publicstudyrooms = StudyRooms::where('private', false)->get();
      $Mystudyrooms = StudyRooms_Owner::where('user_id', $client)->with('Studyroom')->get();

      $invites = StudyRooms_invitations::where('user_id', $client)->with('Studyroom')->get();

      return Inertia::render('Studeerkamers', [
        'sharedStudyRoom' => $SharedStudyRoom,
        'publicStudyrooms' => $Publicstudyrooms,
        'myStudyrooms' => $Mystudyrooms,
        'invites' => $invites
      ]);
    }

    // Add a new studyroom
    public function createStudyRoom (Request $r)
    {
      $studyroom = new StudyRooms();
      $studyroom->name = $r->name;
      $studyroom->description = $r->description;
      $imagepath = $r->file('image')->storeAs(
        'studyroomImages',
        $studyroom->name . '.' . $r->file('image')->getClientOriginalExtension() ,
        'public');

      $studyroom->image = $imagepath;
      $studyroom->private = true;
      $studyroom->time_studied = 0;
      $studyroom->save();

      $studyroomOwner = new StudyRooms_Owner();
      $studyroomOwner->user_id = auth()->user()->id;
      $studyroomOwner->study_room_id = $studyroom->id;
      $studyroomOwner->save();

      $studyroomUser = new StudyRoomsUser();
      $studyroomUser->user_id = auth()->user()->id;
      $studyroomUser->study_room_id = $studyroom->id;
      $studyroomUser->save();

      return redirect()->back();
    }

    // Get details of specific studyroom
    public function StudyRoomDetail(Request $r)
    {
      // Get the studyroom
      $studyroom = StudyRooms::where('id', $r->id)->first();
      // Get the users that are invited
      $studyroomInvitations = StudyRooms_invitations::where('study_room_id', $r->id)->with('user')->get();

      // Get the users that aren't invited yet and that aren't the owner
      $users = User::whereNotIn('id', function($query) use ($r) {
        $query->select('user_id')->from('study_rooms_invitations')->where('study_room_id', $r->id);
      })->whereNotIn('id', function($query) use ($r) {
        $query->select('user_id')->from('study_rooms__owners')->where('study_room_id', $r->id);
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

    // Send an invitation to a user for a studyroom
    public function AddUserToStudyRoom(Request $r)
    {
      $studyroom = New StudyRooms_invitations();
      $studyroom->user_id = $r->user;
      $studyroom->study_room_id = $r->studyroom;
      $studyroom->save();

      return redirect()->back();
    }

    // Delete an invitation from a studyroom
    public function DeleteInviteFromStudyRoom(Request $r)
    {
      $studyroom = StudyRooms_invitations::where('id', $r->id)->first();
      $studyroom->delete();

      return redirect()->back();
    }

    // Delete a user from a studyroom
    public function DeleteUserFromStudyRoom(Request $r)
    {
      $studyroom = StudyRoomsUser::where('id', $r->id)->first();
      $studyroom->delete();

      return redirect()->back();
    }

    // Accept an invitation to a studyroom
    public function AcceptInvite(Request $r)
    {
      $studyroom = StudyRooms_invitations::where('id', $r->invite_id)->first();
      $studyroom->delete();

      $studyroomUser = new StudyRoomsUser();
      $studyroomUser->user_id = auth()->user()->id;
      $studyroomUser->study_room_id = $r->studyroom_id;
      $studyroomUser->save();

      return redirect()->back();
    }

    // Decline an invitation to a studyroom
    public function DeclineInvite(Request $r)
    {
      $studyroom = StudyRooms_invitations::where('id', $r->invite_id)->first();
      $studyroom->delete();

      return redirect()->back();
    }

    public function Study(Request $r) {
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



