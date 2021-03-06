MooTools.PlatformFeatures
=========================

Simple detection of JS &amp; Cookies enabled with modernizr inspired CSS Classes

CSS-Feature Classes
-------------------
The following CSS-Classes are added to the <html> document tag
* **cookies/no-cookies** - indicates enabled cookies
* **js/no-js** (note: the no-js class has to be static added to the <html> tag!)
* **session-init** - indicates first visit since start of the current browser session (usefull for welcome messages/privacy statements)

Example Data of window.PlatformFeatures Object
--------------
```javascript
{

    "features":{
        "xpath":true,
        "air":false,
        "query":true,
        "json":true,
        "xhr":true
    },
    "name":"firefox",
    "version":23,
    "platform":{
        "name":"win",
        "win":true
    },
    "plugins":{
        "Flash":{
            "version":11,
            "build":800
        }
    },
    "java":false,
    "language":"de-DE",
    "userAgent":"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:23.0) Gecko/20100101 Firefox/23.0",
    "cookiesEnabled":true,
    "time":1377168219246,
    "timezoneOffset":-120
}
```

Installation
------------
* Include MooTools.Core (>= v1.4) into your Webpage
* Include PlatformFeatures.js
* That's it! - All detected features are accessible with `window.PlatformFeatures` Object

Usage Example
-------------
```html
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
	<!-- force charset !-->
	<meta charset="utf-8" />
	
	<!-- force latest IE rendering engine or chrome frame !-->
	<!--[if gte IE 7]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><![endif]-->
	
	<!-- page title !-->
	<title>PlaatformFeatures - Example Page</title>
	
	<!-- meta data !-->
	<meta name="description" content="" />
	
	<!-- force device dpi !-->
	<meta name="viewport" content="width=device-width" />
	
	<!-- Include JS -->
	<script type="text/javascript" src="mootools-core-1.4.5-full-nocompat.js"></script>
	<script type="text/javascript" src="PlatformFeatures.js"></script>
	
	<!-- DEMO: display window.PlatformFeatures Object -->
	<script type="text/javascript">
		window.addEvent('domready', function(){
			document.id('data').set('text', JSON.encode(window.PlatformFeatures));
			if (console){
				console.log(window.PlatformFeatures);
			}
		});	
	</script>
	
	<!-- DEMO: Using generated CSS classes for conditionals -->
	<style type="text/css" media="all">
		.no-js #jse{
			display: none;
		}
		.js #jsd{
			display: none;
		}
		.no-cookies #coe{
			display: none;
		}
		.cookies #cod{
			display: none;
		}	
	</style>
	
</head>
<body>

	<h2>JSON encoded String</h2>
	<div id="data"></div>
	
	<h3 id="jse">JS Enabled</h3>
	<h3 id="jsd">JS Disabled</h3>
	<h3 id="coe">Cookies Enabled</h3>
	<h3 id="cod">Cookies Disabled</h3>
</body>
</html>
```

