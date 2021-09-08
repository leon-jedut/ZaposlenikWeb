import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import ZaposlenikSumaryDialog from "./ZaposlenikSumaryDialog";
import DeleteModal from "./DeleteModal";
import { Divider, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   root: {
      minWidth: 175,
      margin: "10px 10px 10px 10px",
   },
   bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
   },
   title: {
      fontSize: 14,
   },
   pos: {
      marginBottom: 12,
   },
   card: {
      marginBottom: 12,
      marginTop: 12,
   },
   avatarDiv: {
      float: "left",
      marginRight: "15px",
      marginLeft: "15px",
      marginTop: "15px",
   },
   textDiv: {
      float: "right",
   },
   avatar: {
      width: theme.spacing(22),
      height: theme.spacing(22),
   },
}));

function ZaposlenikCard(props) {
   const [openZaposlenikSumary, setOpenZaposlenikSumary] = useState(false);
   const [openDeleteModal, setOpenDeleteModal] = useState(false);

   const classes = useStyles();
   const bull = <span className={classes.bullet}>•</span>;
   return (
      <Card
         className={(classes.root, classes.card)}
         style={{ border: "1px solid" }}
      >
         <div className={classes.avatarDiv}>
            <Avatar
               variant="rounded"
               alt={props.Zaposlenik.ime}
               src={props.Zaposlenik.slika}
               className={classes.avatar}
            />
         </div>
         <div>
            <CardContent>
               <Typography variant="h5" component="h2">
                  {props.Zaposlenik.ime + " " + props.Zaposlenik.prezime}
               </Typography>
               <Divider />
               <Typography className={classes.pos} color="textSecondary">
                  Spol: {props.Zaposlenik.spol} {bull} Odjel:{" "}
                  {props.Zaposlenik.odjel}
               </Typography>

               <Typography variant="body2" component="p">
                  Vrsta ugovora: {props.Zaposlenik.tipUgovora}
                  <br />
                  Trajanje ugovora: {props.Zaposlenik.datumKrajaUgovora}
                  <br />
               </Typography>
            </CardContent>
            <CardActions>
               <Button
                  size="small"
                  onClick={() => setOpenZaposlenikSumary(true)}
               >
                  Više
               </Button>
               <IconButton
                  color="black"
                  aria-label="uredi zaposlenika"
                  component="span"
               >
                  <EditIcon />
               </IconButton>
               <IconButton
                  color="black"
                  aria-label="izbrisi zaposlenika"
                  component="span"
                  onClick={() => setOpenDeleteModal(true)}
               >
                  <DeleteIcon />
               </IconButton>
            </CardActions>
         </div>
         <ZaposlenikSumaryDialog
            openPopup={openZaposlenikSumary}
            setOpenPopup={setOpenZaposlenikSumary}
            zaposlenik={props.Zaposlenik}
         />
         <DeleteModal
            openPopup={openDeleteModal}
            setOpenPopup={setOpenDeleteModal}
            zaposlenik={props.Zaposlenik}
            setZaposlenici={props.setZaposlenici}
         />
      </Card>
   );
}

export default ZaposlenikCard;
