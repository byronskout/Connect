import React from "react";

import {
	ScrollView,
	View,
	Text,
	ImageBackground,
	TouchableOpacity
} from "react-native";
import ProfileItem from "../components/ProfileItem";
import Icon from "../components/Icon";
import Demo from "../assets/data/demo.js";

const Profile = () => {
	const {
		age,
		image,
		info1,
		info2,
		info3,
		info4,
		location,
		match,
		name
	} = Demo[7];

	return (
		<ImageBackground
			source={require("../assets/images/bg.png")}
		>
			<ScrollView>
				<ImageBackground source={image}>
					<View>
						<TouchableOpacity>
							<Text>
								<Icon name="chevronLeft" />
							</Text>
						</TouchableOpacity>

						<TouchableOpacity>
							<Text>
								<Icon name="optionsV" />
							</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>

				<ProfileItem
					matches={match}
					name={name}
					age={age}
					location={location}
					info1={info1}
					info2={info2}
					info3={info3}
					info4={info4}
				/>

				<View>
					<TouchableOpacity>
						<Text>
							<Icon name="optionsH" />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity>
						<Text>
							<Icon name="chat" />
						</Text>
						<Text>Start chatting</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</ImageBackground>
	);
};

export default Profile;
