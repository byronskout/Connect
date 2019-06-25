import React from "react";

import { Text, TouchableOpacity } from "react-native";

const Location = () => {
	return (
		<TouchableOpacity style={styles.city}>
			<Text>
				<Icon name="marker" /> London
			</Text>
		</TouchableOpacity>
	);
};

export default Location;
