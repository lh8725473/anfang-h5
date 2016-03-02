angular.module('App.Enroll', []).controller('App.Enroll.Controller', [
    '$scope',
    '$state',
    'Game',
    function(
        $scope,
        $state,
        Game
    ) {
        $scope.$state = $state

        $scope.event_list = Game.getEventList({
            id: $state.params.enroll_id
        })

        $scope.goEventDeclaration = function(event){
            //判断是否已经过报名时间
            if(Date.parse(new Date()) > Date.parse(new Date(event.reg_end_time))){
                 alert('已经过了报名时间，无法报名！')
                 return
            }

            //判断是否已经报名
            Game.signed({
                id: $state.params.enroll_id
            }).$promise.then(function(signed) {
                if(!signed.detail){
                    $state.go('event-declaration', {
                        event_id: event.id
                    })
                }else{
                    alert('您已经报名了此赛事，不能重复报名！')
                }
            }) 

        	
        }
    }
]);