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
                })
                .state('sushiDetail', {
                    url: '/sushi/:sushiName/:sushiIngredients',
                    template: '<h1>The <span class="bigger-h1">{{ sushiName }}</span>' +
                    ' sushi is made with <span class="bigger-h1">{{ sushiIngredients }}</span>.</h1>',
                    controller: 'sushiDetailCtrler'
                });
        });
})();