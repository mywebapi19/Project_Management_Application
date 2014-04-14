//include Module Lib

var sliderModule = require('dk.napp.drawer');
var isAndroid = Ti.Platform.osname === 'android';
var slideDrawer = null;

// iOS-specific test

var isiOS7Plus = function() {
	if (Titanium.Platform.name == 'iPhone OS') {
		var version = Titanium.Platform.version.split(".");
		var major = parseInt(version[0], 10);
		if (major >= 7) {
			return true;
		}
	}
	return false;
};

var createSlider = function() {

	slideDrawer = sliderModule.createDrawer({
		closeDrawerGestureMode : sliderModule.MODE_MARGIN,
		openDrawerGestureMode : sliderModule.MODE_ALL,
		animationMode : sliderModule.ANIMATION_NONE,
		showShadow : true, //no shadow in iOS7
		fading : 0.2, // 0-1
		parallaxAmount : 0., //0-1
		shadowWidth : "40dp",
		leftDrawerWidth : "260dp",
		fullscreen : false,
		top : isiOS7Plus() ? 20 : 0,
	});

	var leftMenuView = Ti.UI.createView({
		backgroundImage : "/images/backgrounds/transparent_white.png",
	});

	leftMenuView.width = "260dp";
	var centerView = require('/ui/views/centralView').createCentralView();
	slideDrawer.setLeftWindow(leftMenuView);
	slideDrawer.setCenterWindow(centerView);

	slideDrawer.open();

	if (isAndroid) {
		slideDrawer.setAnimationMode(sliderModule.ANIMATION_ZOOM);
	} else {
		slideDrawer.setOpenDrawerGestureMode(sliderModule.OPEN_MODE_ALL);
		slideDrawer.setCloseDrawerGestureMode(sliderModule.CLOSE_MODE_ALL);
		slideDrawer.setAnimationMode(sliderModule.ANIMATION_SLIDE_SCALE);
		slideDrawer.setShouldStretchDrawer(false);
	}

};
createSlider();
