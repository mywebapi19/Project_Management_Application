/***************************************************************
 * Ticket No.
 **************************************************************/

function TicketNumberUI() {

	//Ticket number horizontal wrapper.
	var ticketNoWrapper = Titanium.UI.createView({
		top : 10,
		height : Titanium.UI.SIZE,
		width : Titanium.UI.Fill,
		backgroundColor : WHITE,
		borderColor : GRAY_DARK,
		borderRadius : 10,
		borderWidth : 2,
		layout : "horizontal",
	});

	var ticketTypeIcon = Titanium.UI.createLabel({
		left : 5,
		right : 5,
		top : 5,
		bottom : 5,
		text : "\uf188",
		color : RED,
		font : {
			fontSize : 16,
			fontFamily : "FontAwesome"
		},
		backgroundColor : "transparent",
	});

	var ticketNumber = Titanium.UI.createLabel({
		text : "BPD-29",
		left : 5,
		right : 5,
		top : 5,
		bottom : 5,
		font : {
			fontSize : 16,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
	});

	ticketNoWrapper.add(ticketTypeIcon);
	ticketNoWrapper.add(ticketNumber);

	return ticketNoWrapper;
}

//ticket title UI.
function TicketTitleUI() {

	//Ticket number horizontal wrapper.
	var ticketTitleWrapper = Titanium.UI.createView({
		top : 10,
		height : Titanium.UI.SIZE,
		width : Titanium.UI.Fill,
		backgroundColor : WHITE,
		borderColor : GRAY_DARK,
		borderRadius : 10,
		borderWidth : 2,
		layout : "horizontal",
	});

	var ticketTitle = Titanium.UI.createLabel({
		text : "Audio recording feature",
		left : 5,
		right : 5,
		top : 5,
		bottom : 5,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
	});

	ticketTitleWrapper.add(ticketTitle);

	return ticketTitleWrapper;
}

function TicketDetailUI() {

	var ticketDetailWrapper = Titanium.UI.createView({
		top : 10,
		height : Titanium.UI.SIZE,
		width : Titanium.UI.Fill,
		backgroundColor : WHITE,
		borderColor : GRAY_DARK,
		borderRadius : 10,
		borderWidth : 2,
		layout : "horizontal",
	});

	/**************************************************************
	 * Left Wrapper UI
	 **************************************************************/
	var leftWrapper = Titanium.UI.createView({
		top : 5,
		left : 0,
		height : Titanium.UI.SIZE,
		width : Titanium.UI.SIZE,
		layout : "vertical",
		backgroundColor : "transparent",
	});

	//status
	var ticketStatusWrapper = pma.ui.getHorizontalWrapper();
	ticketStatusWrapper.width = Titanium.UI.SIZE;
	ticketStatusWrapper.left = 0;

	var ticketStatus = Titanium.UI.createLabel({
		text : "Status :",
		left : 5,
		right : 5,
		top : 2,
		bottom : 2,
		color : TEXT_DARK,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
	});
	ticketStatusWrapper.add(ticketStatus);

	//type
	var ticketTypeWrapper = pma.ui.getHorizontalWrapper();
	ticketTypeWrapper.width = Titanium.UI.SIZE;
	ticketTypeWrapper.left = 0;

	var ticketType = Titanium.UI.createLabel({
		text : "Type :",
		left : 5,
		right : 5,
		top : 2,
		bottom : 2,
		color : TEXT_DARK,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
	});
	ticketTypeWrapper.add(ticketType);

	//assignee
	var ticketAssigneeWrapper = pma.ui.getHorizontalWrapper();
	ticketAssigneeWrapper.width = Titanium.UI.SIZE;
	ticketAssigneeWrapper.left = 0;

	var ticketAssigne = Titanium.UI.createLabel({
		text : "Assigne :",
		left : 5,
		right : 5,
		top : 2,
		bottom : 2,
		color : TEXT_DARK,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
	});
	ticketAssigneeWrapper.add(ticketAssigne);

	//priority
	var ticketPriorityWrapper = pma.ui.getHorizontalWrapper();
	ticketPriorityWrapper.width = Titanium.UI.SIZE;
	ticketPriorityWrapper.left = 0;
	var ticketPriority = Titanium.UI.createLabel({
		text : "Priority :",
		left : 5,
		right : 5,
		top : 2,
		bottom : 2,
		color : TEXT_DARK,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
	});
	ticketPriorityWrapper.add(ticketPriority);

	//resolution
	var ticketResolutionWrapper = pma.ui.getHorizontalWrapper();
	ticketResolutionWrapper.width = Titanium.UI.SIZE;
	ticketResolutionWrapper.left = 0;
	var ticketResolution = Titanium.UI.createLabel({
		text : "Resolution :",
		left : 5,
		right : 5,
		top : 2,
		bottom : 2,
		color : TEXT_DARK,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
	});
	ticketResolutionWrapper.add(ticketResolution);

	//product owner
	var ticketProductOwnerWrapper = pma.ui.getHorizontalWrapper();
	ticketProductOwnerWrapper.width = Titanium.UI.SIZE;
	ticketProductOwnerWrapper.left = 0;

	var ticketProductOwner = Titanium.UI.createLabel({
		text : "Product Owner :",
		left : 5,
		right : 5,
		top : 2,
		bottom : 2,
		color : TEXT_DARK,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
	});
	ticketProductOwnerWrapper.add(ticketProductOwner);

	leftWrapper.add(ticketStatusWrapper);
	leftWrapper.add(ticketTypeWrapper);
	leftWrapper.add(ticketAssigneeWrapper);
	leftWrapper.add(ticketPriorityWrapper);
	leftWrapper.add(ticketResolutionWrapper);
	leftWrapper.add(ticketProductOwnerWrapper);

	/**************************************************************
	 * Right Wrapper UI
	 **************************************************************/

	var rightWrapper = Titanium.UI.createView({
		top : 5,
		left : 0,
		height : Titanium.UI.SIZE,
		width : Titanium.UI.SIZE,
		layout : "vertical",
		backgroundColor : "transparent"
	});

	/****************************************************
	 * Status Section.
	 ***************************************************/
	var statusHolderView = Titanium.UI.createView({
		left : 5,
		height : Titanium.UI.SIZE,
		width : Titanium.UI.SIZE,
		backgroundColor : GRAY_LIGHT,
		borderRadius : 10,
		layout : "horizontal",
	});

	var ticketStatusValue = Titanium.UI.createLabel({
		text : "In Progress",
		left : 5,
		right : 5,
		top : 2,
		bottom : 2,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
	});

	statusHolderView.addEventListener("click", function() {

		var options = ["Open", "Assign Dev", "Start Dev", "In Progress", "Dev Complete", "Start Verification", "Pass Verification", "Reopen", "Cancel"];

		var androidMainView = Titanium.UI.createView({
			width : Titanium.UI.FILL,
			layout : 'vertical',
		});

		for (var i = 0; i < options.length; i++) {
			var androView = Titanium.UI.createView({
				width : Titanium.UI.FILL,
				height : 40,
				index : i,
				text : options[i],
			});

			var titleLabel = Titanium.UI.createLabel({
				text : options[i],
				index : i,
				font : {
					fontSize : options[i] == "Cancel" ? 20 : 16,
					fontWeight : options[i] == "Cancel" ? 'bold' : "normal",
					fontFamily : 'Helvetica Neue'
				},
				color : BLACK,
			});

			titleLabel.text = options[i];

			var line = Titanium.UI.createView({
				backgroundColor : GRAY_LIGHT,
				height : 1,
				width : Titanium.UI.FILL,
			});

			androView.addEventListener('click', function(e) {
				switch(e.source.index) {
					case 0 :
						Titanium.API.warn(0);
						Titanium.API.warn(e.source.text);
						ticketStatusValue.text = e.source.text;
						statusOptionsPopUp.hide();
						break;

					case 1 :
						Titanium.API.warn(1);
						Titanium.API.warn(e.source.text);
						ticketStatusValue.text = e.source.text;
						statusOptionsPopUp.hide();
						break;

					case 2:
						Titanium.API.warn(2);
						Titanium.API.warn(e.source.text);
						ticketStatusValue.text = e.source.text;
						statusOptionsPopUp.hide();
						break;

					case 3 :
						Titanium.API.warn(3);
						Titanium.API.warn(e.source.text);
						ticketStatusValue.text = e.source.text;
						statusOptionsPopUp.hide();
						break;

					case 4:
						Titanium.API.warn(4);
						Titanium.API.warn(e.source.text);
						ticketStatusValue.text = e.source.text;
						statusOptionsPopUp.hide();
						break;

					case 5:
						Titanium.API.warn(5);
						Titanium.API.warn(e.source.text);
						ticketStatusValue.text = e.source.text;
						statusOptionsPopUp.hide();
						break;

					case 6:
						Titanium.API.warn(6);
						Titanium.API.warn(e.source.text);
						ticketStatusValue.text = e.source.text;
						statusOptionsPopUp.hide();
						break;

					case 7:
						Titanium.API.warn(7);
						Titanium.API.warn(e.source.text);
						ticketStatusValue.text = e.source.text;
						statusOptionsPopUp.hide();
						break;

					default :
						Titanium.API.warn(e.source.text);
						Titanium.API.warn("default");
						statusOptionsPopUp.hide();
				}
			});

			androView.add(titleLabel);
			androidMainView.add(androView);
			androidMainView.add(line);
		}

		var statusOptionsPopUp = Titanium.UI.createAlertDialog({
			title : "Change status of ticket",
			androidView : androidMainView,
		});

		statusOptionsPopUp.show();

	});

	statusHolderView.add(ticketStatusValue);
	rightWrapper.add(statusHolderView);

	/*******************************************************************
	 * Type Section (Bug, Improvement, New Feature, Task)
	 *******************************************************************/
	var typeHolderView = Titanium.UI.createView({
		left : 0,
		height : Titanium.UI.SIZE,
		width : Titanium.UI.SIZE,
		layout : "horizontal",
	});

	var ticketTypeImage = Titanium.UI.createLabel({
		text : "\uf188",
		font : {
			fontSize : 16,
			fontFamily : "FontAwesome"
		},
		left : 5,
		color : RED
	});

	var ticketTypeValue = Titanium.UI.createLabel({
		text : "Bug",
		left : 5,
		right : 5,
		top : 2,
		bottom : 2,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
	});

	typeHolderView.addEventListener("click", function() {

		var titleOptions = ["Bug", "Improvement", "New Feature", "Task", "Cancel"];
		var iconOptions = ["\uf188", "\uf08e", "\uf0fe", "\uf140"];
		var iconColor = [RED, GREEN, BLUE, YELLOW];

		var androidMainView = Titanium.UI.createView({
			width : Titanium.UI.FILL,
			layout : 'vertical',
		});

		for (var i = 0; i < titleOptions.length; i++) {
			var androView = Titanium.UI.createView({
				width : Titanium.UI.FILL,
				height : 40,
				index : i,
				iconText : iconOptions[i],
				titleText : titleOptions[i],
			});

			if (titleOptions[i] != "Cancel") {

				var typeIcon = Ti.UI.createLabel({
					text : iconOptions[i],
					height : Titanium.UI.FILL,
					textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
					font : {
						fontSize : 16,
						fontFamily : "FontAwesome"
					},
					color : iconColor[i],
					left : "35%",
				});

				androView.add(typeIcon);

			}
			var titleLabel = Titanium.UI.createLabel({
				text : titleOptions[i],
				height : Titanium.UI.FILL,
				textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
				index : i,
				font : {
					fontSize : titleOptions[i] == "Cancel" ? 20 : 16,
					fontWeight : titleOptions[i] == "Cancel" ? 'bold' : "normal",
					fontFamily : 'Helvetica Neue'
				},
				color : BLACK,
				left : titleOptions[i] == "Cancel" ? "38%" : "42%",
			});

			titleLabel.text = titleOptions[i];

			var line = Titanium.UI.createView({
				backgroundColor : GRAY_LIGHT,
				height : 1,
				width : Titanium.UI.FILL,
			});

			androView.addEventListener('click', function(e) {
				var self = this;
				switch(self.index) {
					case 0 :
						Titanium.API.warn(0);
						Titanium.API.warn(self.iconText);
						Titanium.API.warn(self.titleText);

						ticketTypeImage.text = self.iconText;
						ticketTypeImage.color = RED;
						ticketTypeValue.text = self.titleText;

						statusOptionsPopUp.hide();
						break;

					case 1 :
						Titanium.API.warn(1);

						Titanium.API.warn(self.iconText);
						Titanium.API.warn(self.titleText);

						ticketTypeImage.text = self.iconText;
						ticketTypeImage.color = GREEN;
						ticketTypeValue.text = self.titleText;

						statusOptionsPopUp.hide();
						break;

					case 2:
						Titanium.API.warn(2);
						Titanium.API.warn(self.iconText);
						Titanium.API.warn(self.titleText);

						ticketTypeImage.text = self.iconText;
						ticketTypeImage.color = BLUE;
						ticketTypeValue.text = self.titleText;
						statusOptionsPopUp.hide();
						break;

					case 3 :
						Titanium.API.warn(3);
						Titanium.API.warn(self.iconText);
						Titanium.API.warn(self.titleText);

						ticketTypeImage.text = self.iconText;
						ticketTypeImage.color = YELLOW;
						ticketTypeValue.text = self.titleText;
						statusOptionsPopUp.hide();
						break;

					default :
						Titanium.API.warn(self.text);
						Titanium.API.warn("default");
						statusOptionsPopUp.hide();
				}
			});

			androView.add(titleLabel);
			androidMainView.add(androView);
			androidMainView.add(line);
		}

		var statusOptionsPopUp = Titanium.UI.createAlertDialog({
			title : "Change type of ticket",
			androidView : androidMainView,
		});

		statusOptionsPopUp.show();

	});

	typeHolderView.add(ticketTypeImage);
	typeHolderView.add(ticketTypeValue);
	rightWrapper.add(typeHolderView);

	/*******************************************************************
	 * Assigne Section
	 *******************************************************************/
	var assigneHolderView = Titanium.UI.createView({
		left : 0,
		height : Titanium.UI.SIZE,
		width : Titanium.UI.SIZE,
		layout : "horizontal",
	});

	var ticketAssigneImage = Titanium.UI.createLabel({
		text : "\uf007",
		font : {
			fontSize : 16,
			fontFamily : "FontAwesome"
		},
		left : 5,
		color : BLUE
	});

	var ticketAssigneValue = Titanium.UI.createLabel({
		text : "Prashant Bharambe",
		left : 5,
		right : 5,
		top : 2,
		bottom : 2,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
	});

	assigneHolderView.addEventListener("click", function() {

		var memberData;
		var options = [];

		//Dummy API Call
		function CallAPI() {

			var data = pma.dummyData.getMemberList();
			memberData = data.member_list;

		}

		CallAPI();

		//var options = ["Open", "Assign Dev", "Start Dev", "In Progress", "Dev Complete", "Start Verification", "Pass Verification", "Reopen", "Cancel"];
		var i;
		for ( i = 0; i < memberData.length; i++) {
			options[i] = memberData[i].member_name;
			Titanium.API.warn(options[i]);
		}

		options[i] = "Cancel";

		var androidMainView = Titanium.UI.createScrollView({
			width : Titanium.UI.FILL,
			layout : 'vertical',
		});

		for (var i = 0; i < options.length; i++) {
			var androView = Titanium.UI.createView({
				width : Titanium.UI.FILL,
				height : 40,
				index : i,
				text : options[i],
			});

			var titleLabel = Titanium.UI.createLabel({
				text : options[i],
				index : i,
				font : {
					fontSize : options[i] == "Cancel" ? 20 : 16,
					fontWeight : options[i] == "Cancel" ? 'bold' : "normal",
					fontFamily : 'Helvetica Neue'
				},
				color : BLACK,
			});

			var line = Titanium.UI.createView({
				backgroundColor : GRAY_LIGHT,
				height : 1,
				width : Titanium.UI.FILL,
			});

			androView.addEventListener('click', function(e) {

				if (e.source.text != "Cancel") {
					ticketAssigneValue.text = e.source.text;
					Titanium.API.warn(":: Member Name :: " + e.source.text);
					Titanium.API.warn(":: Member Name :: " + e.source.index);
					statusOptionsPopUp.hide();
				} else {
					statusOptionsPopUp.hide();
				}
			});

			androView.add(titleLabel);
			androidMainView.add(androView);
			androidMainView.add(line);
		}

		var statusOptionsPopUp = Titanium.UI.createAlertDialog({
			title : "Select a member",
			androidView : androidMainView,
		});

		statusOptionsPopUp.show();

	});

	assigneHolderView.add(ticketAssigneImage);
	assigneHolderView.add(ticketAssigneValue);
	rightWrapper.add(assigneHolderView);

	/***************************************************************
	 * Priority Section
	 **************************************************************/
	var priorityHolderView = Titanium.UI.createView({
		left : 0,
		height : Titanium.UI.SIZE,
		width : Titanium.UI.SIZE,
		layout : "horizontal",
	});

	var ticketPriorityImage = Titanium.UI.createLabel({
		text : "\uf062", //major priority
		//text : "\uf063",//minor priority
		//text : "\uf0e3",//trivial priority
		font : {
			fontSize : 16,
			fontFamily : "FontAwesome"
		},
		left : 5,
		color : RED
	});

	var ticketPriorityeValue = Titanium.UI.createLabel({
		text : "Major",
		left : 5,
		right : 5,
		top : 2,
		bottom : 2,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
	});

	priorityHolderView.addEventListener("click", function() {

		var titleOptions = ["Major", "Minor", "Trivial", "Cancel"];
		var iconOptions = ["\uf062", "\uf063", "\uf0e3"];
		var iconColor = [RED, GREEN, BLUE];

		var androidMainView = Titanium.UI.createView({
			width : Titanium.UI.FILL,
			layout : 'vertical',
		});

		for (var i = 0; i < titleOptions.length; i++) {
			var androView = Titanium.UI.createView({
				width : Titanium.UI.FILL,
				height : 40,
				index : i,
				iconText : iconOptions[i],
				titleText : titleOptions[i],
			});

			if (titleOptions[i] != "Cancel") {

				var priorityIcon = Ti.UI.createLabel({
					text : iconOptions[i],
					height : Titanium.UI.FILL,
					textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
					font : {
						fontSize : 16,
						fontFamily : "FontAwesome"
					},
					color : iconColor[i],
					left : "35%",
				});

				androView.add(priorityIcon);

			}
			var titleLabel = Titanium.UI.createLabel({
				text : titleOptions[i],
				height : Titanium.UI.FILL,
				textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
				index : i,
				font : {
					fontSize : titleOptions[i] == "Cancel" ? 20 : 16,
					fontWeight : titleOptions[i] == "Cancel" ? 'bold' : "normal",
					fontFamily : 'Helvetica Neue'
				},
				color : BLACK,
				left : titleOptions[i] == "Cancel" ? "38%" : "42%",
			});

			titleLabel.text = titleOptions[i];

			var line = Titanium.UI.createView({
				backgroundColor : GRAY_LIGHT,
				height : 1,
				width : Titanium.UI.FILL,
			});

			androView.addEventListener('click', function(e) {
				var self = this;
				switch(self.index) {
					case 0 :
						Titanium.API.warn(0);
						Titanium.API.warn(self.iconText);
						Titanium.API.warn(self.titleText);

						ticketPriorityImage.text = self.iconText;
						ticketPriorityImage.color = RED;
						ticketPriorityeValue.text = self.titleText;

						statusOptionsPopUp.hide();
						break;

					case 1 :
						Titanium.API.warn(1);

						Titanium.API.warn(self.iconText);
						Titanium.API.warn(self.titleText);

						ticketPriorityImage.text = self.iconText;
						ticketPriorityImage.color = GREEN;
						ticketPriorityeValue.text = self.titleText;

						statusOptionsPopUp.hide();
						break;

					case 2:
						Titanium.API.warn(2);
						Titanium.API.warn(self.iconText);
						Titanium.API.warn(self.titleText);

						ticketPriorityImage.text = self.iconText;
						ticketPriorityImage.color = BLUE;
						ticketPriorityeValue.text = self.titleText;

						statusOptionsPopUp.hide();
						break;

					default :
						Titanium.API.warn(self.text);
						Titanium.API.warn("default");
						statusOptionsPopUp.hide();
				}
			});

			androView.add(titleLabel);
			androidMainView.add(androView);
			androidMainView.add(line);
		}

		var statusOptionsPopUp = Titanium.UI.createAlertDialog({
			title : "Change priority of ticket",
			androidView : androidMainView,
		});

		statusOptionsPopUp.show();

	});

	priorityHolderView.add(ticketPriorityImage);
	priorityHolderView.add(ticketPriorityeValue);
	rightWrapper.add(priorityHolderView);

	/******************************************************
	 * Resolution Section
	 *****************************************************/
	var resolutionHolderView = Titanium.UI.createView({
		left : 0,
		height : Titanium.UI.SIZE,
		width : Titanium.UI.SIZE,
		layout : "horizontal",
	});

	var ticketResolutioneValue = Titanium.UI.createLabel({
		text : "Unresolved",
		left : 5,
		right : 5,
		top : 2,
		bottom : 2,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
	});

	resolutionHolderView.add(ticketResolutioneValue);
	rightWrapper.add(resolutionHolderView);

	/******************************************************
	 * Product Owner Section
	 *****************************************************/
	var productOwnerHolderView = Titanium.UI.createView({
		left : 0,
		height : Titanium.UI.SIZE,
		width : Titanium.UI.SIZE,
		layout : "horizontal",
	});

	var ticketProductOwnerImage = Titanium.UI.createLabel({
		text : "\uf007",
		font : {
			fontSize : 16,
			fontFamily : "FontAwesome"
		},
		left : 5,
		color : BLUE
	});

	var ticketProductOwnerValue = Titanium.UI.createLabel({
		text : "Prashant More",
		left : 5,
		right : 5,
		top : 2,
		bottom : 2,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
	});

	productOwnerHolderView.add(ticketProductOwnerImage);
	productOwnerHolderView.add(ticketProductOwnerValue);
	rightWrapper.add(productOwnerHolderView);

	ticketDetailWrapper.add(leftWrapper);
	ticketDetailWrapper.add(rightWrapper);

	return ticketDetailWrapper;
}

function TicketDescriptionUI() {
	var ticketDescriptionWrapper = Titanium.UI.createView({
		top : 10,
		height : Titanium.UI.SIZE,
		width : Titanium.UI.Fill,
		backgroundColor : WHITE,
		borderColor : GRAY_DARK,
		borderRadius : 10,
		borderWidth : 2,
		layout : "horizontal",
	});

	var ticketDescription = Titanium.UI.createLabel({
		text : "We need to implement Audio recording feature in the application so that user can share recorded audio to other users. Mike will provide a full design mock-up for this feature.",
		left : 5,
		right : 5,
		top : 5,
		bottom : 5,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
	});

	ticketDescriptionWrapper.add(ticketDescription);

	return ticketDescriptionWrapper;
}

function TicketCommentUI() {

	var ticketCommentWrapper = Titanium.UI.createView({
		top : 10,
		height : Titanium.UI.SIZE,
		width : Titanium.UI.Fill,
		backgroundColor : WHITE,
		borderColor : GRAY_DARK,
		borderRadius : 10,
		borderWidth : 2,
	});

	var commentHeaderView = Titanium.UI.createView({
		left : 5,
		height : Titanium.UI.SIZE,
		width : Titanium.UI.SIZE,
		backgroundColor : "transparent",
		layout : "horizontal",
	});
	//f086
	var commentHeaderIcon = Titanium.UI.createLabel({
		left : 5,
		right : 5,
		top : 5,
		bottom : 5,
		text : "\uf086",
		color : BLACK,
		font : {
			fontSize : 16,
			fontFamily : "FontAwesome"
		},
	});

	commentHeaderView.add(commentHeaderIcon);

	var commentHeaderTitle = Titanium.UI.createLabel({
		text : "Comments",
		left : 5,
		right : 5,
		top : 5,
		bottom : 5,
		color : TEXT_DARK,
		font : {
			fontSize : 16,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
	});

	var commentCount = 5;

	var commentHeaderCount = Titanium.UI.createLabel({
		text : "(" + commentCount + ")",
		left : 5,
		right : 5,
		top : 5,
		bottom : 5,
		color : TEXT_DARK,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
	});

	commentHeaderView.add(commentHeaderIcon);
	commentHeaderView.add(commentHeaderTitle);
	commentHeaderView.add(commentHeaderCount);

	ticketCommentWrapper.add(commentHeaderView);

	if (commentCount > 0) {

		var showCommentLabel = Titanium.UI.createLabel({
			text : "Show all comments",
			right : 10,
			top : 5,
			bottom : 5,
			color : BLUE,
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
		});

		showCommentLabel.addEventListener("click", function(e) {
			pma.window.open("commentList");
		});

		ticketCommentWrapper.add(showCommentLabel);

	}

	return ticketCommentWrapper;
}

function TicketCommentBoxUI() {
	var commentBoxWrapper = Titanium.UI.createView({
		top : 10,
		height : Titanium.UI.SIZE,
		width : Titanium.UI.Fill,
		backgroundColor : WHITE,
		borderColor : GRAY_DARK,
		borderRadius : 10,
		borderWidth : 2,
	});

	var commentBox = Titanium.UI.createTextArea({
		hintText : "Post a comment",
		color : '#000',
		width : "80%",
		height : 120,
		top : 5,
		bottom : 5,
		left : 5,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
		autocorrect : false,
		enableReturnKey : true,
		keyboardType : Titanium.UI.KEYBOARD_EMAIL,
		clearButtonMode : Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
		left :10,
		borderColor : "transparent",
	});

	var postLabel = Titanium.UI.createLabel({
		text : "Post",
		right : 10,
		top : 5,
		bottom : 5,
		color : BLUE,
		font : {
			fontSize : 16,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
	});
	
	commentBoxWrapper.add(commentBox);
	commentBoxWrapper.add(postLabel);

	return commentBoxWrapper;
}

function TicketDetailScreen() {

	var viewTicketWindow = Ti.UI.createWindow({
		backgroundColor : GRAY_LIGHT,
		layout : "vertical",
	});

	pma.ui.actionBar("View Ticket", viewTicketWindow);

	viewTicketWindow.open();

	//Parent Wrapper View for all rows.
	var scrollView = Titanium.UI.createScrollView({
		top : 0,
		height : Titanium.UI.SIZE,
		width : "98%",
		backgroundColor : "transparent",
		layout : "vertical",
	});

	//#1 Show ticket number UI
	scrollView.add(TicketNumberUI());

	//#2 Show ticket title UI
	scrollView.add(TicketTitleUI());

	//#3 Show ticket assigned to whom UI
	scrollView.add(TicketDetailUI());

	//#4 Show ticket reporter UI
	scrollView.add(TicketDescriptionUI());

	//#5 Show comments UI
	scrollView.add(TicketCommentUI());

	//Show ticket comment box UI
	scrollView.add(TicketCommentBoxUI());

	viewTicketWindow.add(scrollView);

};

module.exports = TicketDetailScreen;
