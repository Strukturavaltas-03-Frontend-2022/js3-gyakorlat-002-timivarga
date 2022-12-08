/*
Készíts egy `cookieHandler` nevű objectet, az alábbi három metódust megvalósítja:
- `getAll`: kiolvassa a sütik nevét és értékét, majd visszaadja őket egy objektumban,
 ahol a sütik neve a key és az értéke a value (pl. { viewed: 5 })
- `toSessionStorage`: minden sütit egyenként elment a sessionStorage-ba az adott
 süti nevével és értékével
- `flush`: törli az összes sütit
A teszteléshez hozd létre a böngésződben az alábbi sütiket:
- `viewed`: 5
- `uid`: 354774631237
- `ssid`: Bx55OWbHJ0Vt_IGIF
*/

const cookieHandler = {
    getAll() {
      let obj = {};
      /*
      document.cookie = `viewed = 5`;
      document.cookie = `uid = 354774631237`;
      document.cookie = `ssid = Bx55OWbHJ0Vt_IGIF`;
  */
      let keyValuePairs = document.cookie.split("; ");
      keyValuePairs.forEach((item) => {
        let arr = [];
        arr = item.split("=");
  
        obj = { ...obj, [arr[0]]: arr[1] };
      });
      return obj;
    },
    toSessionStorage() {
      for (const key in this.getAll()) {
        if (Object.hasOwnProperty.call(this.getAll(), key)) {
          const value = this.getAll()[key];
          sessionStorage.setItem(key, value);
        }
      }
    },
    flush() {
      for (const key in this.getAll()) {
        if (Object.hasOwnProperty.call(this.getAll(), key)) {
          //const value = this.getAll()[key];
          document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }
      }
    },
  };
  
  export default cookieHandler;