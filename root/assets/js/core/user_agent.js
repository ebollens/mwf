mwf.user_agent=new function(){var a=mwf.userAgent,b=mwf.classification;this.is_iphone_os=function(){return a.getOS()=="ios"};this.is_webkit_engine=function(){return navigator.userAgent.match(/(webkit)/i)!=null&&!navigator.userAgent.match(/(webkit\/41)/i)!=null};this.get_browser=a.getBrowser;this.get_browser_version=a.getBrowserVersion;this.get_os=a.getOS;this.get_os_version=a.getOSVersion;this.is_mobile=function(){return b.isMobile()?1:0};this.is_basic=function(){return b.isBasic()?1:0};this.is_standard=function(){return b.isStandard()?1:0};this.is_full=function(){return b.isFull()?1:0};this.is_touch=function(){return b.isStandard()?1:0};this.is_overridden=function(){return b.isFull()?1:0};this.is_overridden=function(){return b.isOverride()?1:0};this.is_preview=function(){return b.isOverride()&&!b.isMobile()?1:0}};