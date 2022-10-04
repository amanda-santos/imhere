import { ReactElement } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export const Home = (): ReactElement => {
  const participants = [
    "Mary",
    "Amanda",
    "Otto",
    "Jim",
    "Sally",
    "Sue",
    "Bob",
    "Anne",
    "John",
    "Jane",
    "Joe",
    "Jill",
    "Jack",
  ];

  const handleAddParticipant = () => {
    console.log("Add participant");
  };

  const handleRemoveParticipant = (name: string) => {
    console.log("Remove participant", name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event name</Text>
      <Text style={styles.eventDate}>Friday, Oct 7th</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Participant name"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={handleRemoveParticipant}
          />
        ))}
      </ScrollView>
    </View>
  );
};
