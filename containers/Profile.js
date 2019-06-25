import React from "react";

import {
	ScrollView,
	View,
	Text,
	ImageBackground,
	TouchableOpacity
} from "react-native";


const Profile = () => {
	const {
		age,
		image,
		infoa,
		infob,
		infoc,
		infod,
		location,
		match,
		name
	}

	return (
		<ImageBackground>
			<ScrollView >
				<ImageBackground source={image}>
					<View>
						<TouchableOpacity>
							<Text >
							</Text>
						</TouchableOpacity>

						<TouchableOpacity>
							<Text>
							</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>


				<View>
					<TouchableOpacity>
						<Text>
						</Text>
					</TouchableOpacity>

					<TouchableOpacity>
						<Text >
						</Text>
						<Text>Start chatting</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</ImageBackground>
	);
};

export default Profile;
