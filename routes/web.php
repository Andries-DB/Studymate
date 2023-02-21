<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Projects\Form\ProjectFormController;
use App\Http\Controllers\StudyRoomController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
/** Dashboard Routes */
//Show Dashboard with projects, tasks and stats & friends
Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
/** Add a new Project */
Route::post('newProject', [DashboardController::class, 'createProject'])->middleware(['auth', 'verified'])->name('addProject');
/** Project Detail */
Route::get('/dashboard/edit/{id}', [DashboardController::class, 'ProjectDetail'])->middleware(['auth', 'verified'])->name('projectDetail');
// Edit name of project
Route::post('editProject', [DashboardController::class, 'editProject'])->middleware(['auth', 'verified'])->name('editProject');
// Add new task in dashboard
Route::post('newTask', [DashboardController::class, 'createTask'])->middleware(['auth', 'verified'])->name('addTask');
// Add new task to specific project
Route::post('addTasktoProject', [DashboardController::class, 'createTaskToProject'])->middleware(['auth', 'verified'])->name('addTasktoProject');
// Delete a task from a project
Route::post('deleteTask', [DashboardController::class, 'deleteTask'])->middleware(['auth', 'verified'])->name('deleteTask');
//Delete a project
Route::post('deleteProject', [DashboardController::class, 'deleteProject'])->middleware(['auth', 'verified'])->name('deleteProject');
//Complete a task
Route::post('updateTask', [DashboardController::class, 'updateTask'])->middleware(['auth', 'verified'])->name('updateTask');

/** StudyRoom Routes */
Route::get('/studeerkamers', [StudyRoomController::class, 'index'])->middleware(['auth', 'verified'])->name('studeerkamers');
Route::post('newStudyRoom', [StudyRoomController::class, 'createStudyRoom'])->middleware(['auth', 'verified'])->name('addStudyRoom');
Route::get('/studeerkamers/edit/{id}', [StudyRoomController::class, 'StudyRoomDetail'])->middleware(['auth', 'verified'])->name('studyroomDetail');

/** Settings Routes */
Route::get('/instellingen', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('instellingen');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
