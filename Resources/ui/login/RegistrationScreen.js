function RegistrationScreen() {

	//User First Name.
	function FirstNameUI() {

		//FIrst name wrapper.
		var firstNameWrapper = Titanium.UI.createView({
			top : 10,
			height : Titanium.UI.SIZE,
			width : Titanium.UI.Fill,
			backgroundColor : WHITE,
			borderColor : GRAY_DARK,
			borderRadius : 10,
			borderWidth : 2,
			layout : "horizontal",
		});

		var innerView = pma.ui.getHorizontalWrapper();
		var firstNameField = pma.ui.getTextField("First Name");
		innerView.add(pma.ui.requiredFieldLabel());
		innerView.add(firstNameField);

		firstNameWrapper.add(innerView);

		return firstNameWrapper;
	}

	//Last name wrapper.
	function LastNameUI() {

		//Last name wrapper.
		var lastNameWrapper = Titanium.UI.createView({
			top : 10,
			height : Titanium.UI.SIZE,
			width : Titanium.UI.Fill,
			backgroundColor : WHITE,
			borderColor : GRAY_DARK,
			borderRadius : 10,
			borderWidth : 2,
			layout : "horizontal",
		});

		var innerView = pma.ui.getHorizontalWrapper();
		innerView.left = 10;
		var lastNameField = pma.ui.getTextField("Last Name");

		innerView.add(lastNameField);

		lastNameWrapper.add(innerView);

		return lastNameWrapper;
	}

	//Date of birth wrapper.
	function DOBUI() {

		//Last name wrapper.
		var dobWrapper = Titanium.UI.createView({
			top : 10,
			height : Titanium.UI.SIZE,
			width : Titanium.UI.Fill,
			backgroundColor : WHITE,
			borderColor : GRAY_DARK,
			borderRadius : 10,
			borderWidth : 2,
			layout : "horizontal",
		});

		var innerView = pma.ui.getHorizontalWrapper();
		innerView.left = 10;

		var dobLabel = Titanium.UI.createLabel({
			text : "Date Of Birth : ",
			height : 45,
			width : Titanium.UI.SIZE,
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
			left : 5,
			color : GRAY_DARK,
		});

		var dobValue = Titanium.UI.createLabel({
			text : "1947",
			height : 45,
			width : Titanium.UI.SIZE,
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
			left : 10,
			color : GRAY_DARK,
		});

		function setDate(date) {
			Titanium.API.warn(date);
			dobValue.text = date;
		}


		dobWrapper.addEventListener("click", function() {
			var date = pma.ui.showDatePicker(setDate);
		});

		innerView.add(dobLabel);
		innerView.add(dobValue);

		dobWrapper.add(innerView);

		return dobWrapper;
	}

	//Gender.
	function GenderUI() {

		//Last name wrapper.
		var genderWrapper = Titanium.UI.createView({
			top : 10,
			height : Titanium.UI.SIZE,
			width : Titanium.UI.Fill,
			backgroundColor : WHITE,
			borderColor : GRAY_DARK,
			borderRadius : 10,
			borderWidth : 2,
			layout : "horizontal",
		});

		var genderLabel = Titanium.UI.createLabel({
			text : "Gender : ",
			height : 45,
			width : Titanium.UI.SIZE,
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
			left : 5,
			color : GRAY_DARK,
		});

		//Label View holds male icon, female icon, male label and female icon
		var labelView = Titanium.UI.createView({
			layout : "vertical",
			height : Titanium.UI.SIZE,
			width : Titanium.UI.SIZE,
		});

		//Male Module
		var maleView = pma.ui.getHorizontalWrapper();
		maleView.left = 0;
		maleView.width = Titanium.UI.SIZE;

		var maleIcon = Ti.UI.createLabel({
			text : "\uf183",
			font : {
				fontSize : 16,
				fontFamily : "FontAwesome"
			},
			top : 5,
			bottom : 5,
			left : 5,
			height : 20,
			width : 20,
			color : BLUE,
		});

		var maleValue = Titanium.UI.createLabel({
			text : "Male",
			width : Titanium.UI.SIZE,
			top : 5,
			bottom : 5,
			height : 20,
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
			color : GRAY_DARK,
		});
		maleView.add(maleIcon);
		maleView.add(maleValue);

		//Female Module
		var femaleView = pma.ui.getHorizontalWrapper();
		femaleView.left = 0;
		femaleView.width = Titanium.UI.SIZE;

		var femaleIcon = Ti.UI.createLabel({
			text : "\uf182",
			font : {
				fontSize : 16,
				fontFamily : "FontAwesome"
			},
			top : 5,
			bottom : 5,
			left : 5,
			height : 20,
			width : 20,
			color : "pink",
		});

		var femaleValue = Titanium.UI.createLabel({
			text : "Female",
			width : Titanium.UI.SIZE,
			top : 5,
			bottom : 5,
			height : 20,
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
			color : GRAY_DARK,
		});

		//Value View holds male radio button and female radio button
		var valueView = Titanium.UI.createView({
			layout : "vertical",
			height : Titanium.UI.SIZE,
			width : Titanium.UI.SIZE,
		});

		var maleRadioButton = Ti.UI.createLabel({
			text : "\uf192",
			//text : "\uf192",//selected option
			//text : "\uf10c",//unSelected option
			font : {
				fontSize : 20,
				fontFamily : "FontAwesome"
			},
			top : 5,
			bottom : 5,
			height : 20,
			left : 5,
			color : GRAY_DARK,
		});

		var femaleRadioButton = Ti.UI.createLabel({
			text : "\uf10c",
			//text : "\uf192",//selected option
			//text : "\uf10c",//unSelected option
			font : {
				fontSize : 20,
				fontFamily : "FontAwesome"
			},
			top : 5,
			bottom : 5,
			height : 20,
			left : 5,
			color : GRAY_DARK,
		});

		valueView.add(maleRadioButton);
		valueView.add(femaleRadioButton);

		/////////////////////////////////
		///////////////////////////////
		/////////////////////////////
		///////////////////////////

		femaleView.add(femaleIcon);
		femaleView.add(femaleValue);

		labelView.add(maleView);
		labelView.add(femaleView);

		genderWrapper.add(genderLabel);

		genderWrapper.add(labelView);
		genderWrapper.add(valueView);

		return genderWrapper;
	}

	//User Email text field.
	function EmailUI() {

		//Email wrapper.
		var emailWrapper = Titanium.UI.createView({
			top : 10,
			height : Titanium.UI.SIZE,
			width : Titanium.UI.Fill,
			backgroundColor : WHITE,
			borderColor : GRAY_DARK,
			borderRadius : 10,
			borderWidth : 2,
			layout : "horizontal",
		});

		var innerView = pma.ui.getHorizontalWrapper();
		var emailField = pma.ui.getTextField("Email");

		innerView.add(pma.ui.requiredFieldLabel());
		innerView.add(emailField);

		emailWrapper.add(innerView);

		return emailWrapper;
	}

	//User Password text field.
	function PasswordUI() {

		//Password wrapper.
		var passwordWrapper = Titanium.UI.createView({
			top : 10,
			height : Titanium.UI.SIZE,
			width : Titanium.UI.Fill,
			backgroundColor : WHITE,
			borderColor : GRAY_DARK,
			borderRadius : 10,
			borderWidth : 2,
			layout : "horizontal",
		});

		var innerView = pma.ui.getHorizontalWrapper();
		var passwordField = pma.ui.getTextField("Password");
		passwordField.passwordMask = true;
		passwordField.returnKeyType = Titanium.UI.RETURNKEY_DONE;

		innerView.add(pma.ui.requiredFieldLabel());
		innerView.add(passwordField);

		passwordWrapper.add(innerView);

		return passwordWrapper;
	}

	//User Confirm Password text field.
	function ConfirmPasswordUI() {

		//Confirm password wrapper.
		var confirmPasswordWrapper = Titanium.UI.createView({
			top : 10,
			height : Titanium.UI.SIZE,
			width : Titanium.UI.Fill,
			backgroundColor : WHITE,
			borderColor : GRAY_DARK,
			borderRadius : 10,
			borderWidth : 2,
			layout : "horizontal",
		});

		var innerView = pma.ui.getHorizontalWrapper();
		var confirmPasswordField = pma.ui.getTextField("Confirm Password");
		confirmPasswordField.passwordMask = true;
		confirmPasswordField.returnKeyType = Titanium.UI.RETURNKEY_DONE;

		innerView.add(pma.ui.requiredFieldLabel());
		innerView.add(confirmPasswordField);

		confirmPasswordWrapper.add(innerView);

		return confirmPasswordWrapper;
	}

	//User Company Name text field.
	function CompanyNameUI() {

		//Company wrapper.
		var companyNameWrapper = Titanium.UI.createView({
			top : 10,
			height : Titanium.UI.SIZE,
			width : Titanium.UI.Fill,
			backgroundColor : WHITE,
			borderColor : GRAY_DARK,
			borderRadius : 10,
			borderWidth : 2,
			layout : "horizontal",
		});

		var innerView = pma.ui.getHorizontalWrapper();
		var companyNameField = pma.ui.getTextField("Company Name");

		innerView.add(pma.ui.requiredFieldLabel());
		innerView.add(companyNameField);

		companyNameWrapper.add(innerView);

		return companyNameWrapper;
	}

	//User Country Name text field.
	function CountryNameUI() {
		var countryData;

		//Country wrapper.
		var countryNameWrapper = Titanium.UI.createView({
			top : 10,
			height : Titanium.UI.SIZE,
			width : Titanium.UI.Fill,
			backgroundColor : WHITE,
			borderColor : GRAY_DARK,
			borderRadius : 10,
			borderWidth : 2,
			layout : "horizontal",
		});

		var data = pma.dummyData.getCountryList();
		countryData = data.country_list;

		var innerView = pma.ui.getHorizontalWrapper();
		var countryName = Ti.UI.createPicker({
			height : 45,
		});

		var rows = [];
		for (var i = 0; i < countryData.length; i++) {

			rows[i] = Ti.UI.createPickerRow({
				title : countryData[i].name
			});

		}

		countryName.add(rows);
		countryName.selectionIndicator = true;

		innerView.add(countryName);

		countryNameWrapper.add(innerView);

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

			/*
			 api("send", params, function(successData) {

			 Titanium.API.warn("Success :: " + successData);

			 }, function(FailData) {

			 Titanium.API.warn("Fail " + FailData);

			 });
			 */

		});

		return RegisterButton;
	}

	var registrationWindow = Ti.UI.createWindow({
		backgroundColor : GRAY_LIGHT,
		layout : "vertical",
	});

	pma.ui.actionBar("Registration", registrationWindow);

	registrationWindow.open();

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

	//DOB UI
	scrollView.add(DOBUI());

	//Gender UI
	scrollView.add(GenderUI());

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

};

module.exports = RegistrationScreen;
