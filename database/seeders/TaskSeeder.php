<?php

namespace Database\Seeders;

use App\Models\Tasks;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tasks::create([
            'project_id' => 2,
            'name' => 'Make a new Laravel project',
            'description' => 'Make a new Laravel project with the name "StudyMate"',
            'completed' => false,
        ]);
    }
}
