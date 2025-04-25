<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\model\Car;
use Illuminate\Http\Request;

class CarController extends Controller
{
    public function index()
    {
        $cars = Car::all();
        return response()->json($cars);
    }
}
