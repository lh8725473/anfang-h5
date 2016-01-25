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

    // Widget
    //'App.Widgets',

    // Components
    'App.Loading',
    'App.Header',
    'App.Footer',
    'App.GameList',
    'App.GameDetail',
    'App.ProcessDetail',
    'App.Enroll',
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
                if (rejection.status == 401) { //401 token 无效

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
            .state('enroll', {
                url: '/enroll',
                templateUrl: 'enroll/enroll.html'
            })
            .state('user', {
                url: '/user',
                templateUrl: 'user/user.html'
            })
            .state('user-me', {
                url: '/user-me',
                templateUrl: 'user-me/user-me.html'
            })
            .state('user-enroll', {
                url: '/user-enroll',
                templateUrl: 'user-enroll/user-enroll.html'
            })
            .state('user-action', {
                url: '/user-action',
                templateUrl: 'user-action/user-action.html'
            })
            .state('user-integration', {
                url: '/user-integration',
                templateUrl: 'user-integration/user-integration.html'
            })
            .state('game-detail', {
                url: '/game-detail/:game_id',
                templateUrl: 'game-detail/game-detail.html'
            })
            .state('process-detail', {
                url: '/process-detail/:process_id',
                templateUrl: 'process-detail/process-detail.html'
            })
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


