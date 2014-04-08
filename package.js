Package.describe({
	summary: "Text recoding in JavaScript in meteor "
});

Npm.depends({iconv: "2.0.7"});

Package.on_use(function(api){
	api.add_files(['iconv.js'], 'server', 'client');
	if(api.export)
		api.export('Iconv');
});
