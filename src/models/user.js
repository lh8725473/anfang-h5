angular.module('App.Models').factory('User', [
    '$resource',
    function(
        $resource
    ) {
        return $resource('http://www.niren.org' + '/api/v1/my/:action', {}, {
            getUserProfile: {
                method: "GET",
                params: {
                    action: 'profile'
                }
            },
            getUserSign: {
                method: "GET",
                params: {
                    action: 'person_sign'
                },
                isArray: true
            },
            getUserFocus: {
                method: "GET",
                params: {
                    action: 'focus_game'
                },
                isArray: true
            }

        })
    }
])