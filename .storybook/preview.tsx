import React from "react";
import {addDecorator} from "@storybook/react";

import "../src/styles.css";
import {CssBaseline, StylesProvider} from "@material-ui/core";

addDecorator(storyFn => (
  <StylesProvider injectFirst>
    <CssBaseline />
    {storyFn()}
  </StylesProvider>
));
