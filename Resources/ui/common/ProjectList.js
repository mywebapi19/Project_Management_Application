/***************************************************************
 * Ticket No.
 **************************************************************/

function ProjectListScreen() {

	var projectData = pma.dummyData.getdata();

	var projectListWindow = Ti.UI.createWindow({
		backgroundColor : GRAY_LIGHT,
		layout : "vertical",
	});

	pma.ui.actionBar("Projects", projectListWindow);

	projectListWindow.open();

	function ProjectListUI() {

		var row = Titanium.UI.createTableViewRow({
			backgroundColor : "transparent",
		});

		//Parent View of imageBodyView and mainBodyView
		var parentView = Titanium.UI.createView({
			layout : "horizontal",
			height : Titanium.UI.SIZE,
			width : Titanium.UI.FILL,
			backgroundColor : WHITE,
			borderColor : GRAY_DARK,
			borderRadius : 10,
			borderWidth : 2,
		});

		/***************************************************************
		 * project image
		 ***************************************************************/
		var imageBodyView = Titanium.UI.createView({
			left : 5,
			height : Titanium.UI.SIZE,
			width : Titanium.UI.SIZE,
		});

		var projectImage = Titanium.UI.createImageView({
			image : '/images/profile/profileImage.png',
			height : 40,
			width : 40,
			left : 5,
			right : 5,
			top : 5,
			bottom : 5,
		});

		imageBodyView.add(projectImage);

		/***************************************************************
		 * project image end
		 ***************************************************************/

		//Parent view for holding topBodyView and bottomBodyView
		var mainBodyView = Titanium.UI.createView({
			left : 5,
			layout : "vertical",
			height : Titanium.UI.SIZE,
			width : Titanium.UI.SIZE,
		});

		//Parent view for holding imageBodyView
		var topBodyView = Titanium.UI.createView({
			layout : "horizontal",
			height : Titanium.UI.SIZE,
			width : Titanium.UI.SIZE,
		});

		//Parent view for leftWrapper and rightWrapper
		var bottomBodyView = Titanium.UI.createView({
			layout : "horizontal",
			height : Titanium.UI.SIZE,
			width : Titanium.UI.SIZE,
		});

		/***************************************************************
		 * leftWrapper contains only labels for values
		 ***************************************************************/

		var leftWrapper = Titanium.UI.createView({
			layout : "vertical",
			height : Titanium.UI.SIZE,
			width : Titanium.UI.SIZE,
			bottom : 5,
		});

		/***************************************************************
		 * rightWrapper contains only values of labels
		 ***************************************************************/

		var rightWrapper = Titanium.UI.createView({
			layout : "vertical",
			height : Titanium.UI.SIZE,
			width : Titanium.UI.SIZE,
			bottom : 5,
		});

		/***************************************************************
		 * project title module
		 ***************************************************************/
		var titleWrapper = Titanium.UI.createView({
			top : 5,
			height : Titanium.UI.SIZE,
			width : Titanium.UI.SIZE,
			backgroundColor : "transparent",
			layout : "horizontal",
		});

		var projectTitle = Titanium.UI.createLabel({
			text : projectData.project_name,
			width : Titanium.UI.SIZE,
			height : Titanium.UI.SIZE,
			font : {
				fontSize : 16,
				fontWeight : 'bold',
				fontFamily : 'Helvetica Neue'
			},
			color : GRAY_DARK,
		});

		titleWrapper.add(projectTitle);
		topBodyView.add(titleWrapper);
		/***************************************************************
		 * leftWrapper which holds label only and not value
		 ***************************************************************/

		//project lead label module

		var leadWrapper = Titanium.UI.createView({
			height : Titanium.UI.SIZE,
			width : Titanium.UI.SIZE,
			backgroundColor : "transparent",
			layout : "horizontal",
			left : 0,
		});

		var projectLeadIcon = Ti.UI.createLabel({
			text : "\uf0f0",
			font : {
				fontSize : 16,
				fontFamily : "FontAwesome"
			},
			left : 0,
			color : GREEN,
		});

		var projectLeadLabel = Titanium.UI.createLabel({
			text : "Project Lead ",
			width : Titanium.UI.SIZE,
			height : Titanium.UI.SIZE,
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
			left : 5,
			color : GRAY_DARK,
		});

		leadWrapper.add(projectLeadIcon);
		leadWrapper.add(projectLeadLabel);

		//project key label module

		var keyWrapper = Titanium.UI.createView({
			height : Titanium.UI.SIZE,
			width : Titanium.UI.SIZE,
			backgroundColor : "transparent",
			layout : "horizontal",
			left : 0,
		});

		var projectKeyIcon = Ti.UI.createLabel({
			text : "\uf084",
			font : {
				fontSize : 16,
				fontFamily : "FontAwesome"
			},
			left : 0,
			color : YELLOW,
		});

		var projectKeyLabel = Titanium.UI.createLabel({
			text : "Project Key ",
			width : Titanium.UI.SIZE,
			height : Titanium.UI.SIZE,
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
			left : 5,
			color : GRAY_DARK,
		});

		keyWrapper.add(projectKeyIcon);
		keyWrapper.add(projectKeyLabel);

		// member count label module

		var memberCountWrapper = Titanium.UI.createView({
			height : Titanium.UI.SIZE,
			width : Titanium.UI.SIZE,
			backgroundColor : "transparent",
			layout : "horizontal",
			left : 0,
		});

		var memberCountIcon = Ti.UI.createLabel({
			text : "\uf0c0",
			font : {
				fontSize : 16,
				fontFamily : "FontAwesome"
			},
			left : 0,
			color : BLUE,
		});

		var memberCountLabel = Titanium.UI.createLabel({
			text : "Members ",
			width : Titanium.UI.SIZE,
			height : Titanium.UI.SIZE,
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
			left : 5,
			color : GRAY_DARK,
		});

		memberCountWrapper.add(memberCountIcon);
		memberCountWrapper.add(memberCountLabel);

		//ticket count label module

		var ticketCountWrapper = Titanium.UI.createView({
			height : Titanium.UI.SIZE,
			width : Titanium.UI.SIZE,
			backgroundColor : "transparent",
			layout : "horizontal",
			left : 0,
		});

		var ticketCountIcon = Ti.UI.createLabel({
			text : "\uf0ae",
			font : {
				fontSize : 16,
				fontFamily : "FontAwesome"
			},
			left : 0,
			color : RED,
		});

		var ticketCountLabel = Titanium.UI.createLabel({
			text : "Tickets ",
			width : Titanium.UI.SIZE,
			height : Titanium.UI.SIZE,
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
			left : 5,
			color : GRAY_DARK,
		});

		ticketCountWrapper.add(ticketCountIcon);
		ticketCountWrapper.add(ticketCountLabel);

		leftWrapper.add(leadWrapper);
		leftWrapper.add(keyWrapper);
		leftWrapper.add(memberCountWrapper);
		leftWrapper.add(ticketCountWrapper);

		/***************************************************************
		 * leftWrapper which holds label only and not value END
		 ***************************************************************/

		/***************************************************************
		 * rightWrapper which holds label only and not value
		 ***************************************************************/

		//project lead value module

		var projectLeadValue = Titanium.UI.createLabel({
			text : ": " + projectData.project_lead,
			width : Titanium.UI.SIZE,
			height : Titanium.UI.SIZE,
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
			left : 0,
			color : GRAY_DARK,
		});

		//project key value module

		var projectKeyValue = Titanium.UI.createLabel({
			text : ": " + projectData.project_key,
			width : Titanium.UI.SIZE,
			height : Titanium.UI.SIZE,
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
			left : 0,
			color : GRAY_DARK,
		});

		//member count value module

		var memberCountValue = Titanium.UI.createLabel({
			text : ": " + projectData.member_count,
			width : Titanium.UI.SIZE,
			height : Titanium.UI.SIZE,
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
			left : 0,
			color : GRAY_DARK,
		});

		// ticket count value module

		var ticketCountValue = Titanium.UI.createLabel({
			text : ": " + projectData.ticket_count,
			width : Titanium.UI.SIZE,
			height : Titanium.UI.SIZE,
			font : {
				fontSize : 16,
				fontWeight : 'normal',
				fontFamily : 'Helvetica Neue'
			},
			left : 0,
			color : GRAY_DARK,
		});

		rightWrapper.add(projectLeadValue);
		rightWrapper.add(projectKeyValue);
		rightWrapper.add(memberCountValue);
		rightWrapper.add(ticketCountValue);

		/***************************************************************
		 * rightWrapper which holds label only and not value END
		 ***************************************************************/

		parentView.add(imageBodyView);

		bottomBodyView.add(leftWrapper);
		bottomBodyView.add(rightWrapper);

		mainBodyView.add(topBodyView);
		mainBodyView.add(bottomBodyView);

		parentView.add(mainBodyView);

		row.add(parentView);

		return row;

	}

	//Parent Wrapper View for all rows.
	var tableview = Titanium.UI.createTableView({
		separatorColor : GRAY_LIGHT,
		width : "98%",
	});

	// Show projects list UI
	tableview.appendRow(ProjectListUI());

	projectListWindow.add(tableview);
}

module.exports = ProjectListScreen;
