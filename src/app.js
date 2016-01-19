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
    'App.User'

]);

appModule.config([
    '$stateProvider',
    '$urlRouterProvider',
    function(
        $stateProvider,
        $urlRouterProvider
    ) {
        $urlRouterProvider.otherwise('/gameList')
        $stateProvider
            .state('gameList', {
                url: '/gameList',
                templateUrl: 'game-list/game-list.html'
            })

            .state('user', {
                url: '/user',
                templateUrl: 'user/user.html'
            })
            // .state('links.linkRecord', {
            //     url: '/linkRecord',
            //     templateUrl: 'src/app/links/link-record/template.html'
            // })
            // .state('files', {
            //     url: '/:cloudId/files/:folderId?lang&file_id&is_show_folder',
            //     templateUrl: 'src/app/files/template.html'
            // })
            

    }
]);