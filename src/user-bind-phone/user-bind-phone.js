angular.module('App.User.BindPhone', []).controller('App.User.BindPhone.Controller', [
    '$scope',
    'Utils',
    function(
        $scope,
        Utils
    ) {

        $scope.getCode = function($event){
            Utils.countdownTimer($($event.currentTarget))
        }
        // $scope.news = [1,2,3,2]
        // $scope.user = User.getUser()

        // $scope.user.$promise.then(function(user) {
        //     console.log('aa')

        // })



    }
]);