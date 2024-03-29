<?php

namespace App\Http\Controllers\StudyRooms\Delete;

use Illuminate\Support\Facades\Storage;
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

    $studyroom = StudyRooms::where('id', $r->id)->first();
    $imagePath = $studyroom->image;
    if (Storage::exists($imagePath))
    {
      Storage::disk('public')->delete($imagePath);
    }

    StudyRooms::where('id', $r->id)->delete();
    return redirect()->back();
  }

  // Delete a user from a studyroom
  public function DeleteUserFromStudyRoom(Request $r)
  {
    $studyroomOwner = StudyRooms_Owner::where('study_room_id', $r->studyroom_id)->where('user_id', $r->user_id)->first();
    if ($studyroomOwner != null)
    {
      return redirect()->back();
    }

    StudyRoomsUser::where('id', $r->id)->delete();
    return redirect()->back();
  }

  // Delete yourself from a studyroom
  public function DeleteSelfFromStudyRoom(Request $r)
  {
    $studyroomOwner = StudyRooms_Owner::where('study_room_id', $r->studyroom_id)->where('user_id', auth()->user()->id)->first();
    if ($studyroomOwner != null)
    {
      return redirect()->back();
    }

    StudyRoomsUser::where('study_room_id', $r->id)->where('user_id', auth()->user()->id)->delete();
    return redirect()->back();
  }
}

