(function() {
    'use strict';

	start();

    function start() {
    var canvas = document.getElementById('canvas');
    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });

        //document.getElementById('go').removeEventListener('click', start);
		promise.then(() => engine.toText('余列冰'))
        .then(() => engine.shake())
        .then(() => engine.toText('LOVE'))
        .then(() => engine.shake())
        .then(() => engine.toText('樊楚颖'))
        .then(() => engine.shake())
        .then(() => engine.toText('宝贝！'))
        .then(() => engine.shake())
		.then(() => engine.toText('生日快乐！'))
        .then(() => engine.shake())
		.then(() => engine.toText('今天'))
        .then(() => engine.shake())
		.then(() => engine.toText('我们'))
        .then(() => engine.shake())
		.then(() => engine.toText('在一起109天啦'))
        .then(() => engine.shake())
		.then(() => engine.toText('我'))
        .then(() => engine.shake())
		.then(() => engine.toText('想要'))
        .then(() => engine.shake())
			.then(() => engine.toText('一辈子'))
        .then(() => engine.shake())
			.then(() => engine.toText('跟你在一起'))
        .then(() => engine.shake())
			.then(() => engine.toText('情人节快乐！'))
        .then(() => engine.shake())
			.then(() => engine.toText('宝贝！'))
        .then(() => engine.shake())
			.then(() => engine.toText('我爱你'))
        .then(() => engine.shake())
			.then(() => engine.toText('到永远！'))
        .then(() => engine.shake())
			.then(() => engine.toText('(*￣3￣)'))
        .then(() => engine.shake())
        .then(() => engine.clear());

		
       // .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
