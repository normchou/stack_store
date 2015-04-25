'use strict';

//The Config below defines the /cart state, which will
//show all products in the cart.

app.config(function ($stateProvider){
    $stateProvider
        .state('cart', {
            url: '/cart',
            templateUrl: 'js/cart/cart.html',
            controller: 'CartController'
        });
});

//app.controller('CartController', function($scope, ))

app.controller('CartController', function($scope, $http) {

    $http.get('/api/products')
        .then(function(response) {
            $scope.productData = response.data
        })

});