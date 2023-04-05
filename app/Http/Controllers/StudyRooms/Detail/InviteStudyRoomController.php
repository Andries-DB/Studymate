<?php

namespace App\Http\Controllers\StudyRooms\Detail;

use App\Models\StudyRooms_invitations;
use App\Models\StudyRoomsUser;
use Illuminate\Http\Request;

class InviteStudyRoomController
{
    // Send an invitation to a user for a studyroom
    public function sendInvite(Request $r)
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

    // Accept an invitation to a studyroom
    public function AcceptInvite(Request $r)
    {
      $studyroom = StudyRooms_invitations::where('id', $r->invite_id)->first();
      $studyroom->delete();

      $studyroomUser = new StudyRoomsUser();
      $studyroomUser->user_id = auth()->user()->id;
      $studyroomUser->study_room_id = $r->studyroom_id;
      $studyroomUser->save();

      return redirect()->route('studeerkamers');
    }

    // Decline an invitation to a studyroom
    public function DeclineInvite(Request $r)
    {
      $studyroom = StudyRooms_invitations::where('id', $r->invite_id)->first();
      $studyroom->delete();

      return redirect()->back();
    }

}
