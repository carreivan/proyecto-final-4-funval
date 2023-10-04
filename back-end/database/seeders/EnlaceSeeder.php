<?php

namespace Database\Seeders;

use App\Models\Enlace;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EnlaceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Enlace::create([
            'idrol' => '1',
            'idpagina' => '1'
        ]);
    }
}
