function pma() {
}

pma.trialCall = {};

pma.trialCall.open = function() {
	alert("Trial Global Call");
};

/***********************************************************************************************************
 *	pma.dummyData;  Used for Dummy Data
 ***********************************************************************************************************/

pma.dummyData = {};

pma.dummyData.getProjectList = function() {

	var data = {
		"project_list" : [{
			"project_name" : "App Protector",
			"project_key" : "APP",
			"project_lead" : "Prashant Bharambe",
			"member_count" : "10",
			"ticket_count" : "29",
		}, {
			"project_name" : "Desktop Notification",
			"project_key" : "DNP",
			"project_lead" : "Preeti Narkhede",
			"member_count" : "15",
			"ticket_count" : "30",
		}, {
			"project_name" : "Recipe Application",
			"project_key" : "RAP",
			"project_lead" : "Arati Mhaisekar",
			"member_count" : "5",
			"ticket_count" : "20",
		}, {
			"project_name" : "Recharge Me",
			"project_key" : "RMP",
			"project_lead" : "Bhushan Deore",
			"member_count" : "20",
			"ticket_count" : "108",
		},{
			"project_name" : "Book My Movie",
			"project_key" : "BMM",
			"project_lead" : "Pooja Hule",
			"member_count" : "8",
			"ticket_count" : "45",
		}, {
			"project_name" : "Cot Wala",
			"project_key" : "CWP",
			"project_lead" : "Asmita Chaudhary",
			"member_count" : "5",
			"ticket_count" : "35",
		}, {
			"project_name" : "Mobile Booster Application",
			"project_key" : "MBA",
			"project_lead" : "Sanjay Mate",
			"member_count" : "23",
			"ticket_count" : "200",
		}, {
			"project_name" : "Go Travel",
			"project_key" : "GTP",
			"project_lead" : "Sanjay Mathapati",
			"member_count" : "30",
			"ticket_count" : "250",
		}]
	};

	return data;
};

pma.dummyData.getTicketList = function() {

	var data = {
		"ticket_list" : [{
			"ticket_title" : "Hard app crash on sliding menu",
			"ticket_no" : "APP-1120",
			"ticket_type" : "Bug",
			"ticket_priority" : "Major",
			"comment_count" : "5",
		},{
			"ticket_title" : "Shadow effect on Header",
			"ticket_no" : "APP-1120",
			"ticket_type" : "Improvement",
			"ticket_priority" : "Minor",
			"comment_count" : "0",
		},{
			"ticket_title" : "Circular profile picture",
			"ticket_no" : "APP-1120",
			"ticket_type" : "Task",
			"ticket_priority" : "Trivial",
			"comment_count" : "0",
		},{
			"ticket_title" : "Increase font size",
			"ticket_no" : "APP-1120",
			"ticket_type" : "Improvement",
			"ticket_priority" : "Minor",
			"comment_count" : "1",
		},{
			"ticket_title" : "Remove My tab",
			"ticket_no" : "APP-1120",
			"ticket_type" : "Improvement",
			"ticket_priority" : "Major",
			"comment_count" : "10",
		},{
			"ticket_title" : "Audio recording feature",
			"ticket_no" : "APP-1120",
			"ticket_type" : "New Feature",
			"ticket_priority" : "major",
			"comment_count" : "3",
		},]
	};

	return data;
};

/***********************************************************************************************************
 *	pma.ui.functionName();  This module is used for UI.
 ***********************************************************************************************************/

pma.ui = {};

/***********************************************************************************************************
 *	TextField and Button
 ***********************************************************************************************************/

pma.ui.actionBar = function(title, screen) {

	var actionBar = Ti.UI.createView({
		top : 0,
		height : 44,
		backgroundColor : GREEN,
	});

	var tappingWrapper = Ti.UI.createView({
		top : 0,
		left : 0,
		width : 60,
		height : 44,
	});

	var leftButton = Ti.UI.createLabel({
		text : "\uf053",
		color : WHITE,
		font : {
			fontSize : 25,
			fontFamily : "FontAwesome"
		}
	});

	tappingWrapper.add(leftButton);

	tappingWrapper.addEventListener("click", function() {
		screen.close();
	});

	var centerLabel = Ti.UI.createLabel({
		text : title,
		font : {
			fontSize : 16,
			fontWeight : "bold"
		},
		color : WHITE,
	});

	actionBar.add(tappingWrapper);
	actionBar.add(centerLabel);

	screen.add(actionBar);
};

pma.ui.line = function() {

	var line = Titanium.UI.createView({
		top : 0,
		height : 1,
		width : Titanium.UI.FILL,
		backgroundColor : GRAY_DARK,
	});

	return line;
};

pma.ui.requiredFieldLabel = function() {

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
		width : Titanium.UI.Fill,
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
		borderColor : "transparent",
	});

	return textField;
};

pma.ui.getTextArea = function(hintText) {

	var textArea = Ti.UI.createTextArea({
		hintText : hintText,
		color : '#000',
		width : '94%',
		height : 150,
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
		borderColor : "transparent",
	});

	return textArea;
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
 *	OverLay Screen
 ***********************************************************************************************************/

pma.ui.showOverlay = function(callback) {

	var overlayWindow = Ti.UI.createWindow({
		backgroundColor : "transparent",
		windowSoftInputMode : Ti.UI.Android.SOFT_INPUT_ADJUST_PAN,
		navBarHidden : true,
	});

	var wrapper = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		backgroundColor : 'black',
		opacity : 0.5,
	});

	var spinner = Titanium.UI.createActivityIndicator({
		style : Titanium.UI.ActivityIndicatorStyle.BIG,
	});

	wrapper.add(spinner);
	spinner.show();

	wrapper.addEventListener("click", function(e) {
		overlayWindow.close();
		spinner.hide();
	});

	overlayWindow.add(wrapper);

	overlayWindow.open({
		modal : true,
		animated : true,
	});
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
