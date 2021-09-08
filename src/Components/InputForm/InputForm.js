import { Button } from "@material-ui/core";
import React from "react";
import {
   Grid,
   makeStyles,
   Dialog,
   DialogTitle,
   DialogContent,
   DialogActions,
} from "@material-ui/core";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Container, Typography } from "@material-ui/core";
import Textfield from "../FormsUI/Textfield";
import Select from "../FormsUI/Select";
import DateTimePicker from "../FormsUI/DataTimePicker";

import odjeli from "../../data/odjeli.json";
import spolovi from "../../data/spolovi.json";
import tipoviUgovora from "../../data/tipoviUgovora.json";
import {
   insertZaposlenik,
   getZaposlenici,
} from "../../Services/zaposleniciService";

const useStyles = makeStyles((theme) => ({
   root: {
      margin: theme.spacing(1),
   },
}));

export default function InputForm(props) {
   const classes = useStyles();

   const INITIAL_FORM_STATE = {
      ime: "",
      prezime: "",
      danaGodisnjeg: "",
      danaSlobodno: "",
      danaPlacenogDopusta: "",
      spol: "",
      odjel: "",
      tipUgovora: "",
      datumRodenja: "",
      datumZaposlenja: "",
      datumKrajaUgovora: "",
      slika: "",
   };

   const stringError = "Potreban unos";
   const numberError = "Molimo vas unesite broj";
   const FORM_VALIDATION = Yup.object().shape({
      ime: Yup.string().required(stringError),
      prezime: Yup.string().required(stringError),
      danaGodisnjeg: Yup.number().integer().typeError(numberError),
      danaSlobodno: Yup.number().integer().typeError(numberError),
      danaPlacenogDopusta: Yup.number().integer().typeError(numberError),
      spol: Yup.string().required(stringError),
      odjel: Yup.string().required(stringError),
      tipUgovora: Yup.string().required(stringError),
      datumRodenja: Yup.date().required(stringError),
      datumZaposlenja: Yup.date().required(stringError),
      datumKrajaUgovora: Yup.date().required(stringError),
   });

   const handleCloseDialog = () => {
      //setOpen(false);
      props.setOpenPopup(false);
   };

   return (
      <Dialog
         open={props.openPopup}
         onClose={handleCloseDialog}
         aria-labelledby="form-dialog-title"
      >
         <DialogTitle id="form-dialog-title">Novi Zaposlenik</DialogTitle>

         <DialogContent>
            <Grid container>
               <Grid item xs={12}>
                  <Container>
                     <div className={classes.formWrapper}>
                        <Formik
                           initialValues={{
                              ...INITIAL_FORM_STATE,
                           }}
                           validationSchema={FORM_VALIDATION}
                           onSubmit={(values) => {
                              console.log(values);
                              insertZaposlenik(values);
                              handleCloseDialog();
                              props.setZaposlenici(getZaposlenici);
                           }}
                        >
                           <Form id="my-form">
                              <Grid container spacing={2}>
                                 <Grid item xs={6}>
                                    <Textfield name="ime" label="Ime" />
                                 </Grid>

                                 <Grid item xs={6}>
                                    <Textfield name="prezime" label="Prezime" />
                                 </Grid>

                                 <Grid item xs={12}>
                                    <Typography>Slika</Typography>

                                    <input
                                       name="slika"
                                       accept="image/*"
                                       style={{ display: "none" }}
                                       id="raised-button-file"
                                       single
                                       type="file"
                                    />
                                    <label htmlFor="raised-button-file">
                                       <Button
                                          fullWidth="true"
                                          variant="outlined"
                                          color="primary"
                                          component="span"
                                          size="large"
                                       >
                                          Upload
                                       </Button>
                                    </label>
                                 </Grid>

                                 <Grid item xs={6}>
                                    <Select
                                       name="spol"
                                       label="Spol"
                                       options={spolovi}
                                    />
                                 </Grid>
                                 <Grid item xs={6}>
                                    <Select
                                       name="tipUgovora"
                                       label="Tip ugovora"
                                       options={tipoviUgovora}
                                    />
                                 </Grid>

                                 <Grid item xs={12}>
                                    <Select
                                       name="odjel"
                                       label="Odjel"
                                       options={odjeli}
                                    />
                                 </Grid>

                                 <Grid item xs={12}>
                                    <Typography>Zaposlenje</Typography>
                                 </Grid>

                                 <Grid item xs={4}>
                                    <DateTimePicker
                                       name="datumRodenja"
                                       label="Datum Rođenja"
                                    />
                                 </Grid>

                                 <Grid item xs={4}>
                                    <DateTimePicker
                                       name="datumZaposlenja"
                                       label="Datum Zaposlenja"
                                    />
                                 </Grid>

                                 <Grid item xs={4}>
                                    <DateTimePicker
                                       name="datumKrajaUgovora"
                                       label="Trajanje Ugovora"
                                    />
                                 </Grid>

                                 <Grid item xs={4}>
                                    <Textfield
                                       name="danaGodisnjeg"
                                       label="Dana godišnjeg odmora"
                                    />
                                 </Grid>

                                 <Grid item xs={4}>
                                    <Textfield
                                       name="danaSlobodno"
                                       label="Slobodnih dana"
                                    />
                                 </Grid>

                                 <Grid item xs={4}>
                                    <Textfield
                                       name="danaPlacenogDopusta"
                                       label="Dana plaćenog dopusta"
                                    />
                                 </Grid>

                                 {/* <Grid item xs={12}>
                                       <SubmitButton>Dodaj</SubmitButton>
                                    </Grid> */}
                              </Grid>
                           </Form>
                        </Formik>
                     </div>
                  </Container>
               </Grid>
            </Grid>
         </DialogContent>
         <DialogActions>
            <Button
               onClick={handleCloseDialog}
               color="secondary"
               variant="outlined"
            >
               Odustani
            </Button>

            <Button
               form="my-form"
               type="submit"
               color="primary"
               variant="contained"
            >
               Dodaj
            </Button>
         </DialogActions>
      </Dialog>
   );
}
