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
            //debugger
        });

        $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
            event.preventDefault();
            var state_name = toState.name
            var window_title = ''
            switch(state_name){
                case "game-list":
                    window_title = '赛事'
                    break
                case "game-detail":
                    window_title = '赛事详情'
                    break
                case "process-detail":
                    window_title = '赛程介绍'
                    break
                case "enroll":
                    window_title = '赛事报名'
                    break
                case "event-declaration":
                    window_title = '协议声明'
                    break
                case "game-person":
                    window_title = '资料填写'
                    break 
                case "game-package":
                    window_title = '套餐选择 '
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
            hack在微信等webview中无法修改document.title的情况
            var $iframe = $('<iframe src="./3123.png"></iframe>').on('load', function() {
              setTimeout(function() {
                $iframe.off('load').remove()
              }, 0)
            }).appendTo($body)
        })

    }
]);