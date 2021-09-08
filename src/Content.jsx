import React, { useState } from "react";
import ZaposlenikCard from "./Components/ZaposlenikCard/ZaposlenikCard";
import ControlCard from "./Components/ControlCard/ContolCard";
import { List, Paper } from "@material-ui/core";

import * as zaposleniciService from "./Services/zaposleniciService";

// let Zaposlenici = JSON.parse(JSON.stringify(zaposlenici.zaposlenici));
// Zaposlenici.map((zaposlenik) =>
//       zaposleniciService.insertZaposlenik(zaposlenik)
//    );

function Content() {
   const [Zaposlenici, setZaposlenici] = useState(
      zaposleniciService.getZaposlenici()
   );

   let filteredZaposlenici = [];
   function searchHandler(searchQuery) {
      console.log(searchQuery);

      Zaposlenici.map((zaposlenik) => {
         let imePrezime = (
            zaposlenik.ime +
            " " +
            zaposlenik.prezime
         ).toUpperCase();
         if (imePrezime.includes(searchQuery.toUpperCase())) {
            filteredZaposlenici.push(zaposlenik);
         }
      });
      setZaposlenici(filteredZaposlenici);
      if (searchQuery === "") {
         setZaposlenici(zaposleniciService.getZaposlenici());
      }
   }

   return (
      <div>
         <ControlCard
            setZaposlenici={setZaposlenici}
            searchHandler={searchHandler}
         />
         <Paper
            style={{
               maxHeight: 800,
               maxWidth: "auto",
               overflow: "auto",
               backgroundColor: "#eeeeee",
            }}
         >
            <List style={{ padding: "15px" }}>
               {Zaposlenici.map((zaposlenik) => (
                  <ZaposlenikCard
                     Zaposlenik={zaposlenik}
                     setZaposlenici={setZaposlenici}
                  />
               ))}
            </List>
         </Paper>
      </div>
   );
}

export default Content;
