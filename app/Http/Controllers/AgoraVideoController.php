<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Classes\AgoraDynamicKey\RtcTokenBuilder;

class AgoraVideoController extends Controller
{
  public function token(Request $request)
  {
    $appID = env('AGORA_APP_ID');
    $appCertificate = env('AGORA_APP_CERTIFICATE');
    $channelName = $request->channelName;
    $user = Auth::user()->ticket;
    $role = RtcTokenBuilder::RoleAttendee;
    $expireTimeInSeconds = 3600;
    $currentTimestamp = now()->getTimestamp();
    $privilegeExpiredTs = $currentTimestamp + $expireTimeInSeconds;

    $token = RtcTokenBuilder::buildTokenWithUserAccount($appID, $appCertificate, $channelName, $user, $role, $privilegeExpiredTs);

    return $token;
  }
}
