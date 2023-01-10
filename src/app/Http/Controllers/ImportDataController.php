<?php
namespace App\Http\Controllers;

use App\Imports\CatalogImport;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class ImportDataController extends Controller
{
    public function index()
    {
        return Inertia::render('ImportData');
    }

    public function store(Request $request)
    {
        if($request->file('file')) {
            $collection = Excel::toArray(new CatalogImport, $request->file('file')[ 'file']);
            foreach ($collection as $c) {
                var_dump($c);
            }
            dd($collection);
        }
        die();
    }
}