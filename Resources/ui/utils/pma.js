function pma() {
}

pma.trialCall = {};

pma.trialCall.open = function() {
	alert("Trial Global Call");
};

/***********************************************************************************************************
 *	pma.drawer;  Used for Drawer Reference.
 ***********************************************************************************************************/

/***********************************************************************************************************
 *	pma.ui.functionName();  This module is used for UI.
 ***********************************************************************************************************/

pma.ui = {};

/***********************************************************************************************************
 *	TextField and Button
 ***********************************************************************************************************/
pma.ui.getLabel = function() {

	var label = Titanium.UI.createLabel({
		text : " * ",
		color : "red",
		top : 10,
		left : 0,
		textAlign : Titanium.UI.TEXT_ALIGNMENT_LEFT,
		font : {
			fontSize : 10,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
	});

	return label;
};

pma.ui.getHorizontalWrapper = function() {

	var horizontalItemWrapper = Titanium.UI.createView({
		height : Titanium.UI.SIZE,
		width : Titanium.UI.FILL,
		backgroundColor : "transparent",
		layout : "horizontal",
	});

	return horizontalItemWrapper;
};

pma.ui.getTextField = function(hintText) {

	var textField = Ti.UI.createTextField({
		hintText : hintText,
		color : '#000',
		width : '94%',
		height : 45,
		right : 0,
		textAlign : 'left',
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
		autocorrect : false,
		enableReturnKey : true,
		keyboardType : Titanium.UI.KEYBOARD_EMAIL,
		clearButtonMode : Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
	});

	return textField;
};

pma.ui.getButton = function(title) {
	var button = Titanium.UI.createButton({
		title : title,
		color : '#FFF',
		backgroundColor : '#acacac',
		backgroundImage : 'none',
		backgroundSelectedColor : '#9B9B9B',
		backgroundFocusedColor : '#BCBCBC',
		borderWidth : 0,
		borderRadius : 4,
		width : '94%',
		height : 40,
		top : 10,
		font : {
			fontSize : 16,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
	});

	return button;
};

/***********************************************************************************************************
 *	Menu Drawer.
 ***********************************************************************************************************/
pma.ui.getDrawerMenu = function() {

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
	var leftTableView = Ti.UI.createTableView({
		font : {
			fontSize : 12
		},
		rowHeight : 45,
		data : [{
			title : 'Toggle Left View'
		}, {
			title : 'Change Center Windowr'
		}, {
			title : 'Default Window'
		}],
		separatorColor : "#DBDBDB",
	});
	leftMenuView.add(leftTableView);

	leftTableView.addEventListener("click", function(e) {

		switch(e.index) {
			case 0:
				drawer.toggleLeftWindow();
				pma.trialCall.open();
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
};

/***********************************************************************************************************
 *	Action Bar
 ***********************************************************************************************************/

pma.ui.getActionBar = function(parent) {
	var menuButtonWrapper = Ti.UI.createView({
		top : 0,
		left : 0,
		width : '60dp',
		height : "44dp",
	});

	var menuButton = Ti.UI.createLabel({
		text : "\uf0c9",
		font : {
			fontSize : '25dp',
			fontFamily : "FontAwesome"
		},
		left : 6,
		backgroundColor : "transparent",
		color : "#FFF"
	});

	menuButtonWrapper.addEventListener("click", function() {
		drawer.toggleLeftWindow();
	});

	var centerLabel = Ti.UI.createLabel({
		text : "NappDrawer",
		font : {
			fontSize : 14,
			fontWeight : "bold"
		},
		color : "#FFF"
	});
	var actionBar = Ti.UI.createView({
		top : 0,
		height : 44,
		backgroundColor : "#333"
	});

	menuButtonWrapper.add(menuButton);
	actionBar.add(menuButtonWrapper);

	actionBar.add(centerLabel);
	parent.add(actionBar);
};

pma.module1 = {};
pma.module2 = {};

pma.module1.open = function(obj, parent, params, attachment) {

	var window = null;

	switch(obj) {
		case 'idea':
			var IdeaScreen = require('/ui/common/WebstormIdeaDetailScreen');
			window = new IdeaScreen(parent, params);
			break;

		case 'ideaList':
			var IdeaListScreen = require('/ui/common/WebstormIdeaListScreen');
			window = new IdeaListScreen(parent, params);
			break;

		case 'ideaListScreen':
			//idea list not bind to webstorm
			var IdeaListScreen = require('/ui/common/IdeaListScreen');
			window = new IdeaListScreen(parent, params);
			break;

		case 'challengeTopic':
			var WebstormTopicScreen = require('/ui/common/WebstormTopicScreen');
			window = new WebstormTopicScreen(parent, params);
			break;

		case 'campaign':
			var WebstormTopicScreen = require('/ui/common/WebstormTopicScreen');
			window = new WebstormTopicScreen(parent, params);
			break;

		case 'ideaVoterList':
			var IdeaVoterList = require('/ui/common/IdeaVoterList');
			window = new IdeaVoterList(parent, params);
			break;

	}

	pma.navigation.close = function() {
		window.close();
	};

	window.open();

};

module.exports = pma;
