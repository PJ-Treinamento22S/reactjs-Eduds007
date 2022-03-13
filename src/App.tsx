import React from "react";

import Header from "./components/Header"
import Pius from './components/Pius'
import Form from "./components/FormSection";


import '../src/App.css'


function App() {
  return (
    <div className="Container">
      
        <Header></Header>
        <Pius></Pius>
        <Form></Form>
      
    </div>
  );
}

export default App;
