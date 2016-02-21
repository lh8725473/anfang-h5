angular.module('App.User.Enroll', []).controller('App.User.Enroll.Controller', [
    '$scope',
    '$state',
    'User',
    function(
        $scope,
        $state,
        User
    ) {

        //$scope.news = [1,2,3,2]
        // $scope.user = User.getUser()

        // $scope.user.$promise.then(function(user) {
        //     console.log('aa')

        // })

        $scope.person_sign = User.getPersonSign()

        $scope.goPay = function($event, person_sign_id) {
            $event.stopPropagation()
            $event.preventDefault()
            $state.go('game-person-sign-detail', {
                person_sign_id: person_sign_id
            })
        }

    }
]);