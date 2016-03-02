angular.module('App.User', ['App.User.Me', 'App.User.Action', 'App.User.Enroll', 'App.User.Safe', 'App.User.Integration', 'App.User.UserPerson']).controller('App.User.Controller', [
    '$scope',
    'User',
    function(
        $scope,
        User
    ) {

        // $scope.news = [1,2,3,2]
        // $scope.user = User.getUser()

        // $scope.user.$promise.then(function(user) {
        //     console.log('aa')

        // })

        $scope.user = User.getUserProfile()



    }
]);