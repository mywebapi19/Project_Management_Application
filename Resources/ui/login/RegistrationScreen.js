/*
 var picker = Ti.UI.createPicker({
 top : 50
 });

 var data = [];
 data[0] = Ti.UI.createPickerRow({
 title : 'Bananas'
 });
 data[1] = Ti.UI.createPickerRow({
 title : 'Strawberries'
 });
 data[2] = Ti.UI.createPickerRow({
 title : 'Mangos'
 });
 data[3] = Ti.UI.createPickerRow({
 title : 'Grapes'
 });

 picker.add(data);
 picker.selectionIndicator = true;

 newTicketWindow.add(picker);

 */

function RegistrationScreen() {

	//User First Name.
	function FirstNameUI() {

		var firstNameField = pma.ui.getTextField("First Name");
		var firstNameWrapper = pma.ui.getHorizontalWrapper();
		firstNameWrapper.add(pma.ui.requiredFieldLabel());
		firstNameWrapper.add(firstNameField);

		return firstNameWrapper;
	}

	//User Last Name text field.
	function LastNameUI() {

		var lastNameField = pma.ui.getTextField("Last Name");
		var lastNameWrapper = pma.ui.getHorizontalWrapper();
		lastNameWrapper.add(pma.ui.requiredFieldLabel());
		lastNameWrapper.add(lastNameField);

		return lastNameWrapper;
	}

	//User Email text field.
	function EmailUI() {

		var emailField = pma.ui.getTextField("Email");
		var emailWrapper = pma.ui.getHorizontalWrapper();
		emailWrapper.add(pma.ui.requiredFieldLabel());
		emailWrapper.add(emailField);

		return emailWrapper;
	}

	//User Password text field.
	function PasswordUI() {

		var passwordField = pma.ui.getTextField("Password");
		passwordField.passwordMask = true;
		passwordField.returnKeyType = Titanium.UI.RETURNKEY_DONE;

		var passwordWrapper = pma.ui.getHorizontalWrapper();
		passwordWrapper.add(pma.ui.requiredFieldLabel());
		passwordWrapper.add(passwordField);

		return passwordWrapper;
	}

	//User Confirm Password text field.
	function ConfirmPasswordUI() {

		var confirmPasswordField = pma.ui.getTextField("Confirm Password");
		confirmPasswordField.passwordMask = true;
		confirmPasswordField.returnKeyType = Titanium.UI.RETURNKEY_DONE;

		var confirmPasswordWrapper = pma.ui.getHorizontalWrapper();
		confirmPasswordWrapper.add(pma.ui.requiredFieldLabel());
		confirmPasswordWrapper.add(confirmPasswordField);

		return confirmPasswordWrapper;
	}

	//User Company Name text field.
	function CompanyNameUI() {

		var companyNameField = pma.ui.getTextField("Company Name");
		var companyNameWrapper = pma.ui.getHorizontalWrapper();
		companyNameWrapper.add(pma.ui.requiredFieldLabel());
		companyNameWrapper.add(companyNameField);

		return companyNameWrapper;
	}

	//User Country Name text field.
	function CountryNameUI() {

		var countryNameField = pma.ui.getTextField("Country Name");
		var countryNameWrapper = pma.ui.getHorizontalWrapper();
		countryNameWrapper.add(pma.ui.requiredFieldLabel());
		countryNameWrapper.add(countryNameField);

		return countryNameWrapper;
	}

	//Register Button.
	function RegisterButtonUI() {

		var RegisterButton = pma.ui.getButton("Register");
		RegisterButton.left = 10;

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

		});

		return RegisterButton;
	}

	var registrationWindow = Ti.UI.createWindow({
		navBarHidden : true,
		backgroundColor : APP_BACKGROUND_COLOR,
	});

	var verticalItemWrapper = Titanium.UI.createScrollView({
		height : Titanium.UI.SIZE,
		width : "90%",
		backgroundColor : "transparent",
		layout : "vertical",
		showVerticalScrollIndicator : false
	});

	//First Name UI
	verticalItemWrapper.add(FirstNameUI());

	//Last Name UI
	verticalItemWrapper.add(LastNameUI());

	//Email UI
	verticalItemWrapper.add(EmailUI());

	//Password UI
	verticalItemWrapper.add(PasswordUI());

	//Confirm Password UI
	verticalItemWrapper.add(ConfirmPasswordUI());

	//Company Name UI
	verticalItemWrapper.add(CompanyNameUI());

	//Country Name UI
	verticalItemWrapper.add(CountryNameUI());

	//Register Button UI
	verticalItemWrapper.add(RegisterButtonUI());

	registrationWindow.add(verticalItemWrapper);

	registrationWindow.open();

};

module.exports = RegistrationScreen;
