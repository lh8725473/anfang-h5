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

        $scope.goEventDeclaration = function(event_id){
            //判断是否已经报名
            Game.signed({
                id: $state.params.enroll_id
            }).$promise.then(function(signed) {
                if(!signed.detail){
                    $state.go('event-declaration', {
                        event_id: event_id
                    })
                }else{
                    alert('您已经报名了此赛事，不能重复报名！')
                }
            }) 

        	
        }
    }
]);