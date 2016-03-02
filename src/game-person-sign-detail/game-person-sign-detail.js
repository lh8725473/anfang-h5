angular.module('App.GamePersonSignDetail', []).controller('App.GamePersonSignDetail.Controller', [
    '$scope',
    '$state',
    'Event',
    function ($scope,
              $state,
              Event) {
        $scope.$state = $state

        //防止重复提交订单支付
        $scope.pay_ing = false

        $scope.getOrderConfirm = Event.getOrderConfirm({
            id: $state.params.person_sign_id
        })

        $scope.postOrder = Event.postOrderConfirm({
            id: $state.params.person_sign_id
        }, {})

        $scope.postOrderConfirm = function () {
            $scope.pay_ing = true
            $.ajax({
                type: "POST",
                url: config.API_ROOT + '/wechat/pay/get_bridge_params',
                dataType: 'json',
                data: {
                    trade_no: $scope.postOrder.trade_no
                },
                success: function (resp) {
                    payAction(resp);
                },
                error: function(resp){
                    alert(resp.responseJSON.detail);
                }
            });
        };

        var defaultConf = {
            debug: false,
            jsApiList: ['chooseWXPay']
        };
        console.log('=======$state.params.person_sign_id======');
        console.log($state.params.person_sign_id);
        $.post(
            config.API_ROOT + '/wechat/jssdk/signature', {
                url: config.API_ROOT +
                '/wap/src/src/#/game-person-sign-detail/' +
                $state.params.person_sign_id //此URL是支付页面的URL
            },
            function (resp) {
                defaultConf = $.extend(defaultConf, resp);
                wx.config(defaultConf);
                wx.ready(function () {
                    //alert("js-sdk 初始化成功");
                });
                wx.error(function (res) {
                    alert("js-sdk 初始化失败......");
                });
            }
        );

        var payAction = function (params) {
            var obj = {
                success: function (res) {
                    if (res.errMsg == "chooseWXPay:ok") {
                        //支付成功
                        $.post(
                            config.API_ROOT + '/wechat/pay/query_order',
                            {
                                trade_no: $scope.postOrder.trade_no
                            },
                            function (resp) {
                            }
                        );
                        alert('支付成功');
                        $state.go('user-enroll');
                    } else {
                        $scope.pay_ing = false
                        alert(res.errMsg);
                    }
                },
                cancel: function (res) {
                    //支付取消
                    $scope.pay_ing = false
                    alert('支付失败')
                }
            };
            obj = $.extend(obj, params);
            wx.chooseWXPay(obj);
        };

    }
]);