angular.module('App.Loading', []).controller('App.Loading.Controller', [
    '$scope',
    '$rootScope',
    '$timeout',
    'User',
    function(
        $scope,
        $rootScope,
        $timeout,
        User
    ) {
        //微信端授权权限判断
        $scope.user = User.getUserProfile()

        $scope.loading = true;

        $scope.$on('$includeContentLoaded', function() {
            $timeout(function() {
                $scope.loading = false;
            }, 2000)
            //debugger
        });

        $scope.slide = '';
  
        $rootScope.$on('$stateChangeStart', function(){
            $scope.slide = $scope.slide || 'slide-left'
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
                case "user-me":
                    window_title = '个人详细资料'
                    break
                case "user-enroll":
                    window_title = '我的报名'
                    break
                case "user-action":
                    window_title = '关注赛事'
                    break
                case "user-integration":
                    window_title = '我的积分'
                    break
                case "user-safe":
                    window_title = '账号安全'
                    break
                case "user-bind-phone":
                    window_title = '绑定手机'
                    break
                case "user-bind-email":
                    window_title = '修改密码'
                    break            
                case "user-me":
                    window_title = '个人详细资料'
                    break    

                default:
                    window_title = '赛事'
            }
            
            var $body = $('body')
            document.title = window_title
            //hack在微信等webview中无法修改document.title的情况
            var $iframe = $('<iframe src="img/loading.gif"></iframe>').on('load', function() {
              setTimeout(function() {
                $iframe.off('load').remove()
              }, 0)
            }).appendTo($body)
        })

    }
]);