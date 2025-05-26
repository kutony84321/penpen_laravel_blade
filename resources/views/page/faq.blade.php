@extends('layouts.app')
@section('title') Home :: @parent @stop

@section('content-top')   
   @include('partials.admin.header')
@endsection

@section('content-body')
   @include('partials.other.faq_content') 
@endsection

@section('content-bottom')    
   @include('partials.admin.footer') 
@endsection
