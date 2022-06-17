import Container from "../../components/Container";
import Head from "next/head";

import { useEffect } from "react";

import Script from "next/script";

export default function Fanbase() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Container>
      <Head>
        <title>Fanbase - Shania Gracia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Gracias pertama kali di bentuk 27 Februari 2014. Gracias diambil dari bahasa Spanyol yang berarti Terima Kasih"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="px-8">
          <div className="flex justify-between bg-red-700 text-white rounded px-4 py-4">
            <div>
              <span className="text-xl inline-block mr-5 align-middle">
                <i className="ri-notification-2-line"></i>
              </span>
              <span className="inline-block text-sm md:text-base align-middle mr-8">
                <b className="capitalize">Check!</b> Old Page Fanbase.
              </span>
            </div>
            <div>
              <span className="text-xl inline-block mr-5 align-middle">
                <a className="" href="https://fanbase.shaniagracia.my.id">
                  <i className="ri-arrow-right-line"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="py-4"></div>
      <section className="px-8">
        <div className="grid grid-cols md:grid-cols-2 justify-items-center items-center content-center">
          <div>
            <img
              src="https://ik.imagekit.io/shngrc/logo.webp"
              width="450"
              height="450"
              alt="Logo Gracias"
            />
          </div>
          <div className="justify-self-center">
            <div className="font-bold text-center text-xl md:text-left md:text-2xl mb-4">
              Gracias
            </div>
            <div className="font-medium text-base md:text-base">
              Gracias pertama kali di bentuk 27 Februari 2014. Gracias diambil dari bahasa
              Spanyol yang berarti &ldquo;Terima Kasih&rdquo;. Gracias adalah wadah untuk para
              fans Gracia yang ingin memberikan support untuk Gracia, sebagai bentuk terima
              kasih karena Gracia selalu menginspirasi kita semua. Selain itu Gracias bisa juga
              diartikan sebagai Gracia&apos;s, yang artinya kami adalah milik Gracia, yang akan
              selalu menemani di setiap langkah Gracia dalam mencapai mimpi-mimpinya.
            </div>
          </div>
        </div>
      </section>
      <div className="py-4"></div>
      <section className="px-8">
        <div className="flex justify-center rounded px-2 md:px-4 py-4">
          <div>
            <span className="inline-block text-sm text-center font-medium md:text-base align-middle mr-6">
              Kuy gabung dengan grup chat Gracias. <br />
              Saling berbagi info dan ide, serta bekerja sama untuk memajukan Shania Gracia.
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <span className="text-sm md:text-xl inline-block mr-5 align-middle">
              <a
                className="font-bold bg-purple-400 px-6 py-2 rounded-full"
                href="https://docs.google.com/forms/d/1BF-bxkR7xkbH2M5rEKvbPOX0rlQ2-PSyyoFM3fGj5X4/viewform"
              >
                JOIN US
              </a>
            </span>
          </div>
        </div>
      </section>
      <div className="py-8"></div>
      <section className="px-8">
        <div className="flex justify-center text-center">
          <a
            className="twitter-timeline font-bold"
            href="https://twitter.com/GraciasFans_INA?ref_src=twsrc%5Etfw"
            data-width="600"
            data-height="500"
            data-chrome="noheader nofooter noborders transparent"
          >
            Tweets by GraciasFans_INA, reload if Tweet not show.
          </a>
        </div>
      </section>
      <div className="py-4"></div>
    </Container>
  );
}
