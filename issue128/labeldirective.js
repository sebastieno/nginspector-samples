angular.module("vorlontestlabel", [])
.directive("labeltest",
function () {
    return {
        controller: function ($scope, $http) {
            $scope.labeltext = "test label";
        },
        templateUrl: 'labeltemp.html',
        scope: { label: "@label" },
        restrict: "E"
    }
})