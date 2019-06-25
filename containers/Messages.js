import React from "react";

import {
	ScrollView,
	Text,
	TouchableOpacity,
	ImageBackground,
	View,
	FlatList
} from "react-native";

const Messages = () => {
	return (
		<ImageBackground>
			<View >
				<ScrollView>
					<View>
						<Text>Messages</Text>
						<TouchableOpacity>
							<Text>
							</Text>
						</TouchableOpacity>
					</View>

					<FlatList/>
				</ScrollView>
			</View>
		</ImageBackground>
	);
};

export default Messages;
