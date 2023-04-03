<?php

namespace App\Http\Controllers\Project\Delete;

use App\Models\Projects;
use App\Models\Tasks;
use Illuminate\Http\Request;

class DeleteProjectController
{
  public function index(Request $request)
  {
     $project = Projects::find($request->id);
     // Delete all tasks from that project
      Tasks::where('project_id', $request->id)->delete();
      // Delete project
      $project->delete();
      return redirect()->route('dashboard');
  }
}
