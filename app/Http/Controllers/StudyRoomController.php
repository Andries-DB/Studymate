<?php

namespace App\Http\Controllers;

use App\Models\StudyRooms;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudyRoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $studyrooms = StudyRooms::all();
      return Inertia::render('Studeerkamers', [
        'studyrooms' => $studyrooms
      ]);
    }

    /**
     * Show the form for creating a new StudyRoom.
     *
     * @return \Illuminate\Http\Response
     */
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
