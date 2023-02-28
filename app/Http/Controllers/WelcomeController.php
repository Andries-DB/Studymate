<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\StudyRooms;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


class WelcomeController extends Controller
{
    public function index() {
      $users = User::all();
      $studyroom = StudyRooms::all();

      return Inertia::render('Welcome', [
          'studyrooms' => $studyroom,
          'users' => $users,
          'canLogin' => Route::has('login'),
          'canRegister' => Route::has('register'),
          'laravelVersion' => Application::VERSION,
          'phpVersion' => PHP_VERSION,
      ]);
    }


}
