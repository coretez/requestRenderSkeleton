(function( ng, app ){
	"use strict";

	app.controller(
		"splash.SplashController",
		function( $scope, requestContext, _ ) {

			// --- Define Controller Methods. ------------------- //

			// --- Define Scope Methods. ------------------------ //

			// --- Define Controller Variables. ----------------- //

			// Get the render context local to this controller (and relevant params).
			var renderContext = requestContext.getRenderContext( "single.splash" )

			// --- Define Scope Variables. ---------------------- //

			// The subview indicates which view is going to be rendered on the page.
			$scope.subview = renderContext.getNextSection();

			// --- Bind To Scope Events. ------------------------ //

			// Handle changes to the request context.
			$scope.$on(
				"requestContextChanged",
				function() {
					// Make sure this change is relevant to this controller.
					if ( ! renderContext.isChangeRelevant() ) {
						return;
					}
					// Update the view that is being rendered.
					$scope.subview = renderContext.getNextSection();
				}
			);

			// --- Initialize. ---------------------------------- //
			$scope.setWindowTitle( "Welcome to Simlple" );
		}
	);

})( angular, Simple );