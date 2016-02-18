angular.module('App.User.BindPhone', []).controller('App.User.BindPhone.Controller', [
    '$scope',
    'Utils',
    'Core',
    '$state',
    function(
        $scope,
        Utils,
        Core,
        $state
    ) {

        $scope.cellphone = ''
        $scope.code = ''

        $scope.getCode = function($event){
            if(!Utils.checkNull($scope.cellphone)){
                alert('手机号码不能为空')
                return
            }

            if(!Utils.checkPhone($scope.cellphone)){
                alert('手机号码不正确')
                return
            }
            
            Utils.countdownTimer($($event.currentTarget))
            Core.sendSmsCode({},{
                cellphone: $scope.cellphone
            })
        }

        $scope.bindCellphone = function(){
            if(!Utils.checkNull($scope.code)){
                alert('验证码不能为空')
                return
            }

            Core.bindCellphone({},{
                cellphone: $scope.cellphone,
                code: $scope.code
            }).$promise.then(function(reps) {
                if(reps.success){
                    alert('绑定成功')
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