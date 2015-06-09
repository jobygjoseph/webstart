myModule.controller('FetchSchedule', ['$scope', '$http', function($scope, $http){
  // local variables
  var daDate = new Date(),
    now = daDate.toISOString(),
    yes = new Date(new Date().setDate(new Date().getDate()-1)).toISOString();

  now = now.split('.')[0];
  yes = yes.split('.')[0];

  var nbcWij = {
    domID : 'schedule_block', // where to render to
    //feed: 'http://feed.entertainment.tv.theplatform.com/f/HNK2IC/prod_msnbc_listing?byEndTime=2015-04-28T16:30:00-04:00~2015-04-29T16:30:00-04:00&callback=msFeedHandlerCallback&fields=pllisting:startTime,pllisting$program.pl$title,pllisting$program.pl$description,pllisting$program.plprogram$runtime&form=json&sort=pllisting:startTime'
    //feed:  'http://feed.entertainment.tv.theplatform.com/f/HNK2IC/prod_msnbc_listing?byEndTime=2015-06-08T04:30:00-04:00~2015-06-08T16:30:00-04:00&callback=msFeedHandlerCallback&fields=pllisting:startTime,pllisting$program.pl$title,pllisting$program.pl$description,pllisting$program.plprogram$runtime&form=json&sort=pllisting:startTime'
    //feed:  'http://feed.entertainment.tv.theplatform.com/f/HNK2IC/prod_msnbc_listing?byEndTime='+yes+'-04:00~'+now+'-04:00&callback=msFeedHandlerCallback&fields=pllisting:startTime,pllisting$program.pl$title,pllisting$program.pl$description,pllisting$program.plprogram$runtime&form=json&sort=pllisting:startTime'
    feed:  'http://feed.entertainment.tv.theplatform.com/f/HNK2IC/prod_msnbc_listing?byEndTime='+yes+'-04:00~'+now+'-04:00&fields=pllisting:startTime,pllisting$program.pl$title,pllisting$program.pl$description,pllisting$program.plprogram$runtime&form=json&sort=pllisting:startTime',
    intVal: ''    
  };

  // Simple utc to est function
  var convertToEST = function(timestamp) {
    var e = new Date(timestamp);
    e.setHours( e.getHours() - 4 );
    var daHour = e.getHours();
    daHour = daHour >= 12 ? ((daHour - 12) == 0 ? "12AM" : (daHour - 12) + 'PM' ) : ((daHour == 0) ? "12AM" : daHour + 'AM');

    return daHour;
  }

  var convertToMins = function(secs) {
    return secs / 60;
  }

  var http_method = 'GET';
  var http_url = nbcWij.feed;

  $http({method: http_method, url: http_url}).
    success(function(data, status) {
      $scope.entries = data.entries;
      console.log(data);
      console.log(status);
    }).
    error(function(data, status) {
      console.log(data);
      console.log(status);
  });

}]);