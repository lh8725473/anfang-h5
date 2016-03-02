var appModule = angular.module('ionicApp', [
    // Libs
    'ionic',
    'ui.router',
    //'ui.bootstrap',

    // global components
    //'ACT.LoadingIndictor',

    // Locales
    //'App.Locales',

    // Config
    //'App.Config',

    // Models
    'App.Models',

    // Utils
    'App.Utils',

    // Components
    'App.Loading',
    'App.Header',
    'App.Footer',
    'App.GameList',
    'App.GameDetail',
    'App.ProcessDetail',
    'App.Enroll',
    'App.EventDeclaration',
    'App.GamePerson',
    'App.GamePackage',
    'App.GamePersonSignDetail',
    'App.User'

]);


// Http Interceptor Http配置
appModule.factory('httpInterceptor', [
    '$q',
    '$injector',
    function(
        $q,
        $injector
    ) {
        return {
            request: function(config) {
                // do something on success
                return config
            },

            response: function(response) {
                return response
            },
            responseError: function(rejection) {
                // Handle Request error
                if(rejection.status === 403){
                    window.location.href = config.API_ROOT + '/wechat/oauth2?next_url='+ config.API_ROOT +  +'/wap/src/src/'
                }
                return $q.reject(rejection)
            }
        }
    }
]);


//路由配置
appModule.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$httpProvider',
    function(
        $stateProvider,
        $urlRouterProvider,
        $httpProvider
    ) {
        $urlRouterProvider.otherwise('/game-list')
        $stateProvider
            .state('game-list', {
                url: '/game-list',
                templateUrl: 'game-list/game-list.html'
            })
            .state('game-detail', {
                url: '/game-detail/:game_id',
                templateUrl: 'game-detail/game-detail.html'
            })
            .state('process-detail', {
                url: '/process-detail/:process_id',
                templateUrl: 'process-detail/process-detail.html'
            })
            .state('enroll', {
                url: '/enroll/:enroll_id',
                templateUrl: 'enroll/enroll.html'
            })
            .state('event-declaration', {
                url: '/event-declaration/:event_id',
                templateUrl: 'event-declaration/event-declaration.html'
            })
            .state('game-person', {
                url: '/game-person/:event_id',
                templateUrl: 'game-person/game-person.html'
            })
            .state('game-package', {
                url: '/game-package/:event_id/:person_sign_id',
                templateUrl: 'game-package/game-package.html'
            })
            .state('game-person-sign-detail', {
                url: '/game-person-sign-detail/:person_sign_id',
                templateUrl: 'game-person-sign-detail/game-person-sign-detail.html'
            })
            .state('user', {
                cache: false,
                url: '/user',
                templateUrl: 'user/user.html'
            })
            .state('user-me', {
                cache: false,
                url: '/user-me',
                templateUrl: 'user-me/user-me.html'
            })
            .state('user-enroll', {
                cache: false,
                url: '/user-enroll',
                templateUrl: 'user-enroll/user-enroll.html'
            })
            .state('user-action', {
                cache: false,
                url: '/user-action',
                templateUrl: 'user-action/user-action.html'
            })
            .state('user-integration', {
                cache: false,
                url: '/user-integration',
                templateUrl: 'user-integration/user-integration.html'
            })
            .state('user-person', {
                cache: false,
                url: '/user-person',
                templateUrl: 'user-person/user-person.html'
            })
            .state('user-safe', {
                url: '/user-safe',
                templateUrl: 'user-safe/user-safe.html'
            })
            .state('user-bind-phone', {
                url: '/user-bind-phone',
                templateUrl: 'user-bind-phone/user-bind-phone.html'
            })
            .state('user-bind-email', {
                url: '/user-bind-email',
                templateUrl: 'user-bind-email/user-bind-email.html'
            });
            
            // .state('links.linkRecord', {
            //     url: '/linkRecord',
            //     templateUrl: 'src/app/links/link-record/template.html'
            // })
            // .state('files', {
            //     url: '/:cloudId/files/:folderId?lang&file_id&is_show_folder',
            //     templateUrl: 'src/app/files/template.html'
            // })

    $httpProvider.interceptors.push('httpInterceptor')


    }
]);


