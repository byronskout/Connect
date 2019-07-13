import React from "react";
import { ScrollView, Text, TouchableOpacity, ImageBackground, View, FlatList } from "react-native";
import Message from "../components/Message";
import Icon from "../components/Icon";
import Demo from "../assets/data/demo.js";
import styles from "../assets/styles";

const Messages = () => {
	return (
		<ImageBackground
			source={require("../assets/images/bg.png")}
			style={styles.bg}
		>
			<View>
				<ScrollView>
					<View>
						<Text>Messages</Text>
						<TouchableOpacity>
							<Text>
								<Icon name="optionsV" />
							</Text>
						</TouchableOpacity>
					</View>

					<FlatList
						data={Demo}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item }) => (
							<TouchableOpacity>
								<Message
									image={item.image}
									name={item.name}
									lastMessage={item.message}
								/>
							</TouchableOpacity>
						)}
					/>
				</ScrollView>
			</View>
		</ImageBackground>
	);
};

export default Messages;
