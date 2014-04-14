function ProjectManagementScreen() {

	var leftMenuView = pma.ui.getDrawerMenu();

	var centerView = Ti.UI.createView({
		backgroundColor : 'cyan',
		width : Ti.UI.FILL,
		height : Ti.UI.FILL
	});

	pma.ui.getActionBar(centerView);

	// create interface
	var scrollView = Ti.UI.createScrollView({
		left : 0,
		right : 0,
		top : 45,
		contentHeight : Titanium.UI.SIZE,
		contentWidth : Titanium.UI.FILL,
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : false,
		layout : "vertical",
	});

	centerView.add(scrollView);

	// CREATE THE MODULE
	var NappDrawerModule = require('dk.napp.drawer');
	//var drawer is not written to make to globally access.
	drawer = NappDrawerModule.createDrawer({
		fullscreen : false,
		leftWindow : leftMenuView,
		centerWindow : centerView,
		fading : 0.2, // 0-1
		parallaxAmount : 0.2, //0-1
		shadowWidth : 40,
		leftDrawerWidth : 250,
		rightDrawerWidth : 250,
		animationMode : NappDrawerModule.ANIMATION_ZOOM,
		closeDrawerGestureMode : NappDrawerModule.CLOSE_MODE_MARGIN,
		openDrawerGestureMode : NappDrawerModule.OPEN_MODE_ALL,
		orientationModes : [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT]
	});

	drawer.addEventListener('open', onNavDrawerWinOpen);
	function onNavDrawerWinOpen(evt) {
		this.removeEventListener('open', onNavDrawerWinOpen);

		if (this.getActivity()) {
			// need to explicitly use getXYZ methods
			var actionBar = this.getActivity().getActionBar();

			if (actionBar) {
				actionBar.hide();
			}
		}
	}

	// lets open it
	drawer.open();
}

module.exports = ProjectManagementScreen;

