<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\URL;

/**
 * Class Tag 
 * @package 
 */
class Favorites extends Model
{
	/*protected $connection = 'mysql';*/
	protected $table = 'favorites';
    protected $primaryKey = 'id';
    
	public function worksheet()
	{
		return $this->hasOne('App\Models\WorkSheet','id' ,'sheet_id' );
	}
	
	
}
