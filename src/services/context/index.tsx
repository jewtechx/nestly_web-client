import React, { Fragment, useEffect } from "react";
import router from "../../navigation/router-config";
import { RouterProvider } from "react-router-dom";

// Define an initial state for the authentication slice

function AppNavigator() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default AppNavigator;