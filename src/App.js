import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { history } from "./_helpers";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Vacancies from "./pages/Vacancies";
import "font-proxima-nova/style.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Proxima Nova Rg", "serif"]
  },
  palette: {
    // Jest cannot process the exported variables from "assets/css/variables/_colors.scss"
    // Workaround: The actual colors are hard coded as strings here
    primary: {
      main: "#0000EF",
      light: "#9999F7",
      dark: "#0000B3"
    },
    secondary: {
      main: "#55C883"
    },
    error: {
      main: "#FF6A79"
    },
    warning: {
      main: "#F5B272"
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth={false} className="no-padding">
        <Router history={history}>
          <Switch>
            <Route path="/vacancies">
              <Vacancies />
              {/* <Footer /> */}
            </Route>
            <Route path="/login">
              <LoginPage />
              <Footer />
            </Route>
            <Route path="/signup">
              <SignupPage />
              <Footer />
            </Route>
            <Route path="/forgot">
              <ForgotPasswordPage />
              <Footer />
            </Route>
            <Redirect from="/" to="/login" />
          </Switch>
        </Router>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
