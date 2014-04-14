function LoginScreen() {

	var loginWindow = Ti.UI.createWindow({
		exitOnClose : true,
		backgroundColor : APP_BACKGROUND_COLOR,
	});

	//Login Email Address.
	var emailField = pma.ui.getTextField("Email");
	emailField.returnKeyType = Titanium.UI.RETURNKEY_NEXT;
	emailField.autocapitalization = Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE;

	//Login Password.
	var passwordField = pma.ui.getTextField("Password");
	passwordField.passwordMask = true;
	passwordField.returnKeyType = Titanium.UI.RETURNKEY_DONE;

	//Login Button.
	var loginButton = pma.ui.getButton("Login");

	var forgotPasswordLabel = Ti.UI.createLabel({
		text : "Forgot password?",
		color : "#DBDBDB",
		width : '85%',
		top : 10,
		textAlign : Titanium.UI.TEXT_ALIGNMENT_LEFT,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},

	});

	var registerLabel = Ti.UI.createLabel({
		text : "New user registration",
		color : "#DBDBDB",
		width : '85%',
		top : 10,
		textAlign : Titanium.UI.TEXT_ALIGNMENT_RIGHT,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
	});

	loginButton.addEventListener('click', function() {
		var RegistrationScreen = require("/ui/login/RegistrationScreen");
		RegistrationScreen();
	});

	//horizontal view to add elements horizontally one by one.
	var loginHorizontalWrapper = Titanium.UI.createView({
		height : Titanium.UI.SIZE,
		width : Titanium.UI.FILL,
		layout : "vertical",
	});

	var textFieldWrapper = Ti.UI.createView({
		top : 10,
		backgroundColor : '#FFF',
		borderRadius : '4',
		borderWidth : '1',
		borderColor : '#DDD',
		height : Ti.UI.SIZE,
		width : '85%',
		layout : 'vertical'
	});

	textFieldWrapper.add(emailField);
	textFieldWrapper.add(passwordField);

	loginHorizontalWrapper.add(textFieldWrapper);

	loginHorizontalWrapper.add(loginButton);
	loginHorizontalWrapper.add(forgotPasswordLabel);
	loginHorizontalWrapper.add(registerLabel);

	loginWindow.add(loginHorizontalWrapper);

	loginWindow.open();

};

module.exports = LoginScreen;
