import { rest } from "msw";
export const handlers = [
  rest.get("https://rickandmortyapi.com/api/character/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ name: "rick" }));
  }),
];

//el que ens ha de tornar la api, un objecte o llista de caracters, etc...)
//manejar las peticiones de la api

// si a jest senvia una peticio get i amb la rl enviada, ho pilla jest
