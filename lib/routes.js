Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/',{
	name:'welcome',
	onBeforeAction:function(){
		if(Meteor.userId()){
			Router.go('/dashboard');
		}
		this.next();
	}
	
});
Router.route('/dashboard',{
	name:"dashboard",
	onBeforeAction:function(){
		if(!Meteor.userId()){
			Router.go('/');			
		}
		//return Meteor.subscribe('socketsArduino');
		this.next();
	}/*,
	waitOn:function(){
		Meteor.subscribe('socketsArduino');
	}*/
});
Router.route('/socket-Arduino',{
	name:"socketArduino"
});