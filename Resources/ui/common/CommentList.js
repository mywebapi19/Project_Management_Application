function getRow(commentData) {

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

	//Parent view for holding topBodyView and bottomBodyView
	var mainBodyView = Titanium.UI.createView({
		layout : "vertical",
		height : Titanium.UI.SIZE,
		width : Titanium.UI.SIZE,
	});

	/************************************************************************
	 * Top view contains commenter image, commenter name and commenter time.
	 ***********************************************************************/

	//Parent view for holding imageBodyView
	var topBodyView = Titanium.UI.createView({
		height : Titanium.UI.SIZE,
		width : Titanium.UI.FILL,
	});

	var innerVerticalView = Titanium.UI.createView({
		top : 5,
		left : 5,
		layout : "horizontal",
		height : Titanium.UI.SIZE,
		width : "90%",
	});

	var profileImage = Ti.UI.createLabel({
		text : "\uf007",
		font : {
			fontSize : 16,
			fontFamily : "FontAwesome"
		},
		left : 5,
		color : BLUE,
	});

	var commenterName = Titanium.UI.createLabel({
		text : commentData.commenter_name,
		width : Titanium.UI.SIZE,
		height : Titanium.UI.SIZE,
		font : {
			fontSize : 16,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
		color : GRAY_DARK,
		left : 5,
	});

	var addedCommentedLabel = Titanium.UI.createLabel({
		text : "added a comment -",
		width : Titanium.UI.SIZE,
		height : Titanium.UI.SIZE,
		font : {
			fontSize : 15,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
		color : GRAY_DARK,
		left : 5,
	});

	var commentTime = Titanium.UI.createLabel({
		text : commentData.date_created,
		width : Titanium.UI.SIZE,
		height : Titanium.UI.SIZE,
		font : {
			fontSize : 15,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
		color : GRAY_DARK,
		left : 5,
	});

	var arrowIcon = Ti.UI.createLabel({
		text : "\uf054",
		//down arrow text : "\uf078",
		//right arrow text : "\uf054",
		font : {
			fontSize : 16,
			fontFamily : "FontAwesome"
		},
		top : 7,
		right : 10,
		color : BLACK,
	});

	innerVerticalView.add(profileImage);
	innerVerticalView.add(commenterName);
	innerVerticalView.add(addedCommentedLabel);
	innerVerticalView.add(commentTime);
	topBodyView.add(arrowIcon);

	topBodyView.add(innerVerticalView);

	/************************************************************************
	 * Bottom view contains comment text.
	 ***********************************************************************/

	//Parent view for leftWrapper and rightWrapper
	var bottomBodyView = Titanium.UI.createView({
		layout : "horizontal",
		height : Titanium.UI.SIZE,
		width : Titanium.UI.FILL,
	});

	var line = pma.ui.line();

	var commentTextWrapper = Titanium.UI.createView({
		layout : "horizontal",
		height : Titanium.UI.SIZE,
		width : Titanium.UI.FILL,
		left : 10,
		right : 10,
	});

	var commentText = Titanium.UI.createLabel({
		text : commentData.comment_text,
		width : Titanium.UI.SIZE,
		height : Titanium.UI.SIZE,
		bottom : 5,
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
		color : GRAY_DARK,
	});

	commentTextWrapper.add(commentText);

	bottomBodyView.add(line);
	bottomBodyView.add(commentTextWrapper);

	/************************************************************************
	 * Bottom view End
	 ***********************************************************************/

	mainBodyView.add(topBodyView);
	mainBodyView.add(bottomBodyView);

	parentView.add(mainBodyView);

	row.add(parentView);

	return row;
}

function CommentListScreen() {

	var commentData;

	var commentListWindow = Ti.UI.createWindow({
		backgroundColor : GRAY_LIGHT,
		layout : "vertical",
	});

	pma.ui.actionBar("Comments", commentListWindow);
	
	commentListWindow.open();
	
	//Parent Wrapper View for all rows.
	var tableview = Titanium.UI.createTableView({
		separatorColor : GRAY_LIGHT,
		width : "98%",
	});

	//Dummy API Call
	function CallAPI() {

		var data = pma.dummyData.getCommentList();
		commentData = data.comment_list;

	}

	CallAPI();

	for (var i = 0; i < commentData.length; i++) {

		//Append rows in table one by one.
		tableview.appendRow(getRow(commentData[i]));

	}

	commentListWindow.add(tableview);
}

module.exports = CommentListScreen;

