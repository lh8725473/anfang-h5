angular.module('App.Models').factory('User', [
    '$resource',
    function(
        $resource
    ) {
        return $resource(config.API_ROOT + '/api/v1/my/:action/:do', {}, {
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
            },
            getPersonSign: {
                method: "GET",
                params: {
                    action: 'person_sign'
                },
                isArray: true
            },
            getPersonSign: {
                method: "GET",
                params: {
                    action: 'person_sign'
                },
                isArray: true
            },
            updatePassword: {
                method: "POST",
                params: {
                    action: 'security',
                    do: 'update_password'
                }
            }

        })
    }
])