import React from "react";

import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import styles from "../assets/styles";

const CardItem = ({
	actions,
	description,
	image,
	matches,
	name,
	onPressLeft,
	onPressRight,
	status,
	variant
}) => {
	// Custom styling
	const fullWidth = Dimensions.get("window").width;
	const imageStyle = [
		{
			borderRadius: 8,
			width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
			height: variant ? 170 : 350,
			margin: variant ? 0 : 20
		}
	];

	const nameStyle = [
		{
			paddingTop: variant ? 10 : 15,
			paddingBottom: variant ? 5 : 7,
			color: "#363636",
			fontSize: variant ? 15 : 30
		}
	];

	return (
		<View>
			{/* IMAGE */}
			<Image source={image}  />

			{/* MATCHES */}
			{matches && (
				<View >
					<Text >
						<Icon name="heart" /> {matches}% Match!
					</Text>
				</View>
			)}

			{/* NAME */}
			<Text style={nameStyle}>{name}</Text>

			{/* DESCRIPTION */}
			{description && (
				<Text >{description}</Text>
			)}

			{/* STATUS */}
			{status && (
				<View >
					<View style={status === "Online" } />
					<Text>{status}</Text>
				</View>
			)}

			{/* ACTIONS */}
			{actions && (
				<View >
					<TouchableOpacity >
						<Text>
							<Icon name="star" />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity  onPress={() => onPressLeft()}>
						<Text>
							<Icon name="like" />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => onPressRight()}
					>
							<Icon name="dislike" />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity >

					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default CardItem;
