// User module definition

angular.module("user", ["ui.router"])

//configuration
.run(function ($transitions, LoginService) {

	$transitions.onStart({ }, function(transition) {
		//if the state require the login and the user is not logged
		if (transition.to().data !== undefined && transition.to().data.requireLogin && !LoginService.isLogged()) {
			
			//save the state and the params
			LoginService.setRedirectState(transition.to().name, transition.to().params)

			return transition.router.stateService.target('login');
		}
	});
});