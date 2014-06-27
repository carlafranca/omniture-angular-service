'use strict';

//Change the general, Tracksys and trackClick information to fit your track requirements
//Change your application module name
angular.module('YourAppName')
  .service('Tracksys', function() {
    //this is for load page - common track info for every loading page
    function general(page){
        s.pageName='what-ever-you-want-static:'+page;
        s.prop1=s.pagename;
        s.server=window.location.hostname;
        s.charSet='UTF-8';
        s.channel="static-info";
        s.pageType='';
        
    }

    //this one is to track on load page - per page.. you can create a obj with your props and add here
    this.Tracksys= function(page) {
        general(page);

        //Add the props
        s.prop11='static-info';
        s.prop12='static-info';
        s.prop13='static-info';

		/* Conversion Variables */
		/* Hierarchy Variables */
        s.hier1=s.pageName;
		var sCode=s.t();
        if(sCode){document.write(sCode);}
    };


    //This is to track click events
    this.trackClick= function(eventName) {
        s.tl(this,'o','static-info - '+eventName);
    };

  });
