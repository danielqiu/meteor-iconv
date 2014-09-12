Package.describe({
	name: "mrt:iconv",
	summary: "Text recoding in JavaScript in meteor ",
	author: "Daniel Qiu",
	version: "2.0.7",
	git: "https://github.com/danielqiu/meteor-iconv.git"
});

Npm.depends({iconv: "2.0.7"});

Package.on_use(function(api){
	api.versionsFrom('METEOR@0.9.1.1');

	api.add_files(['iconv.js'], 'server', 'client');
	
	if(api.export)
		api.export('Iconv');
});
