var myApp = angular.module('myApp', []);

    myApp.factory('taskFactory', function (){
      var tasks = [
              {task:'Hit Sourabh in the face', priority:'HIGH', deadline:'9/18/2015, 3:12:51 PM', created_at:'9/08/2015, 1:23:01 PM'},
              {task:'Get Black Belt', priority:'MEDIUM', deadline:'9/20/2015, 6:24:21 AM', created_at:'3/17/2015, 7:21:01 AM'},
              {task:'Bother Lan', priority:'MEDIUM', deadline:'9/30/2015, 1:11:11 PM', created_at:'1/27/2014, 2:10:11 AM'},
              {task:'Get some work done', priority:'LOW', deadline:'9/24/2015, 7:23:21 PM', created_at:'12/27/2014, 9:18:33 PM'},
              {task:'HIGH PRIORITY', priority:'HIGH', deadline:'9/30/2015, 1:11:11 PM', created_at:'1/27/2014, 2:10:11 AM'},
              {task:'MEDIUM PRIORITY', priority:'MEDIUM', deadline:'9/30/2015, 1:11:11 PM', created_at:'1/27/2014, 2:10:11 AM'}
          ];
      var factory = {};
      factory.getTasks = function (callback){
          callback(tasks);
      }
      return factory;
    });

    myApp.controller('tasksController', function ($scope, taskFactory){
        $scope.tasks = [];

        taskFactory.getTasks(function (data){
          console.log(data);
          $scope.tasks = data;
        })

        $scope.addTask = function(){
          var a = new Date();
          $scope.newTask.created_at = a.toLocaleString();
          var b = $scope.newTask.deadline;
          $scope.newTask.deadline = b.toLocaleString();
          $scope.tasks.push($scope.newTask);
          $scope.newTask = {};
        }

        $scope.removeTask = function (task){
            $scope.tasks.splice($scope.tasks.indexOf(task), 1);
        }

        $scope.prioritySort = function(task){
          if(task.priority == 'HIGH'){
            return 1;
          }
          else if(task.priority == 'MEDIUM'){
            return 2;
          }
          else{
            return 3;
          }
        }
    })