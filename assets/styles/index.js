import { StyleSheet, Dimensions } from "react-native";

const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";

const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";

const STAR_ACTIONS = "#FFA200";
const LIKE_ACTIONS = "#B644B2";
const DISLIKE_ACTIONS = "#363636";
const FLASH_ACTIONS = "#5028D7";

const ICON_FONT = "tinderclone";

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
	// COMPONENT - CARD ITEM
	containerCardItem: {
		backgroundColor: WHITE,
		borderRadius: 8,
		alignItems: "center",
		margin: 10,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0 }
	},
	matchesCardItem: {
		marginTop: -35,
		backgroundColor: PRIMARY_COLOR,
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20
	},
	matchesTextCardItem: {
		fontFamily: ICON_FONT,
		color: WHITE
	}
});
