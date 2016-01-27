angular.module('App.EventDeclaration', []).controller('App.EventDeclaration.Controller', [
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

        $scope.checkbox = false

        $scope.event_declaration = Event.getEventDeclaration({
            id: $state.params.event_id
        })

        $scope.trustAsHtml = function(contents){
            return $sce.trustAsHtml(contents)
        }

        $scope.goGamePerson = function(event_id){
            $state.go('game-person', {
                event_id: event_id
            })
        }

    }
]);