angular.module('App.Utils', []).factory('Utils', [
    
    function(
        
    ) {

        return{
            countdownTimer: function(target){
                var duration = 60
                var timer = setInterval(function(){
                    duration = duration - 1
                    target.text(duration + "秒后重新获取").prop('disabled',true)

                    if(duration === 0) {
                        clearInterval(timer)
                        target.text("获取验证码").prop('disabled',false)
                    }
                }, 1000)
            }

        }



    }
]);