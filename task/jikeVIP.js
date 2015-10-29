$(function(){

	var url = 'http://huodong.jikexueyuan.com/jike1024vip';

	if( window.location.href.indexOf(url) < 0 ){
		return ;
	}

	var task = {

		init : function(){

			this.JikeRunner();

		},

		/**
		 * [JikeRunner 极客学院刷VIP天数]
		 */
		JikeRunner : function(){

			var days = parseInt( $('.get-hb-num').html() );
			if( days < 70 ){
				window.location.reload();
			}
		}

	};

	task.init();

})