import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../../data/styling/colors";
import Note from "../../../components/Note";
import { useQuery } from "@tanstack/react-query";
import { getAllNotes } from "../../../api/notes";
import { NoteType } from "@/types/NoteType";


  
const Home = () => {

  const {data : notes} = useQuery({
    queryKey: ["All Notes"],
    queryFn: getAllNotes,
  })

  const note = {
    _id: "1",
    title: "Note 1",
    topic: ["Topic 1", "Topic 2"],
    body: "Note Body",
    user: {
      _id: "1",
      name: "User 1",
      email: "user1@example.com",
      createdAt: "2021-01-01",
      updatedAt: "2021-01-01",
    },
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Note key={"1"} note={note} />
        {notes?.map((note : NoteType) => (
          <Note key={note._id} note={note} />
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({});


export default Home;