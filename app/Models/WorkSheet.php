<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\URL;

/**
 * Class Tag 
 * @package 
 */
class WorkSheet extends Model
{
	/*protected $connection = 'mysql';*/
	protected $table = 'worksheet';
    protected $primaryKey = 'id';
    
	public function author()
	{
		return $this->hasOne('App\Models\User','id' ,'author_id' );
	}
	
	
}
