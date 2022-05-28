import Head from "next/head";
import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Container from "../components/container";
import { useEffect, useState } from "react";

export default function Home() {
  const [detail, setDetail] = useState([]);
  const [jadwal, setJadwal] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://mycorsproxy-tuto.herokuapp.com/https://www.showroom-live.com/api/room/profile?room_id=318208"
      )
      .then((res) => {
        const details = res.data;
        setDetail(details);
      })
      .catch((error) => console.log(error));

    axios
      .get(
        "https://mycorsproxy-tuto.herokuapp.com/https://www.showroom-live.com/api/room/next_live?room_id=318208"
      )
      .then((res) => {
        const jadwals = res.data;
        setJadwal(jadwals);
      })
      .catch((error) => console.log(error));
  });

  return (
    <Container>
      <Head>
        <title>Shania Gracia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="SG" />
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
                <div>{detail.room_name}</div>
                <div className="md:px-8 text-purple-800 text-left text-4xl md:text-7xl font-bold">
                  Shania Gracia
                </div>
              </div>
              <div className="justify-self-end">
                <div className="absolute blur-2xl items-center">
                  <Image src="assets/headers.webp" width="450" height="450" />
                </div>
                <Image src="assets/headers.webp" width="450" height="450" />
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
              <a
                href="/about"
                className="px-5 py-2 bg-purple-700 hover:bg-purple-500 text-white text-sm font-bold tracking-wide rounded-full focus:outline-none"
              >
                Gracia Profile
              </a>
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
      </section>
      <section className="pt-8 px-8 md:px-16">
        <div className="bg-purple-100 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="row-span-full md:row-span-3">
              <img className="h-full w-full rounded-lg" src={detail.image} />
            </div>
            <div className="col-span-1 md:col-span-2 p-6">
              <div className="md:pl-12">
                <span className="text-xl md:text-3xl font-bold">{detail.room_name}</span>
                <br />
                <span className="pt-2 font-semibold text-gray-400 tracking-wide">
                  {detail.follower_num} Followers
                </span>
                <br />
                <span className="pt-2">
                  Room Level: <span className="text-gray-400">{detail.room_level}</span>
                </span>
                <br />
                <div className="pt-4"></div>
                <button
                  href={detail.share_url_live}
                  className="px-2 py-3 bg-purple-700 rounded-lg text-white"
                >
                  Buka Showroom
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6"></div>
      </section>
    </Container>
  );
}
