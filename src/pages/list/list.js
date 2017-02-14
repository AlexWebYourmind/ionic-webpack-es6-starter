/* @flow */

module.exports = ($scope: any, $state: any, ImagePath: any, GreetingService: any) => {
    $scope.thumbnail = ImagePath.iconPath;
    $scope.messages = GreetingService.getGreetings();
};