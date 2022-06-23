import NextCors from "nextjs-cors";
import { getRandomColor, getGradient } from "../../lib";

export default async function handler(req, res) {
  const {
    query: { direction, intensity },
  } = req;

  await NextCors(req, res, {
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const firstColor = getRandomColor();
  const secondColor = getRandomColor(firstColor);

  res.end(getGradient(firstColor, secondColor, intensity, direction));
}
