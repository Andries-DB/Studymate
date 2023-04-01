<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Project\Create\CreateProjectController;
use App\Http\Controllers\Project\Detail\DetailProjectController;
use App\Http\Controllers\Project\Delete\DeleteProjectController;
use App\Http\Controllers\Project\Update\UpdateProjectController;
use App\Http\Controllers\Tasks\Create\CreateTaskController;
use App\Http\Controllers\Tasks\Delete\DeleteTaskController;
use App\Http\Controllers\Tasks\Update\UpdateTaskController;
use App\Http\Controllers\StudyRooms\StudyRoomController;
use App\Http\Controllers\StudyRooms\Create\CreateStudyRoomController;
use App\Http\Controllers\StudyRooms\Detail\StudyRoomDetailController;
use App\Http\Controllers\StudyRooms\Detail\InviteStudyRoomController;
use App\Http\Controllers\StudyRooms\Delete\DeleteStudyRoom;
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
Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

// Project Routes
Route::middleware('auth')->group(function () {
  Route::get('/dashboard/edit/{id}', [DetailProjectController::class, 'index'])->name('projectDetail');
  Route::post('newProject', [CreateProjectController::class, 'index'])->name('addProject');
  Route::post('editProject', [UpdateProjectController::class, 'index'])->name('editProject');
  Route::post('deleteProject', [DeleteProjectController::class, 'index'])->name('deleteProject');
});

// Task Routes
Route::middleware('auth')->group(function () {
  Route::post('newTask', [CreateTaskController::class, 'index'])->name('addTask');
  Route::post('addTasktoProject', [CreateTaskController::class, 'indexToProject'])->name('addTasktoProject');
  Route::post('deleteTask', [DeleteTaskController::class, 'index'])->name('deleteTask');
  Route::post('updateTask', [UpdateTaskController::class, 'index'])->name('updateTask');
});

// StudyRoom Routes
Route::middleware('auth')->group(function () {
Route::get('/studeerkamers', [StudyRoomController::class, 'index'])->name('studeerkamers');
Route::post('newStudyRoom', [CreateStudyRoomController::class, 'index'])->name('addStudyRoom');
Route::get('/studeerkamers/edit/{id}', [StudyRoomDetailController::class, 'index'])->name('studyroomDetail');
Route::post('/addInvite', [InviteStudyRoomController::class, 'sendInvite'])->name('addUserToStudyRoom');
Route::post('/deleteInvite', [InviteStudyRoomController::class, 'DeleteInviteFromStudyRoom'])->name('deleteInviteFromStudyRoom');
Route::post('/deleteStudyRoomuser', [DeleteStudyRoom::class, 'DeleteUserFromStudyRoom'])->name('deleteUserFromStudyRoom');
Route::post('/acceptInvite', [InviteStudyRoomController::class, 'AcceptInvite'])->name('acceptInvite');
Route::post('/declineInvite', [InviteStudyRoomController::class, 'DeclineInvite'])->name('declineInvite');
Route::get('/studeerkamers/{id}', [StudyRoomDetailController::class, 'Study'])->name('study');
});

// Settings Routes
Route::get('/instellingen', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('instellingen');

// Profile Routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Agora Routes
Route::group(['middleware' => ['auth']], function () {
  Route::post('/agora/token', 'App\Http\Controllers\AgoraVideoController@token');
});

require __DIR__.'/auth.php';
