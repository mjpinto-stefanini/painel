<?php
namespace App\Repositories;

use Illuminate\Contracts\Database\Eloquent\EloquentBuilder;

abstract class BaseRepository
{
    /**
     * Model class for repository
     * 
     * @var string
     */
    protected $model;

    /**
     * @return EloquentBuildQuery|QueryBuilder
     */
    protected function newQuery() : EloquentBuilder
    {
        return app($this->model)->newQuery();
    }


}
