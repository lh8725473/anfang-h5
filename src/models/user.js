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
            editUserProfile: {
                method: "PATCH",
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
            updatePassword: {
                method: "POST",
                params: {
                    action: 'security',
                    do: 'update_password'
                }
            },
            getUserIntegral: {
                method: "GET",
                params: {
                    action: 'integral'
                }
            },
            getUserBaseInfo: {
                method: "GET",
                params: {
                    action: 'base_info'
                },
                isArray: true
            },
            postUserBaseInfo: {
                method: "POST",
                params: {
                    action: 'base_info'
                }
            }

        })
    }
])