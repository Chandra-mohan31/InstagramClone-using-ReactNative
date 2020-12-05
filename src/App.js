import React from 'react';
import {Text,View} from "react-native";
import {Provider} from 'react-redux';
import store from './store';
import AppDes from "./AppDes";

function App() {
  return (
    <Provider store={store}>
      <AppDes />
    </Provider>
    
    
  )
}

export default App
