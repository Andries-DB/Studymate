<?php

namespace App\Http\Controllers\StudyRooms\Delete;

use App\Models\StudyRoom__user_active;
use App\Models\StudyRooms;
use App\Models\User;
use App\Models\StudyRooms_invitations;
use App\Models\StudyRooms_Owner;
use App\Models\StudyRoomsUser;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DeleteStudyRoom
{
    // Delete a studyroom
    public function DeleteStudyRoom(Request $r)
    {
      $studyroom = StudyRooms::where('id', $r->id)->first();
      $studyroom->delete();

      return redirect()->back();
    }

    // Delete a user from a studyroom
    public function DeleteUserFromStudyRoom(Request $r)
    {
      $studyroomUser = StudyRoomsUser::where('id', $r->id)->first();
      $studyroomUser->delete();

      return redirect()->back();
    }
}

