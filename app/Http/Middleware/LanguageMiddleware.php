<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Closure;

class LanguageMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if(session()->has('locale')){
            app()->setLocale(session('locale'));
        } else {
            app()->setLocale(config('app.locale'));
        }
        return $next($request);
    }
}
