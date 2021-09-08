import "./App.css";

import AppBar from "./Components/AppBar/AppBar";
import { Grid } from "@material-ui/core";
import Content from "./Content";
import { createTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import { ThemeProvider } from "@material-ui/styles";

const theme = createTheme({
   palette: {
      primary: {
         main: green[500],
         contrastText: "#fff",
      },
      secondary: {
         main: red[600],
      },
   },
});

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Grid container direction="column">
            <Grid item xs={12}>
               <AppBar />
            </Grid>
            <Grid item container>
               <Grid item xs={0} sm={2} />
               <Grid item xs={12} sm={8}>
                  <Content />
               </Grid>
               <Grid item xs={0} sm={2} />
            </Grid>
         </Grid>
      </ThemeProvider>
   );
}

export default App;
