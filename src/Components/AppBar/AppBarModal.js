import React from "react";
import {
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   Button,
} from "@material-ui/core";

function AppBarModal(props) {
   return (
      <Dialog open={props.openPopup}>
         <DialogTitle>
            <div>Izradio </div>
         </DialogTitle>
         <DialogContent dividers>
            <div>
               <b>Leon Jeđut</b> za{" "}
               <a href="https://www.end2end.hr/index_hr.html">End2End</a>
            </div>
         </DialogContent>
         <DialogActions>
            <Button onClick={() => props.setOpenPopup(false)}>Zatvori</Button>
         </DialogActions>
      </Dialog>
   );
}
export default AppBarModal;
