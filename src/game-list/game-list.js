angular.module('App.GameList', ['App.GameList.Carousel','App.GameList.List']).controller('App.GameList.Controller', [
    '$rootScope',
    '$scope',
    '$state',
    '$ionicSlideBoxDelegate',
    'Core',
    'Game',
    function(
        $rootScope,
        $scope,
        $state,
        $ionicSlideBoxDelegate,
        Core,
        Game
    ) {
        $scope.$state = $state
        $scope.month = ''
        $scope.city = ''
        $scope.img_list = []

        $scope.month_list = [
            {
                key: 1,
                value: '一月'
            },
            {
                key: 2,
                value: '二月'
            },
            {
                key: 3,
                value: '三月'
            },
            {
                key: 4,
                value: '四月'
            },
            {
                key: 5,
                value: '五月'
            },
            {
                key: 6,
                value: '六月'
            },
            {
                key: 7,
                value: '七月'
            },
            {
                key: 8,
                value: '八月'
            },
            {
                key: 9,
                value: '九月'
            },
            {
                key: 10,
                value: '十月'
            },
            {
                key: 11,
                value: '十一月'
            },
            {
                key: 12,
                value: '十二月'
            }


        ]

        $scope.data_all = Core.getDataAll({
            name: 'run_city'
        })

        $scope.data_all.$promise.then(function(data_all) {
            $scope.data_city = Core.getDtaChild({
                id: data_all[0].id
            })
        })

        $scope.searchGameList = function(){
            $rootScope.$broadcast('searchGameList', $scope.month, $scope.city)
        }

        $scope.game_list = Game.getGameList()

        $scope.game_list.$promise.then(function(game_list) {
            game_list.forEach(function(game) {
                $scope.img_list.push(game.avatar)
            })
            $ionicSlideBoxDelegate.update();
        })


    }
]);