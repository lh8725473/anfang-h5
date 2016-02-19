angular.module('App.GamePerson', []).controller('App.GamePerson.Controller', [
    '$scope',
    '$sce',
    '$state',
    'Event',
    '$timeout',
    function(
        $scope,
        $sce,
        $state,
        Event,
        $timeout
    ) {
        $scope.$state = $state
        $scope.sub_ing = false

        // $scope.event_declaration = Event.getEventDeclaration({
        //     id: $state.params.event_id
        // })

        // $scope.trustAsHtml = function(contents){
        //     return $sce.trustAsHtml(contents)
        // }

        $scope.questions = Event.getPersonSignForm({
            id: $state.params.event_id
        })

        $scope.questions.$promise.then(function(questions) {
            questions.forEach(function(question) {
                question.html = $sce.trustAsHtml(question.field)
            })

            $timeout(function() {
                $('#id_nationality').change(function() {
                    var national_id = $('#id_nationality').val()
                    console.log(national_id)
                    $.ajax({
                        url: "http://www.niren.org/api/v1/core/get_province?national_id=" + national_id,
                        type: "get",
                        success: function(data) {
                            data.details.forEach(function(province) {
                                $("#id_province").append('<option value="'+province.id+'">'+province.value+'</option>')
                            })
                        },
                        error: function(respon) {
                            debugger
                        }
                    })
                })

                $('#id_province').change(function() {
                    var id_province = $('#id_province').val()
                    $("#id_city").html('')
                    $.ajax({
                        url: "http://www.niren.org/api/v1/core/get_province?province_id=" + id_province,
                        type: "get",
                        success: function(data) {
                            data.details.forEach(function(city) {
                                $("#id_city").append('<option value="'+city.id+'">'+city.value+'</option>')
                            })
                        },
                        error: function(respon) {
                            debugger
                        }
                    })
                })
            })

        })

        $scope.trustAsHtml = function(string) {
            return $sce.trustAsHtml(string)
        }

        $scope.trustAsHtmlaaa = function(text) {
            return $sce.trustAsHtml(text)
        }

        $scope.goGamePackage = function() {
            $scope.sub_ing = true

            var data = {

            }

            //表单是否完整
            var form_flag = true

            for (var i = 0; i < $scope.questions.length - 1; i++) {
                var question = $scope.questions[i]
                var val = $('#id_' + question.name).val()
                if (val === '') {
                    alert('请完善所有资料')
                    form_flag = false
                    $scope.sub_ing = false
                    break
                }

                data[question.name] = val
            }

            if (form_flag) {
                Event.postPersonSignForm({
                    id: $state.params.event_id
                }, data).$promise.then(function(reps) {
                    $state.go('game-package', {
                        person_sign_id: reps.person_sign_id
                    })
                }, function(error) {
                    alert('提交失败，服务器错误')
                    $scope.sub_ing = false
                });
            }


        }

    }
]);