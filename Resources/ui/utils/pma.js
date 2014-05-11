function pma() {
}

pma.trialCall = {};

pma.trialCall.open = function() {
	alert("Trial Global Call");
};

/***********************************************************************************************************
 *	pma.dummyData;  Used for Dummy Data
 ***********************************************************************************************************/

pma.dummyData = {};

pma.dummyData.showDummyMessage = function(Key){
	
	alert(key + "Update Successfully!");
	
};

pma.dummyData.getMemberList = function() {

	var data = {
		"member_list" : [{
			"member_name" : "Ajinkya Kasar"
		}, {
			"member_name" : "Buva Thombare"
		}, {
			"member_name" : "Bhushan Deore"
		}, {
			"member_name" : "Dnyaneshwar Shingade"
		}, {
			"member_name" : "Prajakta Shinde"
		}, {
			"member_name" : "Sonali Dive"
		}, {
			"member_name" : "Vaidehi Patil"
		}, {
			"member_name" : "Prashant Bharambe"
		},]
	};

	return data;
};

pma.dummyData.getProjectList = function() {

	var data = {
		"project_list" : [{
			"project_name" : "App Protector",
			"project_key" : "APP",
			"project_lead" : "Prashant Bharambe",
			"member_count" : "10",
			"ticket_count" : "29",
		}, {
			"project_name" : "Desktop Notification",
			"project_key" : "DNP",
			"project_lead" : "Preeti Narkhede",
			"member_count" : "15",
			"ticket_count" : "30",
		}, {
			"project_name" : "Recipe Application",
			"project_key" : "RAP",
			"project_lead" : "Arati Mhaisekar",
			"member_count" : "5",
			"ticket_count" : "20",
		}, {
			"project_name" : "Recharge Me",
			"project_key" : "RMP",
			"project_lead" : "Bhushan Deore",
			"member_count" : "20",
			"ticket_count" : "108",
		},{
			"project_name" : "Book My Movie",
			"project_key" : "BMM",
			"project_lead" : "Pooja Hule",
			"member_count" : "8",
			"ticket_count" : "45",
		}, {
			"project_name" : "Cot Wala",
			"project_key" : "CWP",
			"project_lead" : "Asmita Chaudhary",
			"member_count" : "5",
			"ticket_count" : "35",
		}, {
			"project_name" : "Mobile Booster Application",
			"project_key" : "MBA",
			"project_lead" : "Sanjay Mate",
			"member_count" : "23",
			"ticket_count" : "200",
		}, {
			"project_name" : "Go Travel",
			"project_key" : "GTP",
			"project_lead" : "Sanjay Mathapati",
			"member_count" : "30",
			"ticket_count" : "250",
		}]
	};

	return data;
};

pma.dummyData.getTicketList = function() {

	var data = {
		"ticket_list" : [{
			"ticket_title" : "Hard app crash on sliding menu",
			"ticket_no" : "APP-1120",
			"ticket_type" : "Bug",
			"ticket_priority" : "Major",
			"comment_count" : "5",
		},{
			"ticket_title" : "Shadow effect on Header",
			"ticket_no" : "APP-1120",
			"ticket_type" : "Improvement",
			"ticket_priority" : "Minor",
			"comment_count" : "0",
		},{
			"ticket_title" : "Circular profile picture",
			"ticket_no" : "APP-1120",
			"ticket_type" : "Task",
			"ticket_priority" : "Trivial",
			"comment_count" : "0",
		},{
			"ticket_title" : "Increase font size",
			"ticket_no" : "APP-1120",
			"ticket_type" : "Improvement",
			"ticket_priority" : "Minor",
			"comment_count" : "1",
		},{
			"ticket_title" : "Remove My tab",
			"ticket_no" : "APP-1120",
			"ticket_type" : "Improvement",
			"ticket_priority" : "Major",
			"comment_count" : "10",
		},{
			"ticket_title" : "Audio recording feature",
			"ticket_no" : "APP-1120",
			"ticket_type" : "New Feature",
			"ticket_priority" : "major",
			"comment_count" : "3",
		},]
	};

	return data;
};

