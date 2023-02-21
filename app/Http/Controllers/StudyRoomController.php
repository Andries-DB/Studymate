<?php

namespace App\Http\Controllers;

use App\Models\StudyRooms;
use App\Models\StudyRooms_invitations;
use App\Models\StudyRooms_Owner;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Termwind\Components\Dd;

class StudyRoomController extends Controller
{
    public function index()
    {
      $client = auth()->user()->id;

      $Popularstudyrooms = StudyRooms::limit(5)->get();
      $Publicstudyrooms = StudyRooms::where('private', false)->get();
      $Mystudyrooms = StudyRooms_Owner::where('user_id', $client)->with('Studyroom')->get();

      return Inertia::render('Studeerkamers', [
        'popularStudyrooms' => $Popularstudyrooms,
        'publicStudyrooms' => $Publicstudyrooms,
        'myStudyrooms' => $Mystudyrooms,
      ]);
    }

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

      return redirect()->back();
    }

    public function StudyRoomDetail(Request $r)
    {
      $studyroom = StudyRooms::where('id', $r->id)->first();
      $studyroomInvitations = StudyRooms_invitations::where('study_room_id', $r->id)->with('user')->get();

      return Inertia::render('EditForm/EditStudyRoom', [
        'studyroom' => $studyroom,
        'studyroomInvitations' => $studyroomInvitations,
      ]);
    }
}
