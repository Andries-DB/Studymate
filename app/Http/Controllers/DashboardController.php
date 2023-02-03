<?php

namespace App\Http\Controllers;

use App\Models\Friends;
use App\Models\User;
use App\Models\Projects;
use App\Models\Study_stats;
use App\Models\Tasks;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $client = auth()->user()->id;
        $study_stats = Study_stats::where('user_id', $client)->get();
        $projects = Projects::where('user_id', $client)->get();
        $projects_id = Projects::where('user_id', $client)->pluck('id')->toArray();
        $tasks = Tasks::whereIn('project_id', $projects_id)->with('project')->get();
        $friends = Friends::where('user_1', $client)->orWhere('user_2', $client)->with('user')->limit(3)->get();
        $users = User::all();
        return Inertia::render('Dashboard', [
            'projects' => $projects,
            'study_stats' => $study_stats,
            'tasks' => $tasks,
            'friends' => $friends,
            'users' => $users
        ]);

    }

    /**
     * Add a new Project
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createProject(Request $request)
    {
        $project = new Projects();
        $project->name = $request->name;
        $project->user_id = auth()->user()->id;
        $project->save();
        return redirect()->route('dashboard');
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