pma.dummyData.getCommentList = function() {

	var data = {
		"comment_list" : [{
			"commenter_name" : "Vaidehi Patil",
			"date_created" : "3 hours ago",
			"comment_text" : "Hi Sukanya Rathod, Can you please look at this issue. In description I had mentioned the test case. Thanks!",
		},{
			"commenter_name" : "Prashant Bharambe",
			"date_created" : "3 hours ago",
			"comment_text" : "Hi Sukanya Rathod, please work on this as first priority.",
		},{
			"commenter_name" : "Sukanya Rathod",
			"date_created" : "3 hours ago",
			"comment_text" : "Yes Prashant Bharambe, Sure",
		},{
			"commenter_name" : "Sukanya Rathod",
			"date_created" : "2 hours ago",
			"comment_text" : "Hi Dnyaneshwar Shingade, can you please take a look at server side. I am not getting the data with proper parameters.",
		},{
			"commenter_name" : "Dnyaneshwar Shingade",
			"date_created" : "1 hour ago",
			"comment_text" : "Hi Sukanya Rathod, thanks for knowing me this issue. Yes, the root cause was at server side. I have fixed this issue. You can proceed further now. Thanks!",
		},{
			"commenter_name" : "Sukanya Rathod",
			"date_created" : "20 minutes ago",
			"comment_text" : "Thanks Dnyaneshwar Shingade for this fix. API is working as expected.",
		},{
			"commenter_name" : "Prashant Bharambe",
			"date_created" : "5 minutes ago",
			"comment_text" : "Great work team!",
		}],
		"comment_count" : 5,
	};

	return data;
};



