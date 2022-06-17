import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="bg-my min-h-screen flex items-center justify-center px-4 bg-p">
      <Head>
        <title>404 Page Not Found</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Halaman yang kamu cari gak ada kack." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center">
        <Image src="assets/404.webp" width="250" height="250" alt="Shania Gracia Cemberut" />
        <h1 className="font-poppins font-bold text-4xl stroke-1 text-gray-800">Maaf Kack</h1>
        <p className="font-poppins text-black">Halaman yang kamu tuju gak ada nich..</p>
        <br />
        <Link href="/">
          <a className="bg-purple-700 px-4 py-3 rounded-full text-white">Putar Balik</a>
        </Link>
      </div>
    </div>
  );
}
