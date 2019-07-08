import React from "react";

import { Text, View } from "react-native";
import Icon from "./Icon";

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
			<View>
				<Text>
					<Icon name="heart" /> {matches}% Match!
				</Text>
			</View>

			<Text>{name}</Text>

			<Text>
				{age} - {location}
			</Text>

			<View>
				<Text>
					<Icon name="user" />
				</Text>
				<Text>{info1}</Text>
			</View>

			<View>
				<Text>
					<Icon name="circle" />
				</Text>
				<Text>{info2}</Text>
			</View>

			<View>
				<Text>
					<Icon name="hashtag" />
				</Text>
				<Text>{info3}</Text>
			</View>

			<View>
				<Text>
					<Icon name="calendar" />
				</Text>
				<Text>{info4}</Text>
			</View>
		</View>
	);
};

export default ProfileItem;