pma.dummyData.getCountryList = function() {
	var data = {
		"country_list" : [{
			"name" : "Afghanistan",
			"code" : "AF"
		}, {
			"name" : "Åland Islands",
			"code" : "AX"
		}, {
			"name" : "Albania",
			"code" : "AL"
		}, {
			"name" : "Algeria",
			"code" : "DZ"
		}, {
			"name" : "American Samoa",
			"code" : "AS"
		}, {
			"name" : "AndorrA",
			"code" : "AD"
		}, {
			"name" : "Angola",
			"code" : "AO"
		}, {
			"name" : "Anguilla",
			"code" : "AI"
		}, {
			"name" : "Antarctica",
			"code" : "AQ"
		}, {
			"name" : "Antigua and Barbuda",
			"code" : "AG"
		}, {
			"name" : "Argentina",
			"code" : "AR"
		}, {
			"name" : "Armenia",
			"code" : "AM"
		}, {
			"name" : "Aruba",
			"code" : "AW"
		}, {
			"name" : "Australia",
			"code" : "AU"
		}, {
			"name" : "Austria",
			"code" : "AT"
		}, {
			"name" : "Azerbaijan",
			"code" : "AZ"
		}, {
			"name" : "Bahamas",
			"code" : "BS"
		}, {
			"name" : "Bahrain",
			"code" : "BH"
		}, {
			"name" : "Bangladesh",
			"code" : "BD"
		}, {
			"name" : "Barbados",
			"code" : "BB"
		}, {
			"name" : "Belarus",
			"code" : "BY"
		}, {
			"name" : "Belgium",
			"code" : "BE"
		}, {
			"name" : "Belize",
			"code" : "BZ"
		}, {
			"name" : "Benin",
			"code" : "BJ"
		}, {
			"name" : "Bermuda",
			"code" : "BM"
		}, {
			"name" : "Bhutan",
			"code" : "BT"
		}, {
			"name" : "Bolivia",
			"code" : "BO"
		}, {
			"name" : "Bosnia and Herzegovina",
			"code" : "BA"
		}, {
			"name" : "Botswana",
			"code" : "BW"
		}, {
			"name" : "Bouvet Island",
			"code" : "BV"
		}, {
			"name" : "Brazil",
			"code" : "BR"
		}, {
			"name" : "British Indian Ocean Territory",
			"code" : "IO"
		}, {
			"name" : "Brunei Darussalam",
			"code" : "BN"
		}, {
			"name" : "Bulgaria",
			"code" : "BG"
		}, {
			"name" : "Burkina Faso",
			"code" : "BF"
		}, {
			"name" : "Burundi",
			"code" : "BI"
		}, {
			"name" : "Cambodia",
			"code" : "KH"
		}, {
			"name" : "Cameroon",
			"code" : "CM"
		}, {
			"name" : "Canada",
			"code" : "CA"
		}, {
			"name" : "Cape Verde",
			"code" : "CV"
		}, {
			"name" : "Cayman Islands",
			"code" : "KY"
		}, {
			"name" : "Central African Republic",
			"code" : "CF"
		}, {
			"name" : "Chad",
			"code" : "TD"
		}, {
			"name" : "Chile",
			"code" : "CL"
		}, {
			"name" : "China",
			"code" : "CN"
		}, {
			"name" : "Christmas Island",
			"code" : "CX"
		}, {
			"name" : "Cocos (Keeling) Islands",
			"code" : "CC"
		}, {
			"name" : "Colombia",
			"code" : "CO"
		}, {
			"name" : "Comoros",
			"code" : "KM"
		}, {
			"name" : "Congo",
			"code" : "CG"
		}, {
			"name" : "Congo, The Democratic Republic of the",
			"code" : "CD"
		}, {
			"name" : "Cook Islands",
			"code" : "CK"
		}, {
			"name" : "Costa Rica",
			"code" : "CR"
		}, {
			"name" : "Cote D\"Ivoire",
			"code" : "CI"
		}, {
			"name" : "Croatia",
			"code" : "HR"
		}, {
			"name" : "Cuba",
			"code" : "CU"
		}, {
			"name" : "Cyprus",
			"code" : "CY"
		}, {
			"name" : "Czech Republic",
			"code" : "CZ"
		}, {
			"name" : "Denmark",
			"code" : "DK"
		}, {
			"name" : "Djibouti",
			"code" : "DJ"
		}, {
			"name" : "Dominica",
			"code" : "DM"
		}, {
			"name" : "Dominican Republic",
			"code" : "DO"
		}, {
			"name" : "Ecuador",
			"code" : "EC"
		}, {
			"name" : "Egypt",
			"code" : "EG"
		}, {
			"name" : "El Salvador",
			"code" : "SV"
		}, {
			"name" : "Equatorial Guinea",
			"code" : "GQ"
		}, {
			"name" : "Eritrea",
			"code" : "ER"
		}, {
			"name" : "Estonia",
			"code" : "EE"
		}, {
			"name" : "Ethiopia",
			"code" : "ET"
		}, {
			"name" : "Falkland Islands (Malvinas)",
			"code" : "FK"
		}, {
			"name" : "Faroe Islands",
			"code" : "FO"
		}, {
			"name" : "Fiji",
			"code" : "FJ"
		}, {
			"name" : "Finland",
			"code" : "FI"
		}, {
			"name" : "France",
			"code" : "FR"
		}, {
			"name" : "French Guiana",
			"code" : "GF"
		}, {
			"name" : "French Polynesia",
			"code" : "PF"
		}, {
			"name" : "French Southern Territories",
			"code" : "TF"
		}, {
			"name" : "Gabon",
			"code" : "GA"
		}, {
			"name" : "Gambia",
			"code" : "GM"
		}, {
			"name" : "Georgia",
			"code" : "GE"
		}, {
			"name" : "Germany",
			"code" : "DE"
		}, {
			"name" : "Ghana",
			"code" : "GH"
		}, {
			"name" : "Gibraltar",
			"code" : "GI"
		}, {
			"name" : "Greece",
			"code" : "GR"
		}, {
			"name" : "Greenland",
			"code" : "GL"
		}, {
			"name" : "Grenada",
			"code" : "GD"
		}, {
			"name" : "Guadeloupe",
			"code" : "GP"
		}, {
			"name" : "Guam",
			"code" : "GU"
		}, {
			"name" : "Guatemala",
			"code" : "GT"
		}, {
			"name" : "Guernsey",
			"code" : "GG"
		}, {
			"name" : "Guinea",
			"code" : "GN"
		}, {
			"name" : "Guinea-Bissau",
			"code" : "GW"
		}, {
			"name" : "Guyana",
			"code" : "GY"
		}, {
			"name" : "Haiti",
			"code" : "HT"
		}, {
			"name" : "Heard Island and Mcdonald Islands",
			"code" : "HM"
		}, {
			"name" : "Holy See (Vatican City State)",
			"code" : "VA"
		}, {
			"name" : "Honduras",
			"code" : "HN"
		}, {
			"name" : "Hong Kong",
			"code" : "HK"
		}, {
			"name" : "Hungary",
			"code" : "HU"
		}, {
			"name" : "Iceland",
			"code" : "IS"
		}, {
			"name" : "India",
			"code" : "IN"
		}, {
			"name" : "Indonesia",
			"code" : "ID"
		}, {
			"name" : "Iran, Islamic Republic Of",
			"code" : "IR"
		}, {
			"name" : "Iraq",
			"code" : "IQ"
		}, {
			"name" : "Ireland",
			"code" : "IE"
		}, {
			"name" : "Isle of Man",
			"code" : "IM"
		}, {
			"name" : "Israel",
			"code" : "IL"
		}, {
			"name" : "Italy",
			"code" : "IT"
		}, {
			"name" : "Jamaica",
			"code" : "JM"
		}, {
			"name" : "Japan",
			"code" : "JP"
		}, {
			"name" : "Jersey",
			"code" : "JE"
		}, {
			"name" : "Jordan",
			"code" : "JO"
		}, {
			"name" : "Kazakhstan",
			"code" : "KZ"
		}, {
			"name" : "Kenya",
			"code" : "KE"
		}, {
			"name" : "Kiribati",
			"code" : "KI"
		}, {
			"name" : "Korea, Democratic People\"S Republic of",
			"code" : "KP"
		}, {
			"name" : "Korea, Republic of",
			"code" : "KR"
		}, {
			"name" : "Kuwait",
			"code" : "KW"
		}, {
			"name" : "Kyrgyzstan",
			"code" : "KG"
		}, {
			"name" : "Lao People\"S Democratic Republic",
			"code" : "LA"
		}, {
			"name" : "Latvia",
			"code" : "LV"
		}, {
			"name" : "Lebanon",
			"code" : "LB"
		}, {
			"name" : "Lesotho",
			"code" : "LS"
		}, {
			"name" : "Liberia",
			"code" : "LR"
		}, {
			"name" : "Libyan Arab Jamahiriya",
			"code" : "LY"
		}, {
			"name" : "Liechtenstein",
			"code" : "LI"
		}, {
			"name" : "Lithuania",
			"code" : "LT"
		}, {
			"name" : "Luxembourg",
			"code" : "LU"
		}, {
			"name" : "Macao",
			"code" : "MO"
		}, {
			"name" : "Macedonia, The Former Yugoslav Republic of",
			"code" : "MK"
		}, {
			"name" : "Madagascar",
			"code" : "MG"
		}, {
			"name" : "Malawi",
			"code" : "MW"
		}, {
			"name" : "Malaysia",
			"code" : "MY"
		}, {
			"name" : "Maldives",
			"code" : "MV"
		}, {
			"name" : "Mali",
			"code" : "ML"
		}, {
			"name" : "Malta",
			"code" : "MT"
		}, {
			"name" : "Marshall Islands",
			"code" : "MH"
		}, {
			"name" : "Martinique",
			"code" : "MQ"
		}, {
			"name" : "Mauritania",
			"code" : "MR"
		}, {
			"name" : "Mauritius",
			"code" : "MU"
		}, {
			"name" : "Mayotte",
			"code" : "YT"
		}, {
			"name" : "Mexico",
			"code" : "MX"
		}, {
			"name" : "Micronesia, Federated States of",
			"code" : "FM"
		}, {
			"name" : "Moldova, Republic of",
			"code" : "MD"
		}, {
			"name" : "Monaco",
			"code" : "MC"
		}, {
			"name" : "Mongolia",
			"code" : "MN"
		}, {
			"name" : "Montserrat",
			"code" : "MS"
		}, {
			"name" : "Morocco",
			"code" : "MA"
		}, {
			"name" : "Mozambique",
			"code" : "MZ"
		}, {
			"name" : "Myanmar",
			"code" : "MM"
		}, {
			"name" : "Namibia",
			"code" : "NA"
		}, {
			"name" : "Nauru",
			"code" : "NR"
		}, {
			"name" : "Nepal",
			"code" : "NP"
		}, {
			"name" : "Netherlands",
			"code" : "NL"
		}, {
			"name" : "Netherlands Antilles",
			"code" : "AN"
		}, {
			"name" : "New Caledonia",
			"code" : "NC"
		}, {
			"name" : "New Zealand",
			"code" : "NZ"
		}, {
			"name" : "Nicaragua",
			"code" : "NI"
		}, {
			"name" : "Niger",
			"code" : "NE"
		}, {
			"name" : "Nigeria",
			"code" : "NG"
		}, {
			"name" : "Niue",
			"code" : "NU"
		}, {
			"name" : "Norfolk Island",
			"code" : "NF"
		}, {
			"name" : "Northern Mariana Islands",
			"code" : "MP"
		}, {
			"name" : "Norway",
			"code" : "NO"
		}, {
			"name" : "Oman",
			"code" : "OM"
		}, {
			"name" : "Pakistan",
			"code" : "PK"
		}, {
			"name" : "Palau",
			"code" : "PW"
		}, {
			"name" : "Palestinian Territory, Occupied",
			"code" : "PS"
		}, {
			"name" : "Panama",
			"code" : "PA"
		}, {
			"name" : "Papua New Guinea",
			"code" : "PG"
		}, {
			"name" : "Paraguay",
			"code" : "PY"
		}, {
			"name" : "Peru",
			"code" : "PE"
		}, {
			"name" : "Philippines",
			"code" : "PH"
		}, {
			"name" : "Pitcairn",
			"code" : "PN"
		}, {
			"name" : "Poland",
			"code" : "PL"
		}, {
			"name" : "Portugal",
			"code" : "PT"
		}, {
			"name" : "Puerto Rico",
			"code" : "PR"
		}, {
			"name" : "Qatar",
			"code" : "QA"
		}, {
			"name" : "Reunion",
			"code" : "RE"
		}, {
			"name" : "Romania",
			"code" : "RO"
		}, {
			"name" : "Russian Federation",
			"code" : "RU"
		}, {
			"name" : "RWANDA",
			"code" : "RW"
		}, {
			"name" : "Saint Helena",
			"code" : "SH"
		}, {
			"name" : "Saint Kitts and Nevis",
			"code" : "KN"
		}, {
			"name" : "Saint Lucia",
			"code" : "LC"
		}, {
			"name" : "Saint Pierre and Miquelon",
			"code" : "PM"
		}, {
			"name" : "Saint Vincent and the Grenadines",
			"code" : "VC"
		}, {
			"name" : "Samoa",
			"code" : "WS"
		}, {
			"name" : "San Marino",
			"code" : "SM"
		}, {
			"name" : "Sao Tome and Principe",
			"code" : "ST"
		}, {
			"name" : "Saudi Arabia",
			"code" : "SA"
		}, {
			"name" : "Senegal",
			"code" : "SN"
		}, {
			"name" : "Serbia and Montenegro",
			"code" : "CS"
		}, {
			"name" : "Seychelles",
			"code" : "SC"
		}, {
			"name" : "Sierra Leone",
			"code" : "SL"
		}, {
			"name" : "Singapore",
			"code" : "SG"
		}, {
			"name" : "Slovakia",
			"code" : "SK"
		}, {
			"name" : "Slovenia",
			"code" : "SI"
		}, {
			"name" : "Solomon Islands",
			"code" : "SB"
		}, {
			"name" : "Somalia",
			"code" : "SO"
		}, {
			"name" : "South Africa",
			"code" : "ZA"
		}, {
			"name" : "South Georgia and the South Sandwich Islands",
			"code" : "GS"
		}, {
			"name" : "Spain",
			"code" : "ES"
		}, {
			"name" : "Sri Lanka",
			"code" : "LK"
		}, {
			"name" : "Sudan",
			"code" : "SD"
		}, {
			"name" : "Suriname",
			"code" : "SR"
		}, {
			"name" : "Svalbard and Jan Mayen",
			"code" : "SJ"
		}, {
			"name" : "Swaziland",
			"code" : "SZ"
		}, {
			"name" : "Sweden",
			"code" : "SE"
		}, {
			"name" : "Switzerland",
			"code" : "CH"
		}, {
			"name" : "Syrian Arab Republic",
			"code" : "SY"
		}, {
			"name" : "Taiwan, Province of China",
			"code" : "TW"
		}, {
			"name" : "Tajikistan",
			"code" : "TJ"
		}, {
			"name" : "Tanzania, United Republic of",
			"code" : "TZ"
		}, {
			"name" : "Thailand",
			"code" : "TH"
		}, {
			"name" : "Timor-Leste",
			"code" : "TL"
		}, {
			"name" : "Togo",
			"code" : "TG"
		}, {
			"name" : "Tokelau",
			"code" : "TK"
		}, {
			"name" : "Tonga",
			"code" : "TO"
		}, {
			"name" : "Trinidad and Tobago",
			"code" : "TT"
		}, {
			"name" : "Tunisia",
			"code" : "TN"
		}, {
			"name" : "Turkey",
			"code" : "TR"
		}, {
			"name" : "Turkmenistan",
			"code" : "TM"
		}, {
			"name" : "Turks and Caicos Islands",
			"code" : "TC"
		}, {
			"name" : "Tuvalu",
			"code" : "TV"
		}, {
			"name" : "Uganda",
			"code" : "UG"
		}, {
			"name" : "Ukraine",
			"code" : "UA"
		}, {
			"name" : "United Arab Emirates",
			"code" : "AE"
		}, {
			"name" : "United Kingdom",
			"code" : "GB"
		}, {
			"name" : "United States",
			"code" : "US"
		}, {
			"name" : "United States Minor Outlying Islands",
			"code" : "UM"
		}, {
			"name" : "Uruguay",
			"code" : "UY"
		}, {
			"name" : "Uzbekistan",
			"code" : "UZ"
		}, {
			"name" : "Vanuatu",
			"code" : "VU"
		}, {
			"name" : "Venezuela",
			"code" : "VE"
		}, {
			"name" : "Viet Nam",
			"code" : "VN"
		}, {
			"name" : "Virgin Islands, British",
			"code" : "VG"
		}, {
			"name" : "Virgin Islands, U.S.",
			"code" : "VI"
		}, {
			"name" : "Wallis and Futuna",
			"code" : "WF"
		}, {
			"name" : "Western Sahara",
			"code" : "EH"
		}, {
			"name" : "Yemen",
			"code" : "YE"
		}, {
			"name" : "Zambia",
			"code" : "ZM"
		}, {
			"name" : "Zimbabwe",
			"code" : "ZW"
		}]
	};

	return data;
};


