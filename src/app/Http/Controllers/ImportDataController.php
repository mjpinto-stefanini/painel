<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ImportDataController extends Controller
{
    public function index()
    {
        return Inertia::render('ImportData');
    }

    public function store(Request $request)
    {
        dd($request->all());
    }
}