omniture-angular-service
========================

Basic seed for a omniture trac system with.

Add the omniture and account to your project
```javascript
<script type="text/javascript">var s_account = "YourAccount";</script>
<script language="JavaScript" src="http://PATH-To-Your-Omniture-file/omniture.js"></script>
<script src="Your-app-folder/tracksys.js"></script>
```

Add the track to your controllers


```javascript
angular.module('YourAppName')
  .controller('YourControllerName', [ 'Tracksys',
    function (Tracksys) {
 
     
      //On load page track
      Tracksys.Tracksys('YOUR PAGE NAME');
      
      
      //Click event track
      $scope.clickFunction = function(event){
        Tracksys.trackClick('Your event name');
      };
      
    }
    
  ]);
```