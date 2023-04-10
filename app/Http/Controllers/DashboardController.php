<?php

namespace App\Http\Controllers;

use App\Models\Friends;
use App\Models\User;
use App\Models\Projects;
use App\Models\Study_stats;
use App\Models\StudyRooms;
use App\Models\StudyRooms_Owner;
use App\Models\StudyRoomsUser;
use App\Models\Tasks;
use Inertia\Inertia;

class DashboardController extends Controller
{
  public function index()
  {
    $studyrooms = [];
    $studyrooms_owner_member = [];

    $projects = Projects::where('user_id', auth()->user()->id)->get();
    $tasks = Tasks::whereIn('project_id', $projects->pluck('id'))->with('project')->get();
    $friends = Friends::where('user_1', auth()->user()->id)->orWhere('user_2', auth()->user()->id)->with('user')->limit(3)->get();
    $users = User::all();

    // Add studyrooms where user is owner
    $studyrooms_owner = StudyRooms_Owner::where('user_id', auth()->user()->id)->with('studyroom')->get();
    if ($studyrooms_owner->count() > 0) {
      foreach ($studyrooms_owner as $studyroom_owner) {
        $studyrooms_owner_member[$studyroom_owner->studyroom->id] = $studyroom_owner->studyroom->toArray();
      }
    } else {
      $studyrooms_owner_member += [];
    }

    // Add studyrooms where user is member
    $studyrooms_member = StudyRoomsUser::where('user_id', auth()->user()->id)->with('studyroom')->get();
    if ($studyrooms_member->count() > 0) {
      foreach ($studyrooms_member as $studyroom_member) {
        $studyrooms_owner_member[$studyroom_member->studyroom->id] = $studyroom_member->studyroom->toArray();
      }
    }
    else {
      $studyrooms_owner_member += [];
    }

    // Add the public studyrooms
    $studyrooms_public = StudyRooms::where('private', false)->get();

    // Put them in an array
    foreach ($studyrooms_owner_member as $studyroom_owner_member) {
      $studyrooms[] = $studyroom_owner_member;
    }
    foreach ($studyrooms_public as $studyroom_public) {
      $studyrooms[] = $studyroom_public;
    }

    $studyrooms = collect($studyrooms)->sortByDesc('created_at')->take(3)->values()->all();

    return Inertia::render('Dashboard', [
        'projects' => $projects,
        'tasks' => $tasks,
        'friends' => $friends,
        'users' => $users,
        'studyrooms' => $studyrooms,
    ]);
  }
}