/***********************************************************************************************************
 *	pma.ui.functionName();  This module is used for UI.
 ***********************************************************************************************************/

pma.ui = {};

/***********************************************************************************************************
 *	TextField and Button
 ***********************************************************************************************************/

pma.ui.actionBar = function(title, screen) {

	var actionBar = Ti.UI.createView({
		top : 0,
		height : 44,
		backgroundColor : GREEN,
	});

	var tappingWrapper = Ti.UI.createView({
		top : 0,
		left : 0,
		width : 60,
		height : 44,
	});

	var leftButton = Ti.UI.createLabel({
		text : "\uf053",
		left : 10,
		color : WHITE,
		font : {
			fontSize : 25,
			fontFamily : "FontAwesome"
		}
	});

	tappingWrapper.add(leftButton);

	tappingWrapper.addEventListener("click", function() {
		screen.close();
	});

	var centerLabel = Ti.UI.createLabel({
		text : title,
		font : {
			fontSize : 16,
			fontWeight : "bold"
		},
		color : WHITE,
	});

	actionBar.add(tappingWrapper);
	actionBar.add(centerLabel);

	screen.add(actionBar);
};

pma.ui.line = function() {

	var line = Titanium.UI.createView({
		top : 0,
		height : 1,
		width : Titanium.UI.FILL,
		backgroundColor : GRAY_DARK,
	});

	return line;
};

