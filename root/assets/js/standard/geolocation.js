mwf.touch.geolocation=new function(){var b={GENERAL:"Geolocation failure.",NO_SUPPORT:"No geolocation support available."};var c=-1;var a=null;var e=true;var d=3000;var f=5000;this.getType=function(){if(c<0){c=navigator.geolocation?1:google.gears?2:0}return c};this.getTypeName=function(){switch(this.getType()){case 1:return"HTML5 Geolocation";case 2:return"Google Gears";default:return"Unsupported"}};this.getApi=function(){switch(this.getType()){case 1:return navigator.geolocation;case 2:return google.gears.factory.create("beta.geolocation");default:return null}};this.isSupported=function(){return this.getType()>0};this.getPosition=function(i,g){var h=this.getApi();if(!h){g(b.NO_SUPPORT);return}h.getCurrentPosition(function(j){if(typeof i!="undefined"){i({latitude:j.coords.latitude,longitude:j.coords.longitude,accuracy:j.coords.accuracy})}},function(){if(typeof g!="undefined"){g(b.GENERAL)}},{enableHighAccuracy:e,maximumAge:d,timeout:f});return true};this.watchPosition=function(j,h){var i=this.getApi();if(!i){h(b.NO_SUPPORT);return}var g=i.watchPosition(function(k){j&&j({latitude:k.coords.latitude,longitude:k.coords.latitude,accuracy:k.coords.accuracy})},function(k){h&&h(b.GENERAL)},{enableHighAccuracy:e,maximumAge:d,timeout:f});return g};this.clearWatch=function(g){var h=this.getApi();if(!h){onError(b.NO_SUPPORT);return}h.clearWatch(g)};this.setTimeout=function(g){d=g};this.setHighAccuracy=function(g){e=g}};