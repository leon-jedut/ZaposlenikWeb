import React, { useState } from "react";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FilterListIcon from "@material-ui/icons/FilterList";
import { TextField } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import InputForm from "../InputForm/InputForm";

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
   control: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(2),
   },
   searchBar: {
      float: "left",
   },
   buttonDiv: {
      float: "right",
   },
}));

function ControlCard(props) {
   const [openDodajZaposlenika, setOpenDodajZaposlenika] = useState(false);
   const classes = useStyles();

   function handleChange(e) {
      props.searchHandler(e.target.value);
   }

   return (
      <div>
         <Card
            className={(classes.root, classes.card)}
            style={{ border: "1px solid" }}
         >
            <CardContent>
               <div className={classes.searchBar}>
                  <TextField
                     onChange={handleChange}
                     id="search"
                     className={classes.control}
                     label="Traži"
                     variant="outlined"
                     size="small"
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <SearchIcon />
                           </InputAdornment>
                        ),
                     }}
                  />
               </div>
               <div className={classes.buttonDiv}>
                  <Button
                     className={classes.control}
                     endIcon={<FilterListIcon />}
                  >
                     Filtriraj Zaposlenike
                  </Button>
                  <Button
                     onClick={() => setOpenDodajZaposlenika(true)}
                     variant="contained"
                     color="primary"
                     text="white"
                     className={classes.control}
                     endIcon={<AddCircleOutlineIcon />}
                  >
                     Dodaj Zaposlenika
                  </Button>
               </div>
            </CardContent>
         </Card>
         <InputForm
            openPopup={openDodajZaposlenika}
            setOpenPopup={setOpenDodajZaposlenika}
            setZaposlenici={props.setZaposlenici}
         />
      </div>
   );
}

export default ControlCard;
