import Head from "next/head";
import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Container from "../components/Container";

export default function Home({ jadwals, performs, showroom }) {
  return (
    <Container>
      <Head>
        <title>Shania Gracia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Shania Gracia yang kerap dipanggil Gracia/Gre/Gege adalah member JKT48. Shania
              Gracia lahir pada tanggal 31 Agustus 1999 dan merupakan anak pertama dari tiga
              bersaudara."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*<section className="px-8 py-8">
        <div className="flex flex-col justify-around w-full bg-cover bg-center rounded-lg md:h-setengah h-96 mx-auto overflow-hidden">
          <div>
            <div>
              <img src="/assets/GreCover.webp" className="block h-96 w-full" />
            </div>
          </div>
        </div>
  </section>*/}

      <section>
        <div className="container">
          <div className="flex flex-col-reverse mx-auto px-8 w-full py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center items-center content-center">
              <div className="justify-self-start">
                <div className="md:px-8 text-purple-900 text-2xl md:text-5xl">
                  Hello! I&rsquo;m
                </div>
                <div className="md:px-8 text-purple-800 text-left text-4xl md:text-7xl font-bold">
                  Shania Gracia
                </div>
              </div>
              <div className="justify-self-end">
                <div className="absolute blur-2xl items-center">
                  <Image src="assets/headers.webp" width="450" height="450" alt="blur" />
                </div>
                <Image src="assets/headers.webp" width="450" height="450" alt="Header Photo" />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-12"></div>
      </section>

      <section className="px-8">
        <div className="flex flex-col justify-around w-full rounded-lg h-setengah mx-auto grecover overflow-hidden">
          <div className="">
            <div className="flex flex-col">
              <div className="absolute bottom-24 md:text-xl text-sm text-white py-4 p-2 md:p-12">
                <div className="text-left font-semibold hidden">
                  Senyumku terekam jelas dalam ingatanmu seperti foto dengan sejuta warna.
                  Namaku Gracia. Always Smile.
                </div>
                <div className="font-bold hidden">Sekali lagi, Gracia!</div>
                <div className="pb-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4"></div>
      </section>
      <section className="flex flex-col mx-auto px-8 max-w-full py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center items-center content-center">
          <div>
            <Image
              className="rounded-full"
              src="/assets/SG.webp"
              alt="Kabesha Shania Gracia"
              width="252"
              height="315"
            />
          </div>
          <div className="">
            <h1 className="text-center md:text-left text-2xl text-purple-700 font-bold uppercase pb-4">
              Shania Gracia
            </h1>
            <div className="text-justify md:text-left">
              Shania Gracia yang kerap dipanggil Gracia/Gre/Gege adalah member JKT48. Shania
              Gracia lahir pada tanggal 31 Agustus 1999 dan merupakan anak pertama dari tiga
              bersaudara. Gracia terpilih Generasi 3 JKT48 pada 15 Maret 2014. Dan pada 24
              Januari 2015, Gracia dipromosikan ke Tim T bersama Generasi 3 lainnya.
            </div>
            <div className="pt-8 inline-flex">
              <NextLink href="/about">
                <a className="px-5 py-2 bg-purple-700 hover:bg-purple-500 text-white text-sm font-bold tracking-wide rounded-full focus:outline-none">
                  Gracia Profile
                </a>
              </NextLink>
              <div className="px-1"></div>
              <a
                href="https://jkt48.com/member/detail/id/113?lang=id"
                className="px-5 py-2 border border-red-700 bg-transparent hover:bg-red-700 text-red-700 hover:text-white text-sm font-bold tracking-wide rounded-full focus:outline-none"
              >
                JKT48.com
              </a>
            </div>
          </div>
        </div>
        <div className="py-6"></div>
      </section>
      <section
        className="w-full bg-purple-700 flex flex-col mx-auto px-8 max-w-full py-8 md:py-20 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url("/assets/perform.webp")` }}
      >
        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-items-center items-center text-center content-center">
            <div className="text-white backdrop-blur-lg rounded-full px-6 py-6">
              <div className="font-bold text-xl">{performs.show}</div>
              <div>Show</div>
            </div>
            <div className="text-white backdrop-blur-lg rounded-full px-6 py-6">
              <div className="font-bold text-xl">{performs.setlist}</div>
              <div>Setlist</div>
            </div>
            <div className="text-white backdrop-blur-lg rounded-full px-6 py-6">
              <div className="font-bold text-xl">{performs.singles}</div>
              <div>Singles</div>
            </div>
            <div className="text-white backdrop-blur-lg rounded-full px-6 py-6">
              <div className="font-bold text-xl">{performs.album}</div>
              <div>Album</div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-6"></div>
      <section className="pt-8 px-8 md:px-16">
        <div className="bg-purple-100 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="row-span-full md:row-span-3">
              <img
                className="h-full w-full rounded-lg"
                src={showroom.image}
                alt={showroom.room_name}
              />
            </div>
            <div className="col-span-1 md:col-span-2 p-6">
              <div className="md:pl-12">
                <span className="text-xl md:text-3xl font-bold">{showroom.room_name}</span>
                <br />
                <span className="pt-2 font-semibold text-gray-900 tracking-wide">
                  {showroom.follower_num} Pengikut
                </span>
                <br />
                <span className="pt-2">
                  Room Level: <span className="text-gray-800">{showroom.room_level}</span>
                </span>
                <br />
                <div className="pt-4"></div>
                <a
                  href={showroom.share_url_live}
                  className="px-2 py-3 bg-purple-700 rounded-lg text-white"
                >
                  Buka Showroom
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6"></div>
      </section>
      <section className="px-8">
        <div className="bg-white shadow-xl p-4 rounded-lg">
          <div className="font-bold text-lg py-2">Schedule</div>
          <div className="bg-my px-4 py-4 rounded-lg">
            <div className="p-2 md:p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {jadwals.map((jadwal) => (
                  <div
                    className="bg-purple-700 rounded-lg p-2 md:p-4 bg-cover bg-center"
                    style={{
                      backgroundImage: `url("https://jkt48.com/assets/theater/actual/1.jpg")`,
                    }}
                    key={jadwal.id}
                  >
                    <div className="">
                      <div className="grid grid-cols-3 text-gray-200 items-center px-2 py-2 md:px-4 md:py-4">
                        <div className="col-span-2 flex flex-row font-bold text-white text-lg">
                          <span className="px-2 py-1 backdrop-blur-sm rounded-full bg-red-600/60 filter-none">
                            {jadwal.event}
                          </span>
                        </div>
                        <div className="flex justify-end">
                          <a
                            className="text-white rounded-full hover:bg-gray-700 delay-50 duration-100 p-1"
                            href={jadwal.link}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path
                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                fill="rgba(255,255,255,1)"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="pb-6"></div>
                      <p className="text-white font-bold mx-5 text-base">{jadwal.setlist}</p>
                      <p className="text-white font-semibold mx-5 text-sm md:text-md">
                        <span className="">{jadwal.tanggal}</span>
                        {" - "}
                        <span className="">{jadwal.pukul}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-6"></div>
    </Container>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API

  //Jadwal JSON
  const res = await fetch(`http://shngrc.github.io/data/schedule.json`);
  const jadwals = await res.json();

  // Perform JSON
  const per = await fetch(`http://shngrc.github.io/data/perform.json`);
  const performs = await per.json();

  //Showroom API
  const show = await fetch(
    `https://nextjs-cors-anywhere.vercel.app/api?endpoint=https://www.showroom-live.com/api/room/profile?room_id=318208`
  );
  const showroom = await show.json();

  // Pass data to the page via props
  return {
    props: {
      jadwals,
      performs,
      showroom,
    },
  };
}
