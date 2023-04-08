<?php

namespace App\Http\Controllers\StudyRooms\Detail;

use App\Models\StudyRooms_invitations;
use App\Models\StudyRoomsUser;
use Illuminate\Http\Request;
use Termwind\Components\Dd;

use function App\Classes\AgoraDynamicKey\packString;

class InviteStudyRoomController
{
    // Send an invitation to a user for a studyroom
    public function sendInvite(Request $r)
    {
      $users = $r->users;
      $users = explode('},{', substr($users, 1, -1));
      foreach ($users as $key => $user) {
        $users[$key] = json_decode('{' . $user . '}');
      }

      // Loop through all users and send them an invitation
      foreach ($users as $user) {
        $studyroom = new StudyRooms_invitations();
        $studyroom->study_room_id = $r->id;
        $studyroom->user_id = $user->id;
        $studyroom->save();
      }

      return redirect()->back();
    }

    // Delete an invitation from a studyroom
    public function DeleteInviteFromStudyRoom(Request $r)
    {
      $studyroom = StudyRooms_invitations::where('id', $r->id)->first();
      $studyroom->delete();

      return redirect()->back();
    }

    // Accept an invitation to a studyroom
    public function AcceptInvite(Request $r)
    {
      $studyroom = StudyRooms_invitations::where('id', $r->invite_id)->first();
      $studyroom->delete();

      $studyroomUser = new StudyRoomsUser();
      $studyroomUser->user_id = auth()->user()->id;
      $studyroomUser->study_room_id = $r->studyroom_id;
      $studyroomUser->save();

      return redirect()->route('studeerkamers');
    }

    // Decline an invitation to a studyroom
    public function DeclineInvite(Request $r)
    {
      $studyroom = StudyRooms_invitations::where('id', $r->invite_id)->first();
      $studyroom->delete();

      return redirect()->back();
    }

}
