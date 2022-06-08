import Container from "../../components/Container";
import Head from "next/head";

export default function fanbase() {
  return (
    <Container>
      <Head>
        <title>Fanbase - Shania Gracia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Shania Gracia yang kerap dipanggil Gracia/Gre/Gege adalah member JKT48. Shania
              Gracia lahir pada tanggal 31 Agustus 1999 dan merupakan anak pertama dari tiga
              bersaudara."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="px-8">
          <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-700">
            <span className="text-xl inline-block mr-5 align-middle">
              <i className="ri-notification-2-line"></i>
            </span>
            <span className="inline-block align-middle mr-8">
              <b className="capitalize">Check it out!</b> Old Page Fanbase.
            </span>
            <a
              className="absolute bg-transparent right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
              href="https://fanbase.shaniagracia.my.id"
            >
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
}
