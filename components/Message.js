import React from "react";
import styles from "../assets/styles";

import { Text, View, Image } from "react-native";

const Message = ({ image, lastMessage, name }) => {
	return (
		<View>
			<Image source={image} />
			<View>
				<Text>{name}</Text>
				<Text>{lastMessage}</Text>
			</View>
		</View>
	);
};

export default Message;
