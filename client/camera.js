Template.camera.onCreated(function(){
	window.URL = window.URL || window.webkitURL;
	navigator.getUserMedia = navigator.getUserMedia || navigator.wekitGetUserMedia || navigator.mozGetUserMedia;
	navigator.getUserMedia({audio:false,video:true},function(video){
		$("#myCamera").attr('src',window.URL.createObjectURL(video));
	},function(err){
		console.log(err);
	});
});