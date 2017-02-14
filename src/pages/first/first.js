/* @flow */

module.exports = ($scope: any, $state: any, ImagePath: any) => {

    $scope.iconPath = ImagePath.iconPath;
    $scope.imagePath = ImagePath.imagePath;

    $scope.goListPage = function() {
        $state.go('list');
    };
};