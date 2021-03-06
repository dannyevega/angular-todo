var app = angular.module('Todo', [])
  app.controller('TodoCtrl', function($scope){
    $scope.newTodo = '';

    $scope.todos = [
      'Learn Angular',
      'Go to the gym',
      'Get an umbrella'
    ];

  $scope.completed = function(todo){
    var index = $scope.todos.indexOf(todo);
    if(index !== -1) {
      $scope.todos.splice(index, 1);
    }
  };

  $scope.add = function(e){
    if(e.keyCode && e.keyCode === 13){
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = '';
    }
  };

  $scope.getTotal = function(){
    return $scope.todos.length;
  }

});