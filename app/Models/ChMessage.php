<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChMessage extends Model
{
    protected $table = 'ch_messages';
    protected $fillable = ['id, from_id', 'to_id', 'message', 'type', 'is_seen', 'is_deleted', 'is_sent', 'is_delivered', 'is_read', 'created_at', 'updated_at'];
}
