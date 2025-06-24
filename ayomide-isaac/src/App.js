import React from "react";

import Home from "./Page/Home/Home"; // Example of your home component
import CursorFollower from "./Container/CursorFollower";
import Header from "./Page/Header/Header";
const AppContent = () => {
  return (
    <>
      <CursorFollower />

      <Header />

      <Home />
    </>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;
