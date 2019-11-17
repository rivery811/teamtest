"use strict";
var app = app || {};
app = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾을 수 없습니다.'
		let _, js, bugsjs;
    let init = () => {
    	_ = $.ctx()
        js = $.js()
        bugsjs = js + '/bugs.js'


    }
    let run = x => {
        $.getScript(x + '/resources/js/router.js', () => {
            $.extend(new Session(x));
            onCreate();
        })
    }

		
		let onCreate=()=>{
			init()
			$.getScript(bugsjs)
		bugs.onCreate()
		}
	return{run}
	
})();