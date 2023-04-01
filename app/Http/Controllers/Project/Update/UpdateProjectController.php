<?php

namespace App\Http\Controllers\Project\Update;

use App\Models\Projects;
use Illuminate\Http\Request;

class UpdateProjectController
{
    public function index(Request $request)
    {
        $project = Projects::find($request->id);
        $project->name = $request->name;
        $project->save();
        return redirect()->route('dashboard');
    }
}
