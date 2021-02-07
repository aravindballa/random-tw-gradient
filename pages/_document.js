import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="dark">
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌈</text></svg>"
          />
          <meta
            name="description"
            content="Generate gradients using colors from Tailwind CSS"
          />
          <meta
            name="keywords"
            content="tailwind, tailwindcss, gradients, tailwind gradients, tailwindcss gradients, gradient generator, css generator, css gradient, css gradient generator"
          />
          <meta
            name="og:image"
            content="https://random-tailwind-gradient.vercel.app/cover.png"
          />
          <meta name="og:title" content="Random Tailwind Gradient 🌈" />
          <meta
            name="og:description"
            content="Generate gradients using colors from Tailwind CSS"
          />
          <meta
            name="og:url"
            content="https://random-tailwind-gradient.vercel.app/"
          />
          <script
            async
            defer
            data-domain="random-tailwind-gradient.vercel.app"
            src="https://plausible.io/js/plausible.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
