<?php

namespace App\Http\Controllers\Project\Delete;

use App\Models\Projects;
use Illuminate\Http\Request;

class DeleteProjectController
{
  public function index(Request $request)
  {
      Projects::find($request->id)->delete();
      return redirect()->route('dashboard');
  }
}
