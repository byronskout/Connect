import React from "react";
import { View, ImageBackground } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";


const Home = () => {
	return (
		<ImageBackground>
			<View>
				<View>
				</View>

				<CardStack
					loop={true}
					verticalSwipe={false}
					renderNoMoreCards={() => null}
					ref={swiper => (this.swiper = swiper)}
				>
					))}
				</CardStack>
			</View>
		</ImageBackground>
	);
};

export default Home;
