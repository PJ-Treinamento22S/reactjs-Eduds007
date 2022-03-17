

import Header from "./components/Header"
import Pius from './components/Pius'
import Form from "./components/FormSection";
import React, { useEffect, useState } from "react";
import api from "./config/api";
import { Piu } from "./interfaces";


import '../src/App.css'


function App() {
  
  const [pius, setPius] = useState([] as Piu[]);

  useEffect(() => {
    const getPiu = async () => {
      const response = await api.get("/pius");
      setPius(response.data);
    };
    getPiu();
  }, []);


  return (
    <div className="Container">
      
        <Header></Header>
        <Pius pius={pius}></Pius>
        <Form pius={pius} setPius={setPius}></Form>
      
    </div>
  );
}

export default App;
 