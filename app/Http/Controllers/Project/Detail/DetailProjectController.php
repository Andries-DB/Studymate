<?php

namespace App\Http\Controllers\Project\Detail;

use App\Models\Projects;
use App\Models\Tasks;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DetailProjectController
{
  public function index(Request $r)
  {
    $project = Projects::find($r->id);
    $tasks = Tasks::where('project_id', $r->id)->get();
    return Inertia::render('EditForm/EditProject', [
      'project' => $project,
      'tasks' => $tasks
    ]);
  }
}
