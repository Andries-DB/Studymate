<?php

namespace App\Http\Controllers\Tasks\Update;

use App\Models\Tasks;
use Illuminate\Http\Request;

class UpdateTaskController
{
    public function index(Request $request)
    {
        $task = Tasks::find($request->id);
        $task->completed = !$task->completed;
        $task->save();
        return redirect()->back();
    }
}
