import "../public/css/styles.css";
import React, { Component } from "react";
import "@volvo-cars/css/font-face.css";
import "@volvo-cars/css/tokens.css";
import "@volvo-cars/css/styles_all-media.css";

function HomePage(props: any) {
  console.log("shobhit", props);
  const { Component, pageProps } = props;
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default HomePage;
