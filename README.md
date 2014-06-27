omniture-angular-service
========================

simple track system with angularjs and omniture

Add the omniture to your project
<script type="text/javascript">var s_account = "YourAccount";</script>
<script language="JavaScript" src="http://PATH-To-Your-Omniture-file/omniture.js"></script>

Add the tracksys.js to your Angularjs Application. 
*below the links above.
<script src="Your-app-foler/tracksys.js"></script>


Add the track to your controllers

angular.module('YourAppName')
  .controller('YourControllerName', [ 'Tracksys',
    function (Tracksys) {
 
 
      //On load page track
      Tracksys.Tracksys('YOUR PAGE NAME’);
 
      //Click event track
      $scope.clickFunction = function(event){
        Tracksys.trackClick(‘Your event name');
      };
 
 
    }
  ]);
