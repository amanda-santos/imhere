import { Text, View } from "react-native";

import { styles } from "./styles";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event name</Text>
      <Text style={styles.eventDate}>Friday, Oct 7th</Text>
    </View>
  );
};
