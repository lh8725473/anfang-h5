angular.module('App.GamePerson', []).controller('App.GamePerson.Controller', [
    '$scope',
    '$sce',
    '$state',
    'Event',
    function(
        $scope,
        $sce,
        $state,
        Event
    ) {
        $scope.$state = $state

        // $scope.event_declaration = Event.getEventDeclaration({
        //     id: $state.params.event_id
        // })

        // $scope.trustAsHtml = function(contents){
        //     return $sce.trustAsHtml(contents)
        // }

        $scope.goGamePackage = function(){
            $state.go('game-package', {
                event_id: $state.params.event_id
            })
        }
    }
]);