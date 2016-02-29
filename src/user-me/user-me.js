angular.module('App.User.Me', []).controller('App.User.Me.Controller', [
    '$scope',
    '$state',
    'User',
    function(
        $scope,
        $state,
        User
    ) {

        //$scope.news = [1,2,3,2]
        $scope.user = User.getUserProfile()

        // $scope.user.$promise.then(function(user) {
        //     console.log('aa')

        // })

        //修改资料
        $scope.editUserProfile = function(user){
            User.editUserProfile({

            },{
                name: user.name,
                nick_name: user.nick_name,
                location: user.location,
                note: user.note

            }).$promise.then(function(reps) {
                alert('修改成功')
                $state.go('user')
            }, function(error) {
                alert(error)
            });
        }

    }
]);