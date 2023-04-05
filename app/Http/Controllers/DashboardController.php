<?php

namespace App\Http\Controllers;

use App\Models\Friends;
use App\Models\User;
use App\Models\Projects;
use App\Models\Study_stats;
use App\Models\Tasks;
use Inertia\Inertia;

class DashboardController extends Controller
{
  public function index()
  {
    $projects = Projects::where('user_id', auth()->user()->id)->get();
    $tasks = Tasks::whereIn('project_id', $projects->pluck('id'))->with('project')->get();
    $friends = Friends::where('user_1', auth()->user()->id)->orWhere('user_2', auth()->user()->id)->with('user')->limit(3)->get();
    $users = User::all();
    return Inertia::render('Dashboard', [
        'projects' => $projects,
        'tasks' => $tasks,
        'friends' => $friends,
        'users' => $users
    ]);
  }
}
