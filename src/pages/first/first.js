'use strict';

module.exports = ($scope, $state, ImagePath) => {
    $scope.iconPath = ImagePath.iconPath;
    $scope.imagePath = ImagePath.imagePath;

    $scope.goListPage = function() {
        $state.go('list');
    };
};