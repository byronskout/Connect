import React from "react";

import { Text, TouchableOpacity } from "react-native";

const Location = () => {
	return (
		<TouchableOpacity style={styles.location}>
		<Text style={styles.locationText}>
			 London
			</Text>
		</TouchableOpacity>
	);
};

export default Location;
