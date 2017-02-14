module.exports = ($scope, $state, ImagePath, GreetingService) => {
    $scope.thumbnail = ImagePath.iconPath;
    $scope.messages = GreetingService.getGreetings();
};