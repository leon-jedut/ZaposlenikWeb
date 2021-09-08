import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import AppBarModal from "./AppBarModal";

const useStyles = makeStyles((theme) => ({
   title: {
      flexGrow: 1,
      textAlign: "center",
   },
}));

export default function CenteredTextAppBar() {
   const classes = useStyles();
   const [openAppBarModal, setOpenAppBarModal] = useState(false);

   return (
      <div>
         <AppBar
            position="static"
            style={{
               background: "transparent",
               boxShadow: "none",
               marginBottom: "0px",
            }}
         >
            <Toolbar>
               <Typography
                  variant="h4"
                  style={{ color: "black" }}
                  className={classes.title}
               >
                  Zaposlenik.
                  <Button onClick={() => setOpenAppBarModal(true)}>Web</Button>
               </Typography>
            </Toolbar>
            <AppBarModal
               openPopup={openAppBarModal}
               setOpenPopup={setOpenAppBarModal}
            />
         </AppBar>
      </div>
   );
}
