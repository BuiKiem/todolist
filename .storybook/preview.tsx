import React from "react";
import {addDecorator} from "@storybook/react";
import {CssBaseline, StylesProvider} from "@material-ui/core";
import {Provider} from "react-redux";

import "../src/styles.css";

import {store} from "../src";

addDecorator(storyFn => (
  <React.StrictMode>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <CssBaseline />
        {storyFn()}
      </StylesProvider>
    </Provider>
  </React.StrictMode>
));
