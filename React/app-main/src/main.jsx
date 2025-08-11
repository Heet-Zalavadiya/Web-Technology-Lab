import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function Hello() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

class App2 extends React.Component {
  render() {
    
    return (
      <>
        <Hello />
      </>
    );
  }
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <br />
    <App2 />
    <App2 />
    <br />
    <Footer />
  </StrictMode>
);
