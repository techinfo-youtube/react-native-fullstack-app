import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import FooterMenu from "../components/Menus/FooterMenu";

const Account = () => {
  //global state
  const [state] = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>NAME : {state?.user.name}</Text>
      <Text>EMAIL : {state?.user.email}</Text>
      <Text>ROLE : {state?.user.role}</Text>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <FooterMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "space-between",
    marginTop: 40,
  },
});
export default Account;
