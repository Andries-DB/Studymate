<?php

namespace App\Http\Controllers\Tasks\Create;

use App\Models\Projects;
use App\Models\Tasks;
use Illuminate\Http\Request;

class CreateTaskController
{
    public function index(Request $request) {
      Tasks::create([
        'name' => $request->name,
        'description' => $request->description,
        'project_id' => $request->project,
        'completed' => false
      ]);
      return redirect()->back();
    }

    public function indexToProject(Request $request)
    {
      Tasks::create([
          'name' => $request->name,
          'description' => $request->description,
          'project_id' => $request->id,
          'completed' => false
      ]);

        return redirect()->route('projectDetail', ['id' => $request->id]);
    }
}
