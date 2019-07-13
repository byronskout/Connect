import React from "react";
import { ScrollView, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import ProfileItem from "../components/ProfileItem";
import Icon from "../components/Icon";
import Demo from "../assets/data/demo.js";
import styles from "../assets/styles";

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
			style={styles.bg}
		>
			<ScrollView>
				<ImageBackground source={image}>
					<View>
						<TouchableOpacity>
							<Text style={styles.topIconLeft}>
								<Icon name="chevronLeft" />
							</Text>
						</TouchableOpacity>

						<TouchableOpacity>
							<Text style={styles.topIconRight}>
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
					<TouchableOpacity style={styles.circledButton}>
						<Text>
							<Icon name="optionsH" />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.roundedButton}>
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