pma.ui.requiredFieldLabel = function() {

	var label = Titanium.UI.createLabel({
		text : " * ",
		color : "red",
		top : 10,
		left : 0,
		textAlign : Titanium.UI.TEXT_ALIGNMENT_LEFT,
		font : {
			fontSize : 10,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
	});

	return label;
};

pma.ui.getHorizontalWrapper = function() {

	var horizontalItemWrapper = Titanium.UI.createView({
		height : Titanium.UI.SIZE,
		width : Titanium.UI.Fill,
		backgroundColor : "transparent",
		layout : "horizontal",
	});

	return horizontalItemWrapper;
};

pma.ui.getTextField = function(hintText) {

	var textField = Ti.UI.createTextField({
		hintText : hintText,
		color : '#000',
		width : '94%',
		height : 45,
		right : 0,
		textAlign : 'left',
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
		autocorrect : false,
		enableReturnKey : true,
		keyboardType : Titanium.UI.KEYBOARD_EMAIL,
		clearButtonMode : Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
		borderColor : "transparent",
	});

	return textField;
};

pma.ui.getTextArea = function(hintText) {

	var textArea = Ti.UI.createTextArea({
		hintText : hintText,
		color : '#000',
		width : '94%',
		height : 150,
		right : 0,
		textAlign : 'left',
		font : {
			fontSize : 16,
			fontWeight : 'normal',
			fontFamily : 'Helvetica Neue'
		},
		autocorrect : false,
		enableReturnKey : true,
		keyboardType : Titanium.UI.KEYBOARD_EMAIL,
		clearButtonMode : Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
		borderColor : "transparent",
	});

	return textArea;
};

pma.ui.getButton = function(title) {
	var button = Titanium.UI.createButton({
		title : title,
		color : '#FFF',
		backgroundColor : '#acacac',
		backgroundImage : 'none',
		backgroundSelectedColor : '#9B9B9B',
		backgroundFocusedColor : '#BCBCBC',
		borderWidth : 0,
		borderRadius : 4,
		width : '94%',
		height : 40,
		top : 10,
		font : {
			fontSize : 16,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
	});

	return button;
};

/***********************************************************************************************************
 *	OverLay Screen
 ***********************************************************************************************************/

pma.ui.showOverlay = function(callback) {

	var overlayWindow = Ti.UI.createWindow({
		backgroundColor : "transparent",
		windowSoftInputMode : Ti.UI.Android.SOFT_INPUT_ADJUST_PAN,
		navBarHidden : true,
	});

	var wrapper = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		backgroundColor : 'black',
		opacity : 0.5,
	});

	var spinner = Titanium.UI.createActivityIndicator({
		style : Titanium.UI.ActivityIndicatorStyle.BIG,
	});

	wrapper.add(spinner);
	spinner.show();

	wrapper.addEventListener("click", function(e) {
		overlayWindow.close();
		spinner.hide();
	});

	overlayWindow.add(wrapper);

	overlayWindow.open({
		modal : true,
		animated : true,
	});
};

