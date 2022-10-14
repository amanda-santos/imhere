import { ReactElement, useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export const Home = (): ReactElement => {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipantName, setNewParticipantName] = useState("");

  const handleAddParticipant = () => {
    if (participants.includes(newParticipantName)) {
      return Alert.alert(
        "Participant exists",
        "There is already a participant in the list with that name."
      );
    }

    setParticipants((prevState) => [...prevState, newParticipantName]);
    setNewParticipantName("");
  };

  const handleRemoveParticipant = (name: string) => {
    Alert.alert("Remove", `Remove participant ${name}?`, [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
    ]);
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
          value={newParticipantName}
          onChangeText={setNewParticipantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Oops, no one has arrived at the event yet. Add participants to your
            attendance list.
          </Text>
        )}
      />
    </View>
  );
};
