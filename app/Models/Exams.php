<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\URL;

/**
 * Class Tag 
 * @package 
 */
class Exams extends Model
{
	/*protected $connection = 'mysql';*/
	protected $table = 'exams';
    protected $primaryKey = 'exam_id';
	protected $keyType = 'string'; 
    
	public function response()
	{
		return $this->hasMany('App\Models\ExamResponses','exam_id' ,'exam_id' )->orderBy('id', 'desc');
	}

	public function worksheet()
	{
		return $this->hasOne('App\Models\WorkSheet','id' ,'sheet_id' );
	}
	
	
}
