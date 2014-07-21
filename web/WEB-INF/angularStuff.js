/**
 * Created by Vince on 7/20/2014.
 */

function TodoCtrl($scope) {
    $scope.getTotalTodos = function() {
        return $scope.todos.length;
    }

    $scope.todos = [{text: 'Learn AngularJs', done:false}, {text: 'Build an app', done:false}];

    $scope.addTodo = function() {
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = '';
    };

    $scope.clearCompleted = function() {
        $scope.todos = _.filter($scope.todos, function(todo) {
            return !todo.done;
        })
    };
}