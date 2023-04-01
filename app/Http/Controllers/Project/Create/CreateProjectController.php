<?php

namespace App\Http\Controllers\Project\Create;

use App\Models\Projects;
use Illuminate\Http\Request;

class CreateProjectController
{
    public function index(Request $request)
    {
        Projects::create([
            'name' => $request->name,
            'user_id' => auth()->user()->id
        ]);
        return redirect()->route('dashboard');
    }
}
