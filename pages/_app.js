import "../styles/globals.css";
import Layout from "../components/layout";
import { Amplify, API, graphqlOperation } from "aws-amplify";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
