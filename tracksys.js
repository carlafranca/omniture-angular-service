'use strict';

//Change the general, Tracksys and trackClick information to fit your track requirements
//Change your application module name
angular.module('YourAppName')
  .service('Tracksys', function() {
     //This function will clear custom variables
     function clearVars(){
  	for (var i=0; i < 75; i++) {
	    s['prop'+i]='';
    	    s['eVar'+i]='';
    	    if(i<=5){
      	        s['hier'+i]='';
    	    }
   	}
   	//var svarArr = ['pageName','channel','products','events','campaign','purchaseID','state','zip','server','linkName'];
  	//for (var i=0; i < svarArr.length ; i++) {
     	//	s[svarArr[i]]=''; 
	// }
    }
    
    //this is for common track info on every loading page
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
	//clearVars();
	
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
    	clearVars();
        s.tl(this,'o','static-info - '+eventName);
    };

  });
