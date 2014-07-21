/**
 * Created by Vince on 7/20/2014.
 */
function HelloController($scope) {
    $scope.greeting = {
        text: 'Hello' };
}

function StartUpController($scope)
{
    $scope.funding = {startingEstimate: 0};

    $scope.computeNeeded = function()
    {
        $scope.funding.needed = $scope.funding.startingEstimate * 10;
    };

    $scope.requestFunding = function()
    {
        window.alert("Sorry, this is the error message");
    };

    $scope.reset = function()
    {
        $scope.funding.startingEstimate = 0;
        $scope.funding.needed = 0;
    };

}