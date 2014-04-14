function RegistrationScreen() {

	var registrationWindow = Ti.UI.createWindow({
		title : 'Products',
		exitOnClose : true,
		navBarHidden : false,
		backgroundColor : APP_BACKGROUND_COLOR,
	});
	/*
	 var registrationButton = Titanium.UI.createButton({
	 title : "Register",
	 height : 44,
	 width : Titanium.UI.SIZE,
	 backgroundColor : "cyan",
	 });

	 //registrationWindow.add(registrationButton);

	 registrationButton.addEventListener('click', function() {
	 var ProjectManagementScreen = require("/ui/common/ProjectManagementScreen");
	 ProjectManagementScreen();
	 });
	 */

	var verticalItemWrapper = Titanium.UI.createScrollView({
		height : Titanium.UI.SIZE,
		width : "90%",
		backgroundColor : "transparent",
		layout : "vertical",
		showVerticalScrollIndicator : false
	});

	//User First Name.
	var firstNameField = pma.ui.getTextField("First Name");
	var firstNameWrapper = pma.ui.getHorizontalWrapper();
	firstNameWrapper.add(pma.ui.getLabel());
	firstNameWrapper.add(firstNameField);
	verticalItemWrapper.add(firstNameWrapper);

	//User Last Name text field.
	var lastNameField = pma.ui.getTextField("Last Name");
	var lastNameWrapper = pma.ui.getHorizontalWrapper();
	lastNameWrapper.add(pma.ui.getLabel());
	lastNameWrapper.add(lastNameField);
	verticalItemWrapper.add(lastNameWrapper);

	//User Email text field.
	var emailField = pma.ui.getTextField("Email");
	var emailWrapper = pma.ui.getHorizontalWrapper();
	emailWrapper.add(pma.ui.getLabel());
	emailWrapper.add(emailField);
	verticalItemWrapper.add(emailWrapper);

	//User Password text field.
	var passwordField = pma.ui.getTextField("Password");
	passwordField.passwordMask = true;
	passwordField.returnKeyType = Titanium.UI.RETURNKEY_DONE;

	var passwordWrapper = pma.ui.getHorizontalWrapper();
	passwordWrapper.add(pma.ui.getLabel());
	passwordWrapper.add(passwordField);
	verticalItemWrapper.add(passwordWrapper);

	//User Confirm Password text field.
	var confirmPasswordField = pma.ui.getTextField("Confirm Password");
	confirmPasswordField.passwordMask = true;
	confirmPasswordField.returnKeyType = Titanium.UI.RETURNKEY_DONE;

	var confirmPasswordWrapper = pma.ui.getHorizontalWrapper();
	confirmPasswordWrapper.add(pma.ui.getLabel());
	confirmPasswordWrapper.add(confirmPasswordField);
	verticalItemWrapper.add(confirmPasswordWrapper);

	//User Company Name text field.
	var companyNameField = pma.ui.getTextField("Company Name");
	var companyNameWrapper = pma.ui.getHorizontalWrapper();
	companyNameWrapper.add(pma.ui.getLabel());
	companyNameWrapper.add(companyNameField);
	verticalItemWrapper.add(companyNameWrapper);

	//User Country Name text field.
	var countryNameField = pma.ui.getTextField("Country Name");
	var countryNameWrapper = pma.ui.getHorizontalWrapper();
	countryNameWrapper.add(pma.ui.getLabel());
	countryNameWrapper.add(countryNameField);
	verticalItemWrapper.add(countryNameWrapper);

	//Register Button.
	var RegisterButton = pma.ui.getButton("Register");
	RegisterButton.left = 10;
	verticalItemWrapper.add(RegisterButton);

	RegisterButton.addEventListener('click', function() {

		var params = {
			project_name : "prashant",
			company_id : 101,
			manager_id : 1
		};

		api("send", params, function(successData) {

			Titanium.API.warn("Success :: " + successData);

		}, function(FailData) {

			Titanium.API.warn("Fail " + FailData);

		});

		//var ProjectManagementScreen = require("/ui/common/ProjectManagementScreen");
		//ProjectManagementScreen();
	});

	registrationWindow.add(verticalItemWrapper);
	registrationWindow.open();

};

module.exports = RegistrationScreen;
