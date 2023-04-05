<?php

namespace App\Http\Controllers\StudyRooms\Delete;

use App\Models\StudyRooms;
use App\Models\StudyRooms_invitations;
use App\Models\StudyRooms_Owner;
use App\Models\StudyRoomsUser;
use Illuminate\Http\Request;

class DeleteStudyRoom
{
    // Delete a studyroom
    public function DeleteStudyRoom(Request $r)
    {
      //Delete all invitations, users en owner from the studyroom
      $studyroomInvitations = StudyRooms_invitations::where('study_room_id', $r->id)->get();
      $studyroomUsers = StudyRoomsUser::where('study_room_id', $r->id)->get();
      $studyroomOwner = StudyRooms_Owner::where('study_room_id', $r->id)->get();

      foreach ($studyroomInvitations as $studyroomInvitation)
      {
        $studyroomInvitation->delete();
      }

      foreach ($studyroomUsers as $studyroomUser)
      {
        $studyroomUser->delete();
      }

      foreach ($studyroomOwner as $studyroomOwner)
      {
        $studyroomOwner->delete();
      }

      StudyRooms::where('id', $r->id)->delete();

      return redirect()->back();
    }

    // Delete a user from a studyroom
    public function DeleteUserFromStudyRoom(Request $r)
    {
      //Check if the user u want to delete is the owner
      $studyroomOwner = StudyRooms_Owner::where('study_room_id', $r->studyroom_id)->where('user_id', $r->user_id)->first();

      //If the user is the owner, go back
      if ($studyroomOwner != null)
      {
        return redirect()->back();
      }

      //Delete the user from the studyroom
      $studyroomUser = StudyRoomsUser::where('study_room_id', $r->studyroom_id)->where('user_id', $r->user_id)->first();

      return redirect()->back();
    }
}

