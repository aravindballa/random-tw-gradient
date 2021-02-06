import postcss from "postcss";
import tailwindcss from "tailwindcss";
import postcssCssVariables from "postcss-css-variables";

import { getRandomColor, getGradient } from "../../lib";

export default async function handler(req, res) {
  const {
    query: { direction, intensity, className = "random-gradient" },
  } = req;

  const firstColor = getRandomColor();
  const secondColor = getRandomColor(firstColor);

  const gradientString = getGradient(
    firstColor,
    secondColor,
    intensity,
    direction
  );

  const { css } = await postcss([tailwindcss, postcssCssVariables]).process(`
    .${className} {
      @apply ${gradientString};
    }
  `);

  res.end(css);
}
