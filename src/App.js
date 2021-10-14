import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "assets/css/style.css";

import MemberRoute from "components/Routes/MemberRoute";
import GuestRoute from "components/Routes/GuestRoute";

function App() {
  return (
    <div className='container mx-auto'>
      <h1 className='text-6xl'>Javascript React</h1>
    </div>
  );
}

export default App;
