var config = {
	path : 'task/'
};

config.task = 'xxx'; //每次运行的脚本在此修改

if( config.task ){
	chrome.extension.sendMessage( config.path + config.task );
}