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
          <title>Random Tailwind Gradient 🌈</title>
          <meta
            name="description"
            content="Generate gradients using colors from Tailwind CSS"
          />
          <meta
            name="og:image"
            content="https://random-tailwind-gradient.vercel.app/cover.png"
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
