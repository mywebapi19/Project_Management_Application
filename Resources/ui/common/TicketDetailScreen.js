/***************************************************************
 * Ticket No.
 * Ticket Title.
 * Status.
 * Ticket Type
 * Assigned.
 * Priority.
 * Resolution.
 * Product Owner.
 * Description.
 * Comments.
 **************************************************************/

function TicketDetailScreen() {

	var ticketWindow = Ti.UI.createWindow({
		backgroundColor : GRAY_LIGHT,
	});
	
	ticketWindow.open();

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
			text : "BPD-XXX",
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
			text : "The title contains short description of Ticket",
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
			text : "IN PROGRESS",
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

		statusHolderView.add(ticketStatusValue);
		rightWrapper.add(statusHolderView);

		/*******************************************************************
		 * Type Section (Bug, Improvement, Task)
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
			text : "\uf062",
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
			text : "This is the description of ticket which may contain all the detail of issue and test so that developer can reproduce the issue",
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
			layout : "horizontal",
		});

		var commentHeaderView = pma.ui.getHorizontalWrapper();
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

			for (var i = 0; i < commentCount; i++) {
				
				//Horizontal Line
				var line = pma.ui.line();

				//Profile Pic, commenter name, commented date and time
				var commentorHolderView = Titanium.UI.createView({
					height : Titanium.UI.SIZE,
					width : Titanium.UI.Fill,
					layout : "horizontal",
					backgroundColor : "transparent",
				});
				
				//Commentor Image
				var commentorImage = Titanium.UI.createLabel({
					text : "\uf007",
					left : 5,
					top : 2,
					bottom : 2,
					font : {
						fontSize : 16,
						fontFamily : "FontAwesome"
					},
					left : 5,
					color : BLUE
				});
				
				//Commentor Name
				var commentorName = Titanium.UI.createLabel({
					text : "Mike Tison",
					left : 5,
					top : 2,
					bottom : 2,
					font : {
						fontSize : 16,
						fontWeight : 'normal',
						fontFamily : 'Helvetica Neue'
					},
				});
				
				//Comment Date Holder View
				var commentorDateHolderView = Titanium.UI.createView({
					height : Titanium.UI.SIZE,
					width : Titanium.UI.Fill,
					backgroundColor : "transparent",
				});
				
				//Comment Date Label
				var commentorDateTime = Titanium.UI.createLabel({
					text : "28/12/2013 10:21 AM",
					right : 5,
					font : {
						fontSize : 16,
						fontWeight : 'normal',
						fontFamily : 'Helvetica Neue'
					},
				});

				commentorHolderView.add(commentorImage);
				commentorHolderView.add(commentorName);
				commentorDateHolderView.add(commentorDateTime);
				
				//Comment Holder View
				var commentHolderView = Titanium.UI.createView({
					height : Titanium.UI.SIZE,
					width : Titanium.UI.Fill,
					layout : "horizontal",
				});

				var commentText = Titanium.UI.createLabel({
					text : "Hi Prashant Bharambe. This issue is fixed and can be proceed further for testing.",
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

				commentHolderView.add(line);
				commentHolderView.add(commentorHolderView);
				commentHolderView.add(commentorDateHolderView);
				commentHolderView.add(commentText);
				ticketCommentWrapper.add(commentHolderView);
			}
		}

		return ticketCommentWrapper;
	}

	//Parent Wrapper View for all rows.
	var verticalItemWrapper = Titanium.UI.createScrollView({
		top : 0,
		height : Titanium.UI.SIZE,
		width : "98%",
		backgroundColor : "transparent",
		layout : "vertical",
	});

	//#1 Show ticket number UI
	verticalItemWrapper.add(TicketNumberUI());

	//#2 Show ticket title UI
	verticalItemWrapper.add(TicketTitleUI());

	//#3 Show ticket assigned to whom UI
	verticalItemWrapper.add(TicketDetailUI());

	//#4 Show ticket reporter UI
	verticalItemWrapper.add(TicketDescriptionUI());

	//#5 Show comments UI
	verticalItemWrapper.add(TicketCommentUI());

	ticketWindow.add(verticalItemWrapper);

	

};

module.exports = TicketDetailScreen;
