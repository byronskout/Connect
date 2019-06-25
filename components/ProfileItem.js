import React from "react";

import { Text, View } from "react-native";

const ProfileItem = ({
	age,
	info1,
	info2,
	info3,
	info4,
	location,
	matches,
	name
}) => {
	return (
			<View>
				<Text >
					 Match!
				</Text>
			</View>

			<Text style={styles.name}>{name}</Text>

	);
};

export default ProfileItem;
