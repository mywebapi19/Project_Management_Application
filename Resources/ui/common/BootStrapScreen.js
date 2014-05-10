function BootStrapScreen() {

	var bootStrapWindow = Ti.UI.createWindow({
		exitOnClose : true,
		backgroundColor : APP_BACKGROUND_COLOR,
	});

	function LoginUI() {

		var horizontalWrapper = pma.ui.getHorizontalWrapper();
		horizontalWrapper.top = 10;
		var label = Titanium.UI.createLabel({
			text : "Login Screen",
			color : "gray",
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
			font : {
				fontSize : 18,
				fontWeight : 'bold',
				fontFamily : 'Helvetica Neue'
			},
		});

		horizontalWrapper.add(label);

		horizontalWrapper.addEventListener('click', function() {
			var LoginScreen = require('/ui/login/LoginScreen');
			LoginScreen();
		});

		return horizontalWrapper;
	}

	function RegistrationUI() {

		var horizontalWrapper = pma.ui.getHorizontalWrapper();
		horizontalWrapper.top = 10;
		var label = Titanium.UI.createLabel({
			text : "Registration Screen",
			color : "gray",
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
			font : {
				fontSize : 18,
				fontWeight : 'bold',
				fontFamily : 'Helvetica Neue'
			},
		});

		horizontalWrapper.add(label);

		horizontalWrapper.addEventListener('click', function() {
			var RegistrationScreen = require("/ui/login/RegistrationScreen");
			RegistrationScreen();
		});
		return horizontalWrapper;
	}

	function TicketDetailUI() {

		var horizontalWrapper = pma.ui.getHorizontalWrapper();
		horizontalWrapper.top = 10;
		var label = Titanium.UI.createLabel({
			text : "Ticket Detail Screen",
			color : "gray",
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
			font : {
				fontSize : 18,
				fontWeight : 'bold',
				fontFamily : 'Helvetica Neue'
			},
		});

		horizontalWrapper.add(label);

		horizontalWrapper.addEventListener('click', function() {
			var TicketDetailScreen = require("/ui/common/TicketDetailScreen");
			TicketDetailScreen();
		});

		return horizontalWrapper;
	}

	function ProjectManagementUI() {

		var horizontalWrapper = pma.ui.getHorizontalWrapper();
		horizontalWrapper.top = 10;
		var label = Titanium.UI.createLabel({
			text : "Project Management Screen",
			color : "gray",
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
			font : {
				fontSize : 18,
				fontWeight : 'bold',
				fontFamily : 'Helvetica Neue'
			},
		});

		horizontalWrapper.add(label);

		horizontalWrapper.addEventListener('click', function() {
			var ProjectManagementScreen = require("/ui/common/ProjectManagementScreen");
			ProjectManagementScreen();
		});

		return horizontalWrapper;
	}

	function NewTicketUI() {

		var horizontalWrapper = pma.ui.getHorizontalWrapper();
		horizontalWrapper.top = 10;
		var label = Titanium.UI.createLabel({
			text : "New Ticket Screen",
			color : "gray",
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
			font : {
				fontSize : 18,
				fontWeight : 'bold',
				fontFamily : 'Helvetica Neue'
			},
		});

		horizontalWrapper.add(label);

		horizontalWrapper.addEventListener('click', function() {
			var NewTicketScreen = require("/ui/common/NewTicketScreen");
			NewTicketScreen();
		});

		return horizontalWrapper;
	}

	function ProjectListUI() {

		var horizontalWrapper = pma.ui.getHorizontalWrapper();
		horizontalWrapper.top = 10;
		var label = Titanium.UI.createLabel({
			text : "Project List Screen",
			color : "gray",
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
			font : {
				fontSize : 18,
				fontWeight : 'bold',
				fontFamily : 'Helvetica Neue'
			},
		});

		horizontalWrapper.add(label);

		horizontalWrapper.addEventListener('click', function() {
			var ProjectList = require("/ui/common/ProjectList");
			ProjectList();
		});

		return horizontalWrapper;

	}

	var verticalItemWrapper = Titanium.UI.createScrollView({
		top : 0,
		height : Titanium.UI.SIZE,
		width : "90%",
		backgroundColor : "transparent",
		layout : "vertical",
		showVerticalScrollIndicator : false
	});

	//Login UI
	verticalItemWrapper.add(LoginUI());

	//Registration UI
	verticalItemWrapper.add(RegistrationUI());

	//Ticket Detail UI
	verticalItemWrapper.add(TicketDetailUI());

	//Project Management UI
	verticalItemWrapper.add(ProjectManagementUI());

	//New Ticket UI
	verticalItemWrapper.add(NewTicketUI());

	//ProjectList UI
	verticalItemWrapper.add(ProjectListUI());

	bootStrapWindow.add(verticalItemWrapper);

	bootStrapWindow.open();

};

module.exports = BootStrapScreen;
