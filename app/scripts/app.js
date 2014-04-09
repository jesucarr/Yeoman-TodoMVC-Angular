/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';

		$routeProvider.when('/', {
			controller: 'TodoCtrl',
			templateUrl: '../views/main.html'
		}).when('/:status', {
			controller: 'TodoCtrl',
			templateUrl: '../views/main.html'
		}).otherwise({
			redirectTo: '/'
		});
	});
