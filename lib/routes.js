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
		this.next();
	}
});