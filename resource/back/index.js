chrome.extension.onMessage.addListener(function( file ){
	if( file.indexOf('.js') < 0 ){
		file += '.js';
	}
	$.get( file , function(res){
		if( res ){
			chrome.tabs.executeScript( null , { file : file });
		}
	});
});