//

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
let counter = 1;

async function fetchPokemon(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error(`Fetching failed for id: ${id}`);

    const data = await res.json();

    return { id: data.id, name: data.name };
  } catch (error) {
    console.log(error);
    return { id: null, name: null };
  }
}

const intervalID = setInterval(async () => {
  const { id, name } = await fetchPokemon(counter);
  console.log({ id, name });
  counter++;
  if (counter >= 15) clearInterval(intervalID);
}, 1000);

// let counter = 1;
// const interval = setInterval(async () => {
//   try {
//     const fetchResp = await fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
//     const object = await fetchResp.json();
//     const id = object.id;
//     let name = "";
//     console.log(object);
//     const formsPropArray = object["forms"];
//     formsPropArray.map((elem) => {
//       if (elem.name != undefined) {
//         name = elem.name;
//       }
//     });

//     console.log(`id: ${id}, name: ${name}`);
//     counter === 150 ? clearInterval(interval) : counter++;
//   } catch (err) {
//     console.log("err: ", err);
//   }
// }, 1000);
