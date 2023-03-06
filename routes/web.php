<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\StudyRoomController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;


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

Route::get('/', [WelcomeController::class, 'index'])->name('welcome');
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
// Get all studyrooms (public, private, shared, owned)
Route::get('/studeerkamers', [StudyRoomController::class, 'index'])->middleware(['auth', 'verified'])->name('studeerkamers');
// Add a new studyroom
Route::post('newStudyRoom', [StudyRoomController::class, 'createStudyRoom'])->middleware(['auth', 'verified'])->name('addStudyRoom');
// Get details of specific studyroom
Route::get('/studeerkamers/edit/{id}', [StudyRoomController::class, 'StudyRoomDetail'])->middleware(['auth', 'verified'])->name('studyroomDetail');
// Send an invitation to a user for a studyroom (as owner)
Route::post('/addInvite', [StudyRoomController::class, 'AddUserToStudyRoom'])->middleware(['auth', 'verified'])->name('addUserToStudyRoom');
// Delete an invitation from a studyroom
Route::post('/deleteInvite', [StudyRoomController::class, 'DeleteInviteFromStudyRoom'])->middleware(['auth', 'verified'])->name('deleteInviteFromStudyRoom');
// Delete a user from a studyroom
Route::post('/deleteStudyRoomuser', [StudyRoomController::class, 'DeleteUserFromStudyRoom'])->middleware(['auth', 'verified'])->name('deleteUserFromStudyRoom');
// Accept an invitation (as user)
Route::post('/acceptInvite', [StudyRoomController::class, 'AcceptInvite'])->middleware(['auth', 'verified'])->name('acceptInvite');
// Decline an invitation (as user)
Route::post('/declineInvite', [StudyRoomController::class, 'DeclineInvite'])->middleware(['auth', 'verified'])->name('declineInvite');

//Get active users from studyroom
Route::get('/studeerkamers/{id}', [StudyRoomController::class, 'Study'])->middleware(['auth', 'verified'])->name('study');

/** Settings Routes */
Route::get('/instellingen', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('instellingen');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
