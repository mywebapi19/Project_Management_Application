//include Module Lib

var sliderModule = require('dk.napp.drawer');
var slideDrawer = null;



var createSlider = function() {

	slideDrawer = sliderModule.createDrawer({
		leftWindow : createMenuDrawer(),
		closeDrawerGestureMode : sliderModule.MODE_MARGIN,
		openDrawerGestureMode : sliderModule.MODE_ALL,
		animationMode : sliderModule.ANIMATION_NONE,
		showShadow : true, //no shadow in iOS7
		fading : 0.2, // 0-1
		parallaxAmount : 0., //0-1
		shadowWidth : "40dp",
		leftDrawerWidth : "260dp",
		fullscreen : false,
		top : 0,
	});

	var leftMenuView = Ti.UI.createView({
		backgroundImage : "/images/backgrounds/transparent_white.png",
	});

	leftMenuView.width = "260dp";
	var centerView = require('/ui/views/centralView').createCentralView();
	slideDrawer.setLeftWindow(leftMenuView);
	slideDrawer.setCenterWindow(centerView);

	slideDrawer.open();

	slideDrawer.setAnimationMode(sliderModule.ANIMATION_ZOOM);

};
createSlider();
