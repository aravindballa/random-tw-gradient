import { getRandomColor, getGradient } from "../../lib";

export default function handler(req, res) {
  const {
    query: { direction, intensity },
  } = req;

  const firstColor = getRandomColor();
  const secondColor = getRandomColor(firstColor);

  res.end(getGradient(firstColor, secondColor, intensity, direction));
}
