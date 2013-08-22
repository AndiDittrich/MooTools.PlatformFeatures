/*!
 * Platform Feature Detection
 * @author Andi Dittrich
 * @version 2.0
 * @requires MooTools.Core
 * @license MIT Style X11 License
 * @url https://github.com/AndiDittrich/MooTools.PlatformFeatures
 */

(function(){
	window.addEvent('domready', function(){
		// ======================= COOKIE CHECK ============================
		if (cookiesEnabled()){
			$$('html').addClass('cookies');
		}else{
			$$('html').addClass('no-cookies');
		}
		
		// ======================= JS CHECK ================================
		$$('html').removeClass('no-js');
		$$('html').addClass('js');
		
		// ======================= First Visit ? ===========================
		if (!Cookie.read('session-init') == '1'){
			// set cookie
			Cookie.write('session-init', '1');
			
			// add class
			$$('html').addClass('session-init');
		}
		
		// ======================= Client Browser Info =====================
		window.PlatformFeatures = {
			features: Browser.Features,
			name: Browser.name,
			version: Browser.version,
			platform: Browser.Platform,
			plugins: Browser.Plugins,
			java: navigator.javaEnabled(),
			language: navigator.language,
			userAgent: navigator.userAgent,
			cookiesEnabled: cookiesEnabled(),
			time: (new Date()).getTime(),
			timezoneOffset: (new Date()).getTimezoneOffset()	
		};
		Cookie.write('PlatformFeatures', JSON.encode(window.PlatformFeatures));
	});
	
	var cookiesEnabled = (function(){
		// set dummy cookie
		var testcookie = 'ClientPlatformDetectionTestCookie' + String.uniqueID();
		Cookie.write(testcookie, testcookie);
	
		// try to read cookie and check content
		if (Cookie.read(testcookie) == testcookie){
			// remove cookie
			Cookie.dispose(testcookie);
			return true;	
		}else{
			return false;
		}
	});
}());
	