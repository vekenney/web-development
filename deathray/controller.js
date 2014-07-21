/**
 * Created by Vince on 7/20/2014.
 */
function DeathrayMenuController($scope)
{
    $scope.menuState = { show: false };

    $scope.toggleMenu = function() {
     $scope.menuState.show = !$scope.menuState.show;
    };

    $scope.stun = function()
    {
        window.alert("You've been stunned");
    }

    $scope.disintegrate = function()
    {
        window.alert("You've been disintegrated");
    }

    $scope.erase = function()
    {
        window.alert("You have been erased");
    }
}