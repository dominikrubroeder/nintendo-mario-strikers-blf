import { NextPage } from "next";
import BuyConfiguration from "../../components/BuyConfiguration";
import Image from "next/image";
import Layout from "../../components/layout";

const BuyPage: NextPage = () => {
  return (
    <Layout pageTitle="Buy" withFooter={false}>
      <BuyConfiguration />

      <section className="mt-12">
        <div className="p-4">
          <Image
            src="/images/gallery/2x1_NSwitch_MarioStrikersBattleLeagueFootball_image1600w.jpeg"
            alt="Mario Strikers Battle League Football"
            layout="responsive"
            width={1000}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </section>
    </Layout>
  );
};

export default BuyPage;
