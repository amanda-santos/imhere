import { ReactElement } from "react";
import { Text, TextInput, View } from "react-native";

import { styles } from "./styles";

export const Home = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event name</Text>
      <Text style={styles.eventDate}>Friday, Oct 7th</Text>

      <TextInput
        style={styles.input}
        placeholder="Guest name"
        placeholderTextColor="#6b6b6b"
      />
    </View>
  );
};
