var phoneListApp = angular.module('phoneListApp', []);

phoneListApp.controller('phoneListController', function ($scope) {
    $scope.phones = [{"name": "iPhone 4S", "snippet": "iPhone 4S got new voice assistant", 'age': 4}, {
        "name": "iPhone 5S",
        "snippet": "iPhone 5S got new touch Id", 'age': 2
    }, {"name": "iPhone 6S", "snippet": "iPhone 6S got new touch", 'age': 1}];
    $scope.orderProp = 'name';
});