/***********************************************************************************************************
 *	Action Bar
 ***********************************************************************************************************/

pma.ui.getActionBar = function(parent) {
	var menuButtonWrapper = Ti.UI.createView({
		top : 0,
		left : 0,
		width : '60dp',
		height : "44dp",
	});

	var menuButton = Ti.UI.createLabel({
		text : "\uf0c9",
		font : {
			fontSize : '25dp',
			fontFamily : "FontAwesome"
		},
		left : 6,
		backgroundColor : "transparent",
		color : "#FFF"
	});

	menuButtonWrapper.addEventListener("click", function() {
		drawer.toggleLeftWindow();
	});

	var centerLabel = Ti.UI.createLabel({
		text : "NappDrawer",
		font : {
			fontSize : 14,
			fontWeight : "bold"
		},
		color : "#FFF"
	});
	var actionBar = Ti.UI.createView({
		top : 0,
		height : 44,
		backgroundColor : "#333"
	});

	menuButtonWrapper.add(menuButton);
	actionBar.add(menuButtonWrapper);

	actionBar.add(centerLabel);
	parent.add(actionBar);
};

pma.window = {};
pma.module2 = {};

pma.window.open = function(window) {

	switch(window) {
		case "commentList":
			var CommentList = require('/ui/common/CommentList');
			new CommentList();
			break;

	}

};

module.exports = pma;
