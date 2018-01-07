import 'materialize-css/dist/css/materialize.min.css';
import 'hammerjs/hammer.min.js';
import 'materialize-css/dist/js/materialize.min.js';
Template.layout.onCreated(function(){
	
});
Template.layout.helpers({
	onSession() {
		return (Meteor.userId());
	}
});
Template.layout.events({
	'click #btnLogout'(){
		Meteor.logout();
		Router.go('/');
	}
})