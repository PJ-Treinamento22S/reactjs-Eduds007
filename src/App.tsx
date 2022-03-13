import React from "react";

import Header from "./components/header"
import Posts from './components/posts'
import Form from "./components/form_section";

import '../src/App.css'


function App() {
  return (
    <div className="Container">
      
        <Header></Header>
        <Posts></Posts>
        <Form></Form>
      
    </div>
  );
}

export default App;
