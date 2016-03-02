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

        $scope.checkbox = false;

        $scope.event_declaration = Event.getEventDeclaration({
            id: $state.params.event_id
        });

        $scope.event_declaration.$promise.then(function (declaration) {
            if (declaration.title == "") {
                declaration.title = "请添加赛事声明";
            }
        });

        $scope.trustAsHtml = function(contents){
            return $sce.trustAsHtml(contents)
        };

        $scope.goGamePerson = function(event_id){
            $state.go('game-person', {
                event_id: $state.params.event_id
            })
        }

    }
]);