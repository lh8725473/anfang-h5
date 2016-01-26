angular.module('App.Loading', []).controller('App.Loading.Controller', [
    '$scope',
    '$rootScope',
    '$timeout',
    function(
        $scope,
        $rootScope,
        $timeout
    ) {
        $scope.loading = true;

        $scope.$on('$includeContentLoaded', function() {
            $timeout(function() {
                $scope.loading = false;
            }, 2000)
        });

        $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
            event.preventDefault();
            var state_name = toState.name
            var window_title = '赛事'
            switch(state_name){
                case "game-list":
                    window_title = '赛事'
                    break
                case "game-detail":
                    window_title = '赛事详情'
                    break
                case "user":
                    window_title = '个人中心'
                    break
                case "enroll":
                    window_title = '赛事报名'
                    break
                default:
                    window_title = '赛事'
            }


            var $body = $('body')
            document.title = window_title
            // hack在微信等webview中无法修改document.title的情况
            // var $iframe = $('<iframe src="./3123.png"></iframe>').on('load', function() {
            //   setTimeout(function() {
            //     $iframe.off('load').remove()
            //   }, 0)
            // }).appendTo($body)
        })

    }
]);