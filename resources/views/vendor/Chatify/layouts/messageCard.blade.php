<?php
$seenIcon = (!!$seen ? 'check-double' : 'check');
$timeAndSeen = "<span data-time='$created_at' class='message-time'>
        ".($isSender ? "<span class='fas fa-$seenIcon' seen'></span>" : '' )." <span class='time'>$timeAgo</span>
    </span>";
?>

<div class="message-card @if($isSender) mc-sender @endif" data-id="{{ $id }}">
  {{-- Delete Message Button --}}
  @if ($isSender)
    <div class="actions">
        <i class="fas fa-trash delete-btn" data-id="{{ $id }}"></i>
    </div>
  @endif

  {{-- Message Content --}}
  <div class="">
    @if (@$attachment->type != 'image' || $message)
        <div class="message">
            {!! ($message == null && $attachment != null && @$attachment->type != 'file') ? $attachment->title : nl2br($message) !!}
            {!! $timeAndSeen !!}
            {{-- If attachment is a file --}}
            @if(@$attachment->type == 'file')
            <a href="{{ route(config('chatify.attachments.download_route_name'), ['fileName'=>$attachment->file]) }}" class="file-download">
                <span class="fas fa-file"></span> {{$attachment->title}}</a>
            @endif
        </div>
    @endif
    @if(@$attachment->type == 'image')
    <div class="image-wrapper" style="text-align: {{$isSender ? 'end' : 'start'}}">
        <div class="image-file chat-image" style="background-image: url('{{ Chatify::getAttachmentUrl($attachment->file) }}')">
            <div>{{ $attachment->title }}</div>
        </div>
        <div style="margin-bottom:5px">
            {!! $timeAndSeen !!}
        </div>
    </div>
    @endif
  </div>
</div>

{{-- -------------------- The default card (white) -------------------- --}}
@if($viewType == 'default')
    @if($from_id != $to_id)
    <div class="message-card" data-id="{{ $id }}">
        <p>{!! ($message == null && $attachment != null && @$attachment[2] != 'file') ? $attachment[1] : nl2br($message) !!}
            <sub title="{{ $fullTime }}">{{ $time }}</sub>
            {{-- If attachment is a file --}}
            @if(@$attachment[2] == 'file')
            <a href="{{ route(config('chatify.attachments.download_route_name'), ['fileName'=>$attachment[0]]) }}" style="color: #595959;" class="file-download">
                <span class="fas fa-file"></span> {{$attachment[1]}}</a>
            @endif
        </p>
        {{-- If attachment is an image --}}
        @if(@$attachment[2] == 'image')
        <div class="image-file chat-image" style="width: 250px; height: 150px;background-image: url('{{ Chatify::getAttachmentUrl($attachment[0]) }}')">
        </div>
        @endif
    </div>
    @endif
@endif
