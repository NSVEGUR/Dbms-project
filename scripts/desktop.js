/*
Enable the "Request Desktop Site" functions on mobile chrome (android and iOS) allow users to see desktop layouts on responsive sites.  Note that this is distinct from "opt out of mobile!" buttons built into your site: this is meant to work with the browser's native opt-in/opt-out functionality.  
Since these functions work, in part, by simply spoofing the user agent to pretend to be desktop browsers, all we have to do is just remember that the browser once claimed to be android earlier in the same session and then alter the viewport tag in response to its fib.  
Here's an example viewport tag <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> that we'd be setting to scaleable-yes,max scale=2.  That's just an example of something that works on the site I was building: you should customize the "desktop" viewport content setting to whatever works for your site's needs.  If you wanted, you could stick this code in the head just after the primary viewport tag so that the browser doesn't have to re-render the page so much.  Myself, I prefer to leave it at the bottom, since it's a non-critical, probably rarely used, feature at this point: those people who do use it can handle a little extra repaint time.  I was surprised that the Firefox workaround actually works with the code outside of the head, but it does.
*/
(function (d) {
	//quick dookie checker
	function C(k) { return (d.cookie.match('(^|; )' + k + '=([^;]*)') || 0)[2]; }

	var ua = navigator.userAgent, //get the user agent string
		ismobile = / mobile/i.test(ua), //android and firefox mobile both use android in their UA, and both remove it from the UA in their "pretend desktop mode"
		mgecko = !!(/ gecko/i.test(ua) && / firefox\//i.test(ua)), //test for firefox
		wasmobile = C('wasmobile') === "was", //save the fact that the browser once claimed to be mobile
		desktopvp = 'user-scalable=yes, maximum-scale=2',
		el;

	if (ismobile && !wasmobile) {
		d.cookie = "wasmobile=was"; //if the browser claims to be mobile and doesn't yet have a session cookie saying so, set it
	}
	else if (!ismobile && wasmobile) {
		//if the browser once claimed to be mobile but has stopped doing so, change the viewport tag to allow scaling and then to max out at whatever makes sense for your site (could use an ideal max-width if there is one)
		if (mgecko) {
			el = d.createElement('meta');
			el.setAttribute('content', desktopvp);
			el.setAttribute('name', 'viewport');
			d.getElementsByTagName('head')[0].appendChild(el);
		} else {
			d.getElementsByName('viewport')[0].setAttribute('content', desktopvp); //if not Gecko, we can just update the value directly
		}
	}
}(document));