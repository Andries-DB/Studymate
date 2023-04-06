<?php

namespace App\Http\Controllers\StudyRooms\Create;

use App\Models\StudyRooms;
use App\Models\StudyRooms_Owner;
use App\Models\StudyRoomsUser;
use Illuminate\Http\Request;

class CreateStudyRoomController
{
    // Add a new studyroom
    public function index (Request $r)
    {
      // Make new studyroom
      $studyroom = new StudyRooms();
      $studyroom->name = $r->name;
      $studyroom->description = $r->description;

      // Replace spaces with underscores
      $studyroomImageName = str_replace(' ', '_', $studyroom->name);

      // Check if the image field is empty, if empty dont upload an image
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
