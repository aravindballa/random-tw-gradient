import colors from "tailwindcss/colors";
// import plugin from "tailwindcss/lib/plugins/gradientColorStops";

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const isNotAllowed = (color) => {
  if (!color.match(/^[a-z]+$/)) return true;
  const unallowed = [
    "black",
    "white",
    "rose",
    "lime",
    "violet",
    "emerald",
    "fuchsia",
    "orange",
    "cyan",
    "amber",
    "teal",
  ];
  if (unallowed.includes(color)) return true;

  return false;
};

const getRandomColor = () => {
  const allColors = Object.keys(colors);
  const color = getRandomItem(allColors);
  return isNotAllowed(color) ? getRandomColor() : color;
};

const getRandomGradient = () => {
  return `bg-gradient-to-br from-${getRandomColor()}-300 to-${getRandomColor()}-300`;
};

export default function IndexPage() {
  const [randomGradient, setRandomGradient] = React.useState("bg-gray-300");
  const [css, setCSS] = React.useState("");
  const gradientCardRef = React.useRef();

  const handleRandomise = () => {
    setRandomGradient(getRandomGradient());
  };

  // load the colors after the component mounts
  React.useEffect(handleRandomise, []);

  React.useEffect(() => {
    if (gradientCardRef && gradientCardRef.current) {
      setCSS(getComputedStyle(gradientCardRef.current).background);
    }
  }, [randomGradient]);

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="px-8 w-full" style={{ maxWidth: "80ch" }}>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Random Tailwind Gradient 🎨
        </h1>
        <div className="md:grid grid-cols-2">
          <div>
            <button
              className="py-2 px-6 bg-purple-400 text-purple-900 rounded shadow-md focus:outline-none hover:bg-purple-300 focus:border-purple-300 border border-transparent select-none"
              onClick={handleRandomise}
            >
              Randomize{" "}
              <svg
                className="h-4 inline-block ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="arcs"
              >
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
              </svg>
            </button>
          </div>
          <div>
            <div
              ref={gradientCardRef}
              className={`${randomGradient} h-64 w-full rounded-lg shadow-lg`}
            ></div>
            <div className="mt-4 text-gray-100">
              <div className="text-xs font-bold uppercase text-gray-500">
                Tailwind Classes
              </div>
              <code className="text-sm">{randomGradient}</code>
            </div>
            <div className="mt-4 text-gray-100">
              <div className="text-xs font-bold uppercase text-gray-500">
                CSS
              </div>
              <code className="text-sm">{css}</code>
            </div>
          </div>
        </div>
        <div className="mt-16 text-gray-400 text-center">
          Made with ❤️ by{" "}
          <a href="https://twitter.com/aravindballa">Aravind Balla</a>
        </div>
        <div className="text-gray-500 text-center text-sm">
          Powered by{" "}
          <a href="https://vercel.com">
            <svg
              viewBox="0 0 283 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              className="inline-block h-3"
            >
              <path
                d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
