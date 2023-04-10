<?php

namespace App\Http\Controllers\StudyRooms\Create;

use App\Models\StudyRooms;
use App\Models\StudyRooms_Owner;
use App\Models\StudyRoomsUser;
use Illuminate\Http\Request;

class CreateStudyRoomController
{
  public function index (Request $r)
  {
    $studyroom = new StudyRooms();
    $studyroom->name = $r->name;
    $studyroom->description = $r->description;

    $studyroomImageName = str_replace(' ', '_', $studyroom->name);

    if ($r->file('image') == null)
    {
      $studyroom->image = 'studyroomImages/default.jpg';
    }
    else {
      $imagepath = $r->file('image')->storeAs(
        'studyroomImages',
        $studyroomImageName . '.' . $r->file('image')->getClientOriginalExtension() ,
        'public');
      $studyroom->image = $imagepath;
    }

    $studyroom->private = true;
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
}
