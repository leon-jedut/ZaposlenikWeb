const KEYS = {
   zaposlenici: "zaposlenici",
   zaposlenikId: "zaposlenikId",
};

export function insertZaposlenik(data) {
   let zaposlenici = getZaposlenici();
   data["id"] = generateZaposlenikId();
   zaposlenici.push(data);
   localStorage.setItem(KEYS.zaposlenici, JSON.stringify(zaposlenici));
}

export function deleteZaposlenik(data) {
   const zaposlenikID = data["id"];
   let zaposlenici = getZaposlenici();
   for (let i = 0; i < zaposlenici.length; i++) {
      if (zaposlenici[i].id === zaposlenikID) {
         zaposlenici.splice(i, 1);
         break;
      }
   }
   localStorage.setItem(KEYS.zaposlenici, JSON.stringify(zaposlenici));
}

export function generateZaposlenikId() {
   if (localStorage.getItem(KEYS.zaposlenikId) == null)
      localStorage.setItem(KEYS.zaposlenikId, "0");
   var id = parseInt(localStorage.getItem(KEYS.zaposlenikId));
   localStorage.setItem(KEYS.zaposlenikId, (++id).toString());
   return id;
}

export function getZaposlenici() {
   if (localStorage.getItem(KEYS.zaposlenici) == null)
      localStorage.setItem(KEYS.zaposlenici, JSON.stringify([]));
   return JSON.parse(localStorage.getItem(KEYS.zaposlenici));
}
