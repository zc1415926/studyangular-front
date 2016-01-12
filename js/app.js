/**
 * Created by ZC on 2016/1/12.
 */
(function(){

    'use strict';

    angular.module('studyangularApp', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider){

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'views/home.html',
                    //controller:
                })
                .state('sortFilterTable', {
                    url: '/sortFilterTable',
                    templateUrl: 'views/sortFilterTable.html',
                    controller: 'sortFilterTableCtrler'
                });
        });
})();