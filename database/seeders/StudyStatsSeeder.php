<?php

namespace Database\Seeders;

use App\Models\StudyStats;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StudyStatsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        StudyStats::create([
            'user_id' => 2,
            'time_studied' => 50,
            'completed_tasks' => 3,
        ]);
    }
}
