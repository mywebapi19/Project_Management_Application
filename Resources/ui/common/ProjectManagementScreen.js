function ProjectManagementScreen() {

	/***********************************************************************************************************
	 *	Menu Drawer.
	 ***********************************************************************************************************/
	function createMenuDrawer() {

		var menuTitles = ["My Profile", "Projects", "Tickets ", "Create Ticket"];

		var leftMenuView = Ti.UI.createView({
			backgroundColor : 'white',
			width : Ti.UI.FILL,
			height : Ti.UI.FILL,
			layout : "vertical",
		});

		var leftTopView = Ti.UI.createView({
			top : 0,
			height : 44,
			backgroundColor : "#333"
		});

		leftMenuView.add(leftTopView);

		var mainView = Ti.UI.createView({
			backgroundColor : 'white',
			width : Ti.UI.FILL,
			height : Ti.UI.FILL
		});

		// create a menu
		var menuTableView = Titanium.UI.createTableView({
			separatorColor : GRAY_LIGHT,
		});

		for (var i = 0; i < menuTitles.length; i++) {

			var row = Titanium.UI.createTableViewRow({
				backgroundColor : "green",
			});

			var rowView = Titanium.UI.createView({
				height : Titanium.UI.SIZE,
				width : Titanium.UI.FILL,
				layout : "horizontal",
				backgroundColor : "pink",
			});

			if (i == 0) {
				var profileImage = Titanium.UI.createImageView({
					image : '/images/profile/profileImage.png',
					height : 40,
					width : 40,
					left : 5,
				});
				rowView.add(profileImage);
			}

			var menuLabel = Titanium.UI.createLabel({
				text : menuTitles[i],
				top : 5,
				bottom : 5,
				height : Titanium.UI.SIZE,
				width : Titanium.UI.FILL,
				textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
				font : {
					fontSize : 16
				},
			});
			rowView.add(menuLabel);
			row.add(rowView);
			menuTableView.appendRow(row);
		}

		leftMenuView.add(menuTableView);

		menuTableView.addEventListener("click", function(e) {

			switch(e.index) {
				case 0:
					drawer.toggleLeftWindow();
					break;

				case 1:
					drawer.setCenterWindow(Ti.UI.createView({
						backgroundColor : "red"
					}));
					drawer.toggleLeftWindow();
					//animate back to center
					break;

				case 2:
					drawer.setCenterWindow(mainView);
					drawer.toggleLeftWindow();
					//animate back to center
					break;
			}
		});

		return leftMenuView;

	}

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
		leftWindow : createMenuDrawer(),
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

