angular.module('App.User.BindEmail', []).controller('App.User.BindEmail.Controller', [
    '$scope',
    'User',
    'Utils',
    '$state',
    function(
        $scope,
        User,
        Utils,
        $state
    ) {
        $scope.oldpwd = ''
        $scope.newpwd1 = ''
        $scope.newpwd2 = ''

        $scope.updatePassword = function($event){
            debugger
            if(!Utils.checkNull($scope.oldpwd)){
                alert('旧密码不能为空')
                return
            }

            if(!Utils.checkNull($scope.newpwd1)){
                alert('新密码不能为空')
                return
            }

            if($scope.newpwd1 !== $scope.newpwd2){
                alert('2次输入的密码不一致')
                return
            }
            
            User.updatePassword({},{
                oldpwd: $scope.oldpwd,
                newpwd1: $scope.newpwd1,
                newpwd2: $scope.newpwd2,
            }).$promise.then(function(reps) {
                if(reps.success){
                    alert('修改密码成功')
                    $state.go('game-list')
                }else{
                    alert(reps.reason)
                }
            })
        }


        // $scope.news = [1,2,3,2]
        // $scope.user = User.getUser()

        // $scope.user.$promise.then(function(user) {
        //     console.log('aa')

        // })



    }
]);