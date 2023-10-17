import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
//context
const AuthContext = createContext();

//provider
const AuthProvider = ({ children }) => {
  //golbal state
  const [state, setState] = useState({
    user: null,
    token: "",
  });

  // initial local storage data
  useEffect(() => {
    const loadLoaclStorageData = async () => {
      let data = await AsyncStorage.getItem("@auth");
      let loginData = JSON.parse(data);

      setState({ ...state, user: loginData?.user, token: loginData?.token });
    };
    loadLoaclStorageData();
  }, []);

  let token = state && state.token;

  //default axios setting
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.defaults.baseURL =
    "https://react-native-server-4tfd.onrender.com/api/v1";

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
