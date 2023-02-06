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
     * Update a Task
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateTask(Request $request)
    {
        $task = Tasks::find($request->id);
        $task->completed = true;
        $task->save();
        return redirect()->route('dashboard');
    }

    /**
     * Delete a Project
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function deleteProject(Request $request)
    {
        $project = Projects::find($request->id);
        $project->delete();
        return redirect()->route('dashboard');
    }

    /**
     * Edit a project
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function editProject(Request $request)
    {
        $project = Projects::find($request->id);
        $project->name = $request->name;
        $project->save();
        return redirect()->route('dashboard');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     * @param  \Illuminate\Http\Request  $request
     */
    public function projectDetail(Request $r)
    {
        $project = Projects::find($r->id);
        $tasks = Tasks::where('project_id', $r->id)->get();
        return Inertia::render('EditForm/EditProject', [
            'project' => $project,
            'tasks' => $tasks
        ]);
    }


}
