<?php

namespace App\Http\Controllers\StudyRooms\Create;

use App\Models\StudyRoom__user_active;
use App\Models\StudyRooms;
use App\Models\User;

use App\Models\StudyRooms_invitations;
use App\Models\StudyRooms_Owner;
use App\Models\StudyRoomsUser;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CreateStudyRoomController
{
    // Add a new studyroom
    public function index (Request $r)
    {
      // Make new studyroom
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

      // Make the user that created the studyroom the owner
      $studyroomOwner = new StudyRooms_Owner();
      $studyroomOwner->user_id = auth()->user()->id;
      $studyroomOwner->study_room_id = $studyroom->id;
      $studyroomOwner->save();

      // Add the user that created the studyroom to the studyroom users
      $studyroomUser = new StudyRoomsUser();
      $studyroomUser->user_id = auth()->user()->id;
      $studyroomUser->study_room_id = $studyroom->id;
      $studyroomUser->save();

      return redirect()->back();
    }
}
