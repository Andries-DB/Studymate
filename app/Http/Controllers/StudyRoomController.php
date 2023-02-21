<?php

namespace App\Http\Controllers;

use App\Models\StudyRooms;
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
