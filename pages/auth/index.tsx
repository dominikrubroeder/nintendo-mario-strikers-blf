import { NextPage } from "next";
import Head from "next/head";
import ThePasswordProtection from "../../components/ThePasswordProtection";

const Auth: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mario Strikers: Battle League Football | Nintendo</title>
      </Head>

      <ThePasswordProtection />
    </div>
  );
};

export default Auth;
