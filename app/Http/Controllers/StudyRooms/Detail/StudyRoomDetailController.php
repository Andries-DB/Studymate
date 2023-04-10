<?php

namespace App\Http\Controllers\StudyRooms\Detail;

use App\Models\StudyRooms;
use App\Models\User;
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
      $isOwner = StudyRooms_Owner::where('user_id', auth()->user()->id)->where('study_room_id', $r->id)->first();
      if (!$isOwner) {
        return redirect()->route('studeerkamers');
      }

      $studyroom = StudyRooms::where('id', $r->id)->first();
      $studyroomInvitations = StudyRooms_invitations::where('study_room_id', $r->id)->with('user')->get();

      $users = User::whereNotIn('id', function($query) use ($r) {
        $query->select('user_id')->from('study_rooms_invitations')->where('study_room_id', $r->id);
      })->whereNotIn('id', function($query) use ($r) {
        $query->select('user_id')->from('study_rooms__owners')->where('study_room_id', $r->id);
      })->whereNotIn('id', function($query) use ($r) {
        $query->select('user_id')->from('study_rooms_users')->where('study_room_id', $r->id);
      })->get();

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
      $studyroom = StudyRooms::where('id', $r->id)->first();

      // First check if it is a private studyroom
      if ($studyroom->private == 1) {
        // Check if the user is invited
        $isInvited = StudyRoomsUser::where('user_id', auth()->user()->id)->where('study_room_id', $r->id)->first();
        // If not invited, redirect to the studyroom
        if (!$isInvited) {
          return redirect()->route('studeerkamers');
        }
      }

      $client = auth()->user();
      $studyroomInformation = StudyRooms::where('id', $r->id)->first();
      $owner = StudyRooms_Owner::where('study_room_id', $r->id)->with('user')->first();

      return Inertia::render('StudyDetail', [
        'studyroomInformation' => $studyroomInformation,
        'client' => $client,
        'owner' => $owner,
      ]);

    }

}
