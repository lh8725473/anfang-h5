angular.module('App.Models').factory('Event', [
    '$resource',
    function(
        $resource
    ) {
        return $resource('http://123.56.79.196' + '/api/v1/match/event/:id/:declaration', {}, {
            getEventDeclaration: {
                method: "get",
                params: {
                    id: '',
                    declaration: 'declaration'
                }
            }


        })
    }
])