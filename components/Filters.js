import React from "react";

import { Text, TouchableOpacity } from "react-native";

const Filters = () => {
	return (
		<TouchableOpacity style={styles.filters}>
			<Text style={styles.filtersText}>
				<Icon name="filter" /> Filters
			</Text>
		</TouchableOpacity>
	);
};

export default Filters;
