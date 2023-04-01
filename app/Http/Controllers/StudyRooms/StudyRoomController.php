<?php

namespace App\Http\Controllers\StudyRooms;

use App\Models\StudyRoom__user_active;
use App\Models\StudyRooms;
use App\Models\User;
use App\Models\StudyRooms_invitations;
use App\Models\StudyRooms_Owner;
use App\Models\StudyRoomsUser;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudyRoomController
{
    // Get all studyrooms (public, private, shared, owned, invites)
    public function index()
    {
      $client = auth()->user()->id;

      $SharedStudyRoom = StudyRoomsUser::where('user_id', $client)->with('Studyroom')->get();
      $Publicstudyrooms = StudyRooms::where('private', false)->get();
      $Mystudyrooms = StudyRooms_Owner::where('user_id', $client)->with('Studyroom')->get();
      $invites = StudyRooms_invitations::where('user_id', $client)->with('Studyroom')->get();

      return Inertia::render('Studeerkamers', [
        'sharedStudyRoom' => $SharedStudyRoom,
        'publicStudyrooms' => $Publicstudyrooms,
        'myStudyrooms' => $Mystudyrooms,
        'invites' => $invites
      ]);
    }
}



