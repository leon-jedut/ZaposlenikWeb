import {
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   Button,
   makeStyles,
   Avatar,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
   bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
   },
   avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
   },
   avatarDiv: {
      float: "left",
      marginRight: "25px",
   },
   textDiv: {
      float: "right",
   },
}));

function ZaposlenikSumaryDialog(props) {
   const classes = useStyles();
   const bull = <span className={classes.bullet}>•</span>;

   return (
      <Dialog open={props.openPopup}>
         <DialogTitle>
            <div>Prelged Zaposlenika</div>
         </DialogTitle>
         <DialogContent dividers>
            <div className={classes.avatarDiv}>
               <Avatar
                  variant="rounded"
                  alt={props.zaposlenik.ime}
                  src={props.zaposlenik.slika}
                  className={classes.avatar}
               />
            </div>
            <div className={classes.textDiv}>
               <div>
                  {bull} {props.zaposlenik.ime} {props.zaposlenik.prezime}{" "}
                  {bull} Spol: {props.zaposlenik.spol} {bull}
               </div>
               <div>
                  {bull} Datum Rodenja: {props.zaposlenik.datumRodenja} {bull}
               </div>
               <div>
                  {bull} Pocetak Rada: {props.zaposlenik.datumZaposlenja} {bull}
               </div>
               <div>
                  {bull} Vrsta Ugovora: {props.zaposlenik.tipUgovora} {bull}
               </div>
               <div>
                  {bull} Trajanje Ugovora: {props.zaposlenik.datumKrajaUgovora}{" "}
                  {bull}
               </div>
               <div>
                  {bull} Odjel: {props.zaposlenik.odjel} {bull}
               </div>
            </div>
         </DialogContent>
         <DialogActions>
            <Button onClick={() => props.setOpenPopup(false)}>Zatvori</Button>
         </DialogActions>
      </Dialog>
   );
}

export default ZaposlenikSumaryDialog;
