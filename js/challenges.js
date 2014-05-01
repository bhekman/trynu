angular.module('project', [])

.filter('range', function () {
  return function (input, total) {
    total = parseInt(total);
    for (var i = 0; i < total; i++) {
      input.push(i);
    }
    return input;
  };
});

function GridController($scope) {  
  $scope.challenges = [
    {"name":"Viking Challenge", "img":"img/viking.jpg", "description":"stuff here"},
    {"name":"Fishbowl Challenge", "img":"img/fishbowl.jpg", "description":"stuff here"},
    {"name":"Viking2 Challenge", "img":"img/viking.jpg", "description":"stuff here"},
    {"name":"Viking2 Challenge", "img":"img/viking.jpg", "description":"stuff here"},
    {"name":"Viking2 Challenge", "img":"img/viking.jpg", "description":"stuff here"},
    {"name":"Viking2 Challenge", "img":"img/viking.jpg", "description":"stuff here"},
    {"name":"Viking2 Challenge", "img":"img/viking.jpg", "description":"stuff here"},
    {"name":"Viking2 Challenge", "img":"img/viking.jpg", "description":"stuff here"}
  ];
}


