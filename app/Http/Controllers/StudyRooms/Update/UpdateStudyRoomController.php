<?php

namespace App\Http\Controllers\StudyRooms\Update;


use App\Models\StudyRooms;
use Illuminate\Http\Request;


class UpdateStudyRoomController
{
    // Update the studyroom
    public function index(Request $request)
    {
      $studyroom = StudyRooms::find($request->id);
      $studyroom->name = $request->name;
      $studyroom->description = $request->description;

      $studyroomImageName = str_replace(' ', '_', $studyroom->name);
      if ($request->hasFile('image'))
      {
        $imagepath = $request->file('image')->storeAs(
          'studyroomImages',
          $studyroomImageName . '.' . $request->file('image')->getClientOriginalExtension() ,
          'public');
        $studyroom->image = $imagepath;
      }
      else {
        $studyroom->image = 'studyroomImages/default.jpg';
      }
      $studyroom->save();

      return redirect()->route('studyroomDetail', ['id' => $request->id]);
    }
}



