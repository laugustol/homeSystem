Template.welcome.onCreated(function(){
	
});
Template.welcome.helpers({
  
});
Template.welcome.events({
	'submit .loginForm'(e){
		e.preventDefault();
		if(e.target.email.value.length>0 && e.target.password.value.length>0){
			console.log("lleno");
		}else{
			console.log("vacio");
		}
		Meteor.loginWithPassword(e.target.email.value, e.target.password.value,function(err){
            if(err) {
                console.log(err);
            }else{
               Router.go('dashboard');
            }
        });
	}
})