import React from "react";
import { Outlet } from "react-router-dom";
import Body from "./components/Body";

const App = () => (
  <div className="app-component bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/US-en-20241104-TRIFECTA-perspective_3f9119c8-336a-434d-aaaa-2deac24bc220_small.jpg')]">
    <Body />
  </div>
);

export default App;