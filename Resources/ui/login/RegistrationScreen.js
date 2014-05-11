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

		var data = pma.dummyData.getCountryList();

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
		backgroundColor : GRAY_LIGHT,
		layout : "vertical",
	});

	var scrollView = Titanium.UI.createScrollView({
		height : Titanium.UI.SIZE,
		width : "90%",
		backgroundColor : "transparent",
		layout : "vertical",
		showVerticalScrollIndicator : false
	});

	//First Name UI
	scrollView.add(FirstNameUI());

	//Last Name UI
	scrollView.add(LastNameUI());

	//Email UI
	scrollView.add(EmailUI());

	//Password UI
	scrollView.add(PasswordUI());

	//Confirm Password UI
	scrollView.add(ConfirmPasswordUI());

	//Company Name UI
	scrollView.add(CompanyNameUI());

	//Country Name UI
	scrollView.add(CountryNameUI());

	//Register Button UI
	scrollView.add(RegisterButtonUI());

	registrationWindow.add(scrollView);

	registrationWindow.open();

};

module.exports = RegistrationScreen;
