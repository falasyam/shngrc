import Head from "next/head";

import Container from "../../components/Container";
import Tabs from "../../components/TabsTimeline";

export default function About() {
  return (
    <Container>
      <Head>
        <title>About - Shania Gracia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Shania Gracia yang kerap dipanggil Gracia/Gre/Gege adalah member JKT48. Shania
              Gracia lahir pada tanggal 31 Agustus 1999 dan merupakan anak pertama dari tiga
              bersaudara."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="">
        <div className="px-8 flex flex-col justify-end py-8 md:py-16">
          <span className="md:px-8 font-bold text-left text-2xl md:text-6xl text-purple-700 tracking-wide">
            “Senyumku terekam jelas dalam ingatanmu seperti foto dengan sejuta warna. Namaku
            Gracia. Always Smile.”
          </span>
        </div>
      </section>
      <div className="py-6"></div>
      <section>
        <div className="container px-6 mx-auto">
          <div className="">
            <div className="flex flex-wrap">
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-4 lg:mb-0">
                <div className="flex lg:py-12">
                  <img
                    src="/assets/Gree.webp"
                    className="w-full rounded-lg shadow-lg"
                    id="cta-img-nml-50"
                    style={{ zIndex: "10" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                <div className="bg-purple-900 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
                  <div className="lg:pl-12">
                    <div className="text-3xl font-bold mb-6">Shania Gracia</div>
                    <p className="mb-6 pb-2 lg:pb-0">
                      Shania Gracia yang kerap dipanggil Gracia/Gre/Gege adalah member
                      sekaligus kapten JKT48 Tim KIII. Shania Gracia lahir pada tanggal 31
                      Agustus 1999 dan merupakan anak pertama dari tiga bersaudara. Gracia
                      terpilih Gen 3 JKT48 pada 15 Maret 2014. Dan pada 24 Januari 2015, Gracia
                      dipromosikan ke Tim T bersama Gen 3 lainnya. Gre adalah pecinta warna
                      ungu garis keras. Bahkan mempunyai impian kalau punya rumah sendiri,
                      perabotannya mau serba ungu. Selain suka warna ungu, Gracia juga suka
                      fotografi.
                    </p>

                    <div className="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto">
                      <a
                        href="https://instagram.com/jkt48gracia"
                        className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-10"
                      >
                        <InstaIcon /> <span className="pr-2"> Instagram</span>
                      </a>
                      <a
                        href="https://twitter.com/s_graciajkt48"
                        className="flex items-center hover:bg-purple-800 mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-10"
                      >
                        <TwitterIcon /> <span className="pr-2"> Twitter</span>
                      </a>
                      <a
                        href="https://tiktok.com/@graciajkt48"
                        className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-10"
                      >
                        <TiktokIcon /> <span className="pr-2"> Tiktok</span>
                      </a>
                      <a
                        href="https://tiktok.com/@graciajkt48"
                        className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-10"
                      >
                        <YTIcon /> <span className="pr-2"> YouTube</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-6"></div>
      <section className="px-8">
        <div className="flex flex-row justify-center">
          <span className="font-bold border-b-2 border-purple-700">Video Profile</span>
        </div>
        <div className="pb-4"></div>
        <div className="flex flex-row justify-center">
          <iframe
            width="720"
            height="360"
            src="https://www.youtube.com/embed/AYFure5ZZA4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <div className="py-4"></div>
      <section className="px-8">
        <div className="flex flex-row justify-center">
          <span className="font-bold border-b-2 border-purple-700">Timeline</span>
        </div>
        <div className="pb-4"></div>
        <div className="flex justify-center">
          <Tabs />
        </div>
      </section>
      <div className="py-4"></div>
      <section className="px-8">
        <div className="flex flex-row justify-center">
          <span className="font-bold border-b-2 border-purple-700">Twitter Timeline</span>
        </div>
        <div className="pb-4"></div>
        <div className="flex justify-center  text-center">
          <a
            className="twitter-timeline"
            href="https://twitter.com/S_GraciaJKT48?ref_src=twsrc%5Etfw"
            data-width="600"
            data-height="600"
            data-chrome="noheader nofooter noborders transparent"
          >
            Tweets by S_GraciaJKT48
          </a>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
      </section>
      <div className="py-4"></div>
    </Container>
  );
}

function InstaIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 28 28" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"
      />
    </svg>
  );
}

function YTIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M19.606 6.995c-.076-.298-.292-.523-.539-.592C18.63 6.28 16.5 6 12 6s-6.628.28-7.069.403c-.244.068-.46.293-.537.592C4.285 7.419 4 9.196 4 12s.285 4.58.394 5.006c.076.297.292.522.538.59C5.372 17.72 7.5 18 12 18s6.629-.28 7.069-.403c.244-.068.46-.293.537-.592C19.715 16.581 20 14.8 20 12s-.285-4.58-.394-5.005zm1.937-.497C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5v-7l6 3.5-6 3.5z"
        fill="rgba(255,255,255,1)"
      />
    </svg>
  );
}
