import React from "react";
import {
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   Button,
} from "@material-ui/core";
import {
   deleteZaposlenik,
   getZaposlenici,
} from "../../Services/zaposleniciService";

function DeleteModal(props) {
   function onDeleteHandler() {
      deleteZaposlenik(props.zaposlenik);
      props.setZaposlenici(getZaposlenici());
      props.setOpenPopup(false);
   }

   return (
      <Dialog open={props.openPopup}>
         <DialogTitle>
            <div>Brisanje Zaposlenika</div>
         </DialogTitle>
         <DialogContent dividers>
            <div>
               Želite li obrisati zaposlenika{" "}
               <b>
                  {props.zaposlenik.ime} {props.zaposlenik.prezime}
               </b>
               ,{" "}
            </div>
            <div>
               Rođenog: <b>{props.zaposlenik.datumRodenja}</b>{" "}
            </div>
         </DialogContent>
         <DialogActions>
            <Button onClick={() => props.setOpenPopup(false)}>Zatvori</Button>
            <Button
               onClick={onDeleteHandler}
               variant="contained"
               color="secondary"
            >
               Izbriši
            </Button>
         </DialogActions>
      </Dialog>
   );
}

export default DeleteModal;
