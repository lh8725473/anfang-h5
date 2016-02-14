angular.module('App.Models').factory('Wechat', [
    '$resource',
    function(
        $resource
    ) {
        return $resource(config.API_ROOT + '/wechat/:action', {}, {
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