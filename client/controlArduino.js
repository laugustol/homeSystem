Template.controlArduino.onCreated(function(){
	this.status= new ReactiveVar(0);
});
Template.controlArduino.events({
	'click .btn'(e){	
		if(Template.instance().status.get()){
			Template.instance().status.set(0);
			$(e.target).addClass("orange");
		}else{
			Template.instance().status.set(1);
			$(e.target).removeClass("orange");
		}
		Meteor.call('sendAction',9,Template.instance().status.get());
	}
});