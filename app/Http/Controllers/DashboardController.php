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
        $tasks = Tasks::whereIn('project_id', $projects->pluck('id'))->with('project')->get();
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

    /** Projects */

    /**
     * Add a new Project
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createProject(Request $request)
    {
        Projects::create([
            'name' => $request->name,
            'user_id' => auth()->user()->id
        ]);
        return redirect()->route('dashboard');
    }

    public function editProject(Request $request)
    {
        $project = Projects::find($request->id);
        $project->name = $request->name;
        $project->save();
        return redirect()->route('dashboard');
    }

     public function deleteProject(Request $request)
    {
        $project = Projects::find($request->id);
        $project->delete();
        return redirect()->route('dashboard');
    }

    public function projectDetail(Request $r)
    {
        $project = Projects::find($r->id);
        $tasks = Tasks::where('project_id', $r->id)->get();
        return Inertia::render('EditForm/EditProject', [
            'project' => $project,
            'tasks' => $tasks
        ]);
    }

    /** Tasks */

    /**
     * Add a new task in dashboard
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createTask(Request $request) {
      Tasks::create([
        'name' => $request->name,
        'description' => $request->description,
        'project_id' => $request->project,
        'completed' => false
    ]);
      return redirect()->back();
    }

    /**
     * Update a Task
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateTask(Request $request)
    {
        $task = Tasks::find($request->id);
        $task->completed = !$task->completed;
        $task->save();
        return redirect()->back();
    }

    /**
     * Add a new Task to a specific project
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function createTaskToProject(Request $request)
    {
        $task = new Tasks();
        $task->name = $request->name;
        $task->description = $request->description;
        $task->project_id = $request->id;
        $task->completed = false;
        $task->save();
        return redirect()->route('projectDetail', ['id' => $request->id]);
    }

    /**
     * Delete a Task
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function deleteTask(Request $request) {
        Tasks::find($request->id)->delete();
        return redirect()->back();
    }

}
