
import React from "react";
import { Provider } from 'react-redux';
import './../styles/App.css';
import { store } from "../redux/store";
import Counter from "./Counter";

const App = () => {
  return (
    <Provider store={store}>
        {/* Do not remove the main div */}
        <Counter />
    </Provider>
  )
}

export default App;
