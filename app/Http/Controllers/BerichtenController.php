<?php

namespace App\Http\Controllers;

use App\Models\Messages;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BerichtenController extends Controller
{
  /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $client = auth()->user()->id;
      $berichten = Messages::where('from_user_id', $client)->orWhere('to_user_id', $client)->orderBy('sent_at', 'desc')->get();
      $users = User::all();
      return Inertia::render('Berichten', [
        'berichten' => $berichten,
        'users' => $users
    ]);
    }
}
