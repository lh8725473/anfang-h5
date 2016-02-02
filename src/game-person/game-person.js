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

        $scope.questions = Event.getPersonSignForm({
            id: $state.params.event_id
        })

        $scope.questions.$promise.then(function(questions) {
            questions.forEach(function(question){
                question.html = $sce.trustAsHtml(question.field)
            })
        })

        $scope.trustAsHtml = function(string){
            return $sce.trustAsHtml(string)
        }

        $scope.trustAsHtmlaaa = function(text){
            return $sce.trustAsHtml(text)
        }

        $scope.goGamePackage = function(){
            var data = {

            }

            for (var i = 0; i < $scope.questions.length - 1; i++) {
                var question = $scope.questions[i]
                var val = $('#id_' + question.name).val()
                // if ( val=== ''){
                //     alert('请完善所有资料')
                //     break
                // }

                data[question.name] = val
            }
           
            
            Event.postPersonSignForm({
                id: $state.params.event_id
            },data).$promise.then(function(questions) {
                $state.go('game-package', {
                    event_id: $state.params.event_id
                })
            });

        }

    }
]);