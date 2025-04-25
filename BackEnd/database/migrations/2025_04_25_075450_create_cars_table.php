<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();                                   // Auto-incrementing ID
            $table->string('make');                         // Car manufacturer
            $table->string('model');                        // Car model
            $table->string('year');                         // Year of manufacture
            $table->text('description')->nullable();        // Car description
            $table->string('image')->nullable();            // URL or path to car image
            $table->decimal('price_per_day', 8, 2);         // Rental price per day
            $table->boolean('available')->default(true);    // Availability flag
            $table->string('license_plate')->unique();      // License plate number
            $table->integer('seats');                       // Number of seats
            $table->string('transmission');                 // Automatic or manual
            $table->string('fuel_type');                    // Gas, diesel, electric
            $table->timestamps();    
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
