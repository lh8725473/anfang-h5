angular.module('App.Utils', []).factory('Utils', [

    function(

    ) {

        return {
            countdownTimer: function(target) {
                var duration = 60
                var timer = setInterval(function() {
                    duration = duration - 1
                    target.text(duration + "秒后重新获取").prop('disabled', true)

                    if (duration === 0) {
                        clearInterval(timer)
                        target.text("获取验证码").prop('disabled', false)
                    }
                }, 1000)
            },
            checkNull: function(val) {
                return String(val)
            },
            checkPhone: function(val) {
                var reg = /^1[3|4|5|7|8][0-9]\d{8}$/
                return reg.test(val)
            },
            checkSecurity: function(val) {
                debugger
                return reg.test(val)
            }

        }



    }
]);