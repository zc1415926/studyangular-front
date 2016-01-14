/**
 * Created by ZC on 2016/1/12.
 */
angular.module('studyangularApp')
    .constant('backgroundBaseUrl', 'https://study-angular-backend-zc1415926.c9users.io')
    .controller('sortFilterTableCtrler', function($scope){
        $scope.sortType     = 'name'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        $scope.searchFish   = '';     // set the default search/filter term

        // create the list of sushi rolls
        $scope.sushi = [
            { name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
            { name: 'Philly', fish: 'Tuna', tastiness: 4 },
            { name: 'Tiger', fish: 'Eel', tastiness: 7 },
            { name: 'Rainbow', fish: 'Variety', tastiness: 6 }
        ];
    })
    .controller('sushiDetailCtrler', function($scope, $stateParams){
        $scope.sushiName = $stateParams.sushiName;
        $scope.sushiIngredients = $stateParams.sushiIngredients;

        console.log($stateParams);
    })
    .controller('submitFormCtrler', function($scope, $http, backgroundBaseUrl){
        $scope.formData = {};
        $scope.processForm = function(){
            $http.post(
                backgroundBaseUrl + '/returnformdata',
                $scope.formData
            ).success(function(data){
                console.log(data);
            });
        }
    })
    .controller('formValidationCtrler', function($scope, $http, backgroundBaseUrl){
        $scope.submitForm = function(isValid){

            $scope.submitted = true;
            if(isValid){
                console.log($scope.userForm);
                $http.post(
                    backgroundBaseUrl + '/returnformdata',
                    $scope.userForm
                ).success(function(data){
                    console.log(data);
                });
            }
        }
    });