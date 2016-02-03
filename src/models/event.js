angular.module('App.Models').factory('Event', [
    '$resource',
    function(
        $resource
    ) {
        return $resource(config.API_ROOT + '/api/v1/match/event/:id/:action/:form', {}, {
            getEventDeclaration: {
                method: "get",
                params: {
                    id: '',
                    action: 'declaration'
                }
            },
            getPersonSignForm: {
                method: "get",
                params: {
                    id: '',
                    action: 'person_sign',
                    form: 'form'
                },
                isArray: true
            },
            postPersonSignForm: {
                method: "post",
                params: {
                    id: '',
                    action: 'person_sign'
                }
            },
            postPersonSignProduct: {
                method: "post",
                params: {
                    id: '',
                    action: 'product'
                }
            },
            getOrderConfirm: {
                method: "get",
                params: {
                    id: '',
                    action: 'order',
                    form: 'confirm'
                }
            },
            postOrderConfirm: {
                method: "post",
                params: {
                    id: 0,
                    action: 'order',
                    form: 'confirm'
                }
            }


        })
    }
])