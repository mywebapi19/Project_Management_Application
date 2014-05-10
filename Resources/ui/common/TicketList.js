/***************************************************************
 * Ticket No.
 **************************************************************/

function getRow(ticketData) {

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
		top : 10,
	});

	/***************************************************************
	 * project image
	 ***************************************************************/
	var imageBodyView = Titanium.UI.createView({
		left : 5,
		height : Titanium.UI.SIZE,
		width : Titanium.UI.SIZE,
	});

	var projectImage;

	/*
	 projectImage = Titanium.UI.createImageView({
	 image : '/images/profile/profileImage.png',
	 height : 40,
	 width : 40,
	 left : 5,
	 right : 5,
	 top : 5,
	 bottom : 5,
	 });
	 */

	projectImage = Titanium.UI.createLabel({
		text : "\uf0b1",
		font : {
			fontSize : 40,
			fontFamily : "FontAwesome"
		},
		//height : 40,
		//width : 40,
		left : 5,
		right : 5,
		top : 5,
		bottom : 5,
		color : GRAY_DARK,
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
	 * ticket title module
	 ***************************************************************/
	var titleWrapper = Titanium.UI.createView({
		top : 5,
		height : Titanium.UI.SIZE,
		width : Titanium.UI.SIZE,
		backgroundColor : "transparent",
		layout : "horizontal",
	});

	var ticketTitle = Titanium.UI.createLabel({
		text : ticketData.ticket_title,
		width : Titanium.UI.SIZE,
		height : Titanium.UI.SIZE,
		font : {
			fontSize : 16,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
		color : GRAY_DARK,
	});

	titleWrapper.add(ticketTitle);
	topBodyView.add(titleWrapper);
	/***************************************************************
	 * leftWrapper which holds label only and not value
	 ***************************************************************/

	//ticket number label module

	var ticketNoWrapper = Titanium.UI.createView({
		height : Titanium.UI.SIZE,
		width : Titanium.UI.SIZE,
		backgroundColor : "transparent",
		layout : "horizontal",
		left : 0,
	});

	var ticketNoIcon = Ti.UI.createLabel({
		text : "\uf0f0",
		font : {
			fontSize : 16,
			fontFamily : "FontAwesome"
		},
		left : 0,
		color : GREEN,
	});

	var ticketNoLabel = Titanium.UI.createLabel({
		text : "Number ",
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

	ticketNoWrapper.add(ticketNoIcon);
	ticketNoWrapper.add(ticketNoLabel);

	//ticket type label module

	var typeWrapper = Titanium.UI.createView({
		height : Titanium.UI.SIZE,
		width : Titanium.UI.SIZE,
		backgroundColor : "transparent",
		layout : "horizontal",
		left : 0,
	});

	var typeIcon = Ti.UI.createLabel({
		text : "\uf084",
		font : {
			fontSize : 16,
			fontFamily : "FontAwesome"
		},
		left : 0,
		color : YELLOW,
	});

	var typeLabel = Titanium.UI.createLabel({
		text : "Type ",
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

	typeWrapper.add(typeIcon);
	typeWrapper.add(typeLabel);

	// ticket priority label module

	var priorityWrapper = Titanium.UI.createView({
		height : Titanium.UI.SIZE,
		width : Titanium.UI.SIZE,
		backgroundColor : "transparent",
		layout : "horizontal",
		left : 0,
	});

	var priorityIcon = Ti.UI.createLabel({
		text : "\uf0c0",
		font : {
			fontSize : 16,
			fontFamily : "FontAwesome"
		},
		left : 0,
		color : BLUE,
	});

	var priorityLabel = Titanium.UI.createLabel({
		text : "Priority ",
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

	priorityWrapper.add(priorityIcon);
	priorityWrapper.add(priorityLabel);

	//ticket comment count label module

	var commentCountWrapper = Titanium.UI.createView({
		height : Titanium.UI.SIZE,
		width : Titanium.UI.SIZE,
		backgroundColor : "transparent",
		layout : "horizontal",
		left : 0,
	});

	var commentCountIcon = Ti.UI.createLabel({
		text : "\uf0ae",
		font : {
			fontSize : 16,
			fontFamily : "FontAwesome"
		},
		left : 0,
		color : RED,
	});

	var commentCountLabel = Titanium.UI.createLabel({
		text : "Comments ",
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

	commentCountWrapper.add(commentCountIcon);
	commentCountWrapper.add(commentCountLabel);

	leftWrapper.add(ticketNoWrapper);
	leftWrapper.add(typeWrapper);
	leftWrapper.add(priorityWrapper);
	leftWrapper.add(commentCountWrapper);

	/***************************************************************
	 * leftWrapper which holds label only and not value END
	 ***************************************************************/

	/***************************************************************
	 * rightWrapper which holds label only and not value
	 ***************************************************************/

	//project lead value module

	var ticketNoValue = Titanium.UI.createLabel({
		text : ": " + ticketData.ticket_no,
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

	//ticket type value module

	var typeValue = Titanium.UI.createLabel({
		text : ": " + ticketData.ticket_type,
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

	var priorityValue = Titanium.UI.createLabel({
		text : ": " + ticketData.ticket_priority,
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

	var commentCountValue = Titanium.UI.createLabel({
		text : ": " + ticketData.comment_count,
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

	rightWrapper.add(ticketNoValue);
	rightWrapper.add(typeValue);
	rightWrapper.add(priorityValue);
	rightWrapper.add(commentCountValue);

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

/********************************************************************
 *  MAIN THREAD
 ********************************************************************/

function TicketListScreen() {

	var ticketData;

	var ticketListWindow = Ti.UI.createWindow({
		backgroundColor : GRAY_LIGHT,
		layout : "vertical",
	});

	pma.ui.actionBar("Tickets", ticketListWindow);

	ticketListWindow.open();

	//Parent Wrapper View for all rows.
	var tableview = Titanium.UI.createTableView({
		separatorColor : GRAY_LIGHT,
		width : "98%",
	});

	//Dummy API Call
	function CallAPI() {

		var data = pma.dummyData.getTicketList();
		ticketData = data.ticket_list;

	}

	CallAPI();

	for (var i = 0; i < ticketData.length; i++) {

		//Append rows in table one by one.
		tableview.appendRow(getRow(ticketData[i]));

	}

	//tableview.appendRow(getRow(ticketData));

	ticketListWindow.add(tableview);
}

module.exports = TicketListScreen;
