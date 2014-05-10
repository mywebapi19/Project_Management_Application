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

function NewTicketScreen() {

	var newTicketWindow = Ti.UI.createWindow({
		backgroundColor : GRAY_LIGHT,
		layout : "vertical",
	});

	pma.ui.actionBar("Create New Ticket", newTicketWindow);

	newTicketWindow.open();

	function TitleUI() {
		var titleWrapper = Titanium.UI.createView({
			top : 10,
			height : Titanium.UI.SIZE,
			width : Titanium.UI.Fill,
			backgroundColor : WHITE,
			borderColor : GRAY_DARK,
			borderRadius : 10,
			borderWidth : 2,
			layout : "horizontal",
		});

		var title = pma.ui.getTextField("Enter Ticket Title");
		title.maxLength = 50;
		titleWrapper.add(title);

		return titleWrapper;
	}

	function TypeUI() {

		var typeWrapper = Titanium.UI.createView({
			top : 10,
			height : Titanium.UI.SIZE,
			width : Titanium.UI.Fill,
			backgroundColor : WHITE,
			borderColor : GRAY_DARK,
			borderRadius : 10,
			borderWidth : 2,
			layout : "horizontal",
		});

		var issueTypeLabel = Ti.UI.createLabel({
			text : "Issue Type : ",
			width : "35%",
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
			left : 5,
			color : GRAY_DARK,
		});

		typeWrapper.add(issueTypeLabel);

		var img = Ti.UI.createLabel({
			text : "\uf188",
			//text : "\uf08e",//improvement
			//text : "\uf140", //task
			font : {
				fontSize : 16,
				fontFamily : "FontAwesome"
			},
			left : 5,
			color : RED,
		});
		typeWrapper.add(img);

		var picker = Ti.UI.createPicker();

		picker.addEventListener("change", function(e) {

			Titanium.API.warn(e.rowIndex);

			var index = e.rowIndex;

			switch(index) {
				case 0 :
					img.setText("\uf188");
					img.setColor(RED);
					break;

				case 1 :
					img.setText("\uf08e");
					img.setColor(GREEN);
					break;

				case 2 :
					img.setText("\uf140");
					img.setColor(YELLOW);
					break;
			}

		});

		var pickerRows = [];
		var pickerTitles = ["Bug", "Improvement", "New Feature", "Task"];

		for (var i = 0; i < pickerTitles.length; i++) {
			pickerRows[i] = Titanium.UI.createPickerRow({
				title : pickerTitles[i],
			});
		}

		picker.add(pickerRows);
		picker.selectionIndicator = true;

		typeWrapper.add(picker);

		return typeWrapper;

	}

	function PriorityUI() {

		var priorityWrapper = Titanium.UI.createView({
			top : 10,
			height : Titanium.UI.SIZE,
			width : Titanium.UI.Fill,
			backgroundColor : WHITE,
			borderColor : GRAY_DARK,
			borderRadius : 10,
			borderWidth : 2,
			layout : "horizontal",
		});

		var priorityLabel = Ti.UI.createLabel({
			text : "Priority : ",
			width : "35%",
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
			left : 5,
			color : GRAY_DARK,
		});

		priorityWrapper.add(priorityLabel);

		var img = Ti.UI.createLabel({
			text : "\uf062", //major priority
			//text : "\uf063",//minor priority
			font : {
				fontSize : 16,
				fontFamily : "FontAwesome"
			},
			left : 5,
			color : RED,
		});
		priorityWrapper.add(img);

		var picker = Ti.UI.createPicker();

		picker.addEventListener("change", function(e) {

			Titanium.API.warn(e.index);

			var index = e.rowIndex;

			switch(index) {
				case 0 :
					img.setText("\uf062");
					img.setColor(RED);
					break;

				case 1 :
					img.setText("\uf063");
					img.setColor(GREEN);
					break;
				case 2 :
					img.setText("\uf0e3");
					img.setColor(YELLOW);
					break;
			}

		});

		var pickerRows = [];
		var pickerTitles = ["Major", "Minor", "Trivial"];

		for (var i = 0; i < 3; i++) {
			pickerRows[i] = Titanium.UI.createPickerRow({
				title : pickerTitles[i],
			});
		}

		picker.add(pickerRows);
		picker.selectionIndicator = true;

		priorityWrapper.add(picker);

		return priorityWrapper;

	}

	function AssigneUI() {

		var assigneeWrapper = Titanium.UI.createView({
			top : 10,
			height : Titanium.UI.SIZE,
			width : Titanium.UI.Fill,
			backgroundColor : WHITE,
			borderColor : GRAY_DARK,
			borderRadius : 10,
			borderWidth : 2,
			layout : "horizontal",
		});

		var assigneeLabel = Ti.UI.createLabel({
			text : "Assignee : ",
			width : "35%",
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
			left : 5,
			color : GRAY_DARK,
		});

		assigneeWrapper.add(assigneeLabel);

		var img = Ti.UI.createLabel({
			text : "\uf007",
			font : {
				fontSize : 16,
				fontFamily : "FontAwesome"
			},
			left : 5,
			color : BLUE,
		});

		assigneeWrapper.add(img);

		var picker = Ti.UI.createPicker();

		picker.addEventListener("change", function(e) {
			Titanium.API.warn(e.index);
		});

		var pickerRows = [];
		var pickerTitles = ["Prashant Bharambe", "Kiran Mate", "Sonali Dive", "Buva Thombare", "Prajakta Shinde", "Dnyaneshwar Shingade", "Ajinkya Kasar", "Vaidehi Patil"];

		for (var i = 0; i < pickerTitles.length; i++) {
			pickerRows[i] = Titanium.UI.createPickerRow({
				title : pickerTitles[i],
			});
		}

		picker.add(pickerRows);
		picker.selectionIndicator = true;

		assigneeWrapper.add(picker);

		return assigneeWrapper;

	}

	function ProductOwnerUI() {

		var productOwnerWrapper = Titanium.UI.createView({
			top : 10,
			height : Titanium.UI.SIZE,
			width : Titanium.UI.Fill,
			backgroundColor : WHITE,
			borderColor : GRAY_DARK,
			borderRadius : 10,
			borderWidth : 2,
			layout : "horizontal",
		});

		var productOwnerLabel = Ti.UI.createLabel({
			text : "Product Owner : ",
			width : "35%",
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
			left : 5,
			color : GRAY_DARK,
		});

		productOwnerWrapper.add(productOwnerLabel);

		var img = Ti.UI.createLabel({
			text : "\uf007",
			font : {
				fontSize : 16,
				fontFamily : "FontAwesome"
			},
			left : 5,
			color : BLUE,
		});
		productOwnerWrapper.add(img);

		var picker = Ti.UI.createPicker();

		picker.addEventListener("change", function(e) {
			Titanium.API.warn(e.index);
		});

		var pickerRows = [];
		var pickerTitles = ["Genevieve Wang", "Inna Malykh", "Ziqi Zin", "Michael Stefanko"];

		for (var i = 0; i < pickerTitles.length; i++) {
			pickerRows[i] = Titanium.UI.createPickerRow({
				title : pickerTitles[i],
			});
		}

		picker.add(pickerRows);
		picker.selectionIndicator = true;

		productOwnerWrapper.add(picker);

		return productOwnerWrapper;

	}

	function DescriptionUI() {

		var descriptionWrapper = Titanium.UI.createView({
			top : 10,
			height : Titanium.UI.SIZE,
			width : Titanium.UI.Fill,
			backgroundColor : WHITE,
			borderColor : GRAY_DARK,
			borderRadius : 10,
			borderWidth : 2,
			layout : "horizontal",
		});

		var description = pma.ui.getTextArea("Ticket Description");

		descriptionWrapper.add(description);

		return descriptionWrapper;

	}

	function CreateIssueButton() {

		var createIssueButton = Titanium.UI.createButton({
			title : "Create Issue",
			color : WHITE,
			backgroundColor : BLUE,
			borderColor : BLUE,
			borderWidth : "0.5",
			borderRadius : 5,
			width : "98%",
			height : 40,
			top : 10
		});

		createIssueButton.addEventListener("click", function() {
			pma.ui.showOverlay();
		});

		return createIssueButton;

	}

	//Parent Wrapper View for all rows.
	var verticalItemWrapper = Titanium.UI.createScrollView({
		top : 0,
		height : Titanium.UI.SIZE,
		width : "98%",
		backgroundColor : "transparent",
		layout : "vertical",
	});

	// Show ticket title UI
	verticalItemWrapper.add(TitleUI());

	//Show ticket type UI
	verticalItemWrapper.add(TypeUI());

	//Show priority type UI
	verticalItemWrapper.add(PriorityUI());

	//Show assignee UI
	verticalItemWrapper.add(AssigneUI());

	//Show product owner UI
	verticalItemWrapper.add(ProductOwnerUI());

	//Show ticket Description UI
	verticalItemWrapper.add(DescriptionUI());

	//Show create issue button UI
	verticalItemWrapper.add(CreateIssueButton());

	newTicketWindow.add(verticalItemWrapper);
}

module.exports = NewTicketScreen;
