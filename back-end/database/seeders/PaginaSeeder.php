<?php

namespace Database\Seeders;

use App\Models\Pagina;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaginaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Pagina::create([
            'url' => '/admindashboard',
            'estado' => 'activo',
            'nombre' => 'admindashboard',
            'icono' => 'dashboard',
            'tipo' => 'admin'
        ]);
    }
}
