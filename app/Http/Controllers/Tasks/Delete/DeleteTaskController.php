<?php

namespace App\Http\Controllers\Tasks\Delete;

use App\Models\Tasks;
use Illuminate\Http\Request;

class DeleteTaskController
  {
    public function index(Request $request) {
        Tasks::find($request->id)->delete();
        return redirect()->back();
    }
}
