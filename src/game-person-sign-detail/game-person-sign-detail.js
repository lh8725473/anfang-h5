angular.module('App.GamePersonSignDetail', []).controller('App.GamePersonSignDetail.Controller', [
    '$scope',
    '$state',
    'Event',
    function(
        $scope,
        $state,
        Event
    ) {
        $scope.$state = $state

        $scope.getOrderConfirm = Event.getOrderConfirm({
            id: $state.params.person_sign_id
        })

        $scope.postOrderConfirm = function() {
            Event.postOrderConfirm({
                id: $state.params.person_sign_id
            }, {

            }).$promise.then(function(reps) {

                $.get(
                    'http://www.niren.org/wechat/pay/get_bridge_params', {},
                    function(resp) {
                        console.log(resp);
                        payAction(resp);
                    }
                );

            }, function(error) {
                debugger
            });
        }

        var defaultConf = {
            debug: true,
            jsApiList: ['chooseWXPay']
        };

        $.post(
            'http://www.niren.org/wechat/jssdk/signature', {
                url: 'http://run.niren.org/wap/order.html' //此URL是支付页面的URL
            },
            function(resp) {
                defaultConf = $.extend(defaultConf, resp);
                wx.config(defaultConf);
                wx.ready(function() {
                    $("body").append("js-sdk 初始化成功");
                });
                wx.error(function(res) {
                    $("body").append("js-sdk 初始化失败......");
                });
            }
        );

        var payAction = function(params) {
            var obj = {
                success: function(res) {
                    if (res.errMsg == "chooseWXPay:ok") {
                        //支付成功
                        alert('支付成功')
                    } else {
                        alert(res.errMsg);
                    }
                },
                cancel: function(res) {
                    //支付取消

                    alert('支付失败')
                }
            };
            obj = $.extend(obj, params);
            console.log(obj);
            wx.chooseWXPay(obj);
        };

    }
]);