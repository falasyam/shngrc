import { useState } from "react";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1 ? "text-white bg-purple-700" : "text-gray-700 bg-purple-300")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                2014
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2 ? "text-white bg-purple-700" : "text-gray-700 bg-purple-300")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                2015
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3 ? "text-white bg-purple-700" : "text-gray-700 bg-purple-300")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                2016
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4 ? "text-white bg-purple-700" : "text-gray-700 bg-purple-300")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                2017
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5 ? "text-white bg-purple-700" : "text-gray-700 bg-purple-300")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                2018
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 6 ? "text-white bg-purple-700" : "text-gray-700 bg-purple-300")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                2019
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 7 ? "text-white bg-purple-700" : "text-gray-700 bg-purple-300")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(7);
                }}
                data-toggle="tab"
                href="#link7"
                role="tablist"
              >
                2020
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 8 ? "text-white bg-purple-700" : "text-gray-700 bg-purple-300")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(8);
                }}
                data-toggle="tab"
                href="#link8"
                role="tablist"
              >
                2021
              </a>
            </li>
            <li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 9 ? "text-white bg-purple-700" : "text-gray-700 bg-purple-300")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(9);
                }}
                data-toggle="tab"
                href="#link9"
                role="tablist"
              >
                2022
              </a>
            </li>
          </ul>
          <div className="flex flex-col min-w-0 break-words bg-gray-100 w-full mb-6 drop-shadow-xl shadow-purple-500/70 rounded">
            <div className="px-4 py-4 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div>
                    <div className="pb-4">
                      <h2 className="px-4 font-bold text-lg md:text-xl">15 Maret</h2>
                      <p className="px-6 font-medium pb-0.5">
                        Terpilih sebagai member JKT48 Gen 3
                      </p>
                      <p className="px-11 text-sm md:text-sm text-gray-500">
                        Sebanyak 32 member generasi 3 JKT48 diperkenalkan untuk pertama kalinya
                        ke publik, salah satunya Gracia.
                      </p>
                      <div className="border border-gray-200 w-full my-4" />
                    </div>
                    <div className="pb-4">
                      <h2 className="px-4 font-bold text-lg md:text-xl">24 Mei</h2>
                      <p className="px-6 font-medium pb-0.5">Shonichi Theater</p>
                      <p className="px-11 text-sm md:text-sm text-gray-500">
                        Shonichi teater generasi 3. Setlist yang dibawakan yaitu Pajama Drive.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div>
                    <div className="pb-4">
                      <h2 className="px-4 font-bold text-lg md:text-xl">24 Januari</h2>
                      <p className="px-6 font-medium pb-0.5">Dipromosikan ke Tim T</p>
                      <p className="px-11 text-sm md:text-sm text-gray-500">
                        Gracia bersama 15 generasi 3 lain terpilih sebagai member Tim T JKT48.
                      </p>
                      <div className="border border-gray-200 w-full my-4" />
                    </div>
                    <div className="pb-4">
                      <h2 className="px-4 font-bold text-lg md:text-xl">18 Desember</h2>
                      <p className="px-6 font-medium pb-0.5">Single Ke-12 JKT48</p>
                      <p className="px-11 text-sm md:text-sm text-gray-500">
                        Masuk undergirls single ke-12 JKT48. Bahkan Gracia menjadi center.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div>
                    <div className="pb-4">
                      <h2 className="px-4 font-bold text-lg md:text-xl">27 Februari</h2>
                      <p className="px-6 font-medium pb-0.5">SSK Single 13</p>
                      <p className="px-11 text-sm md:text-sm text-gray-500">
                        Gracia meraih peringkat 11
                      </p>
                      <div className="border border-gray-200 w-full my-4" />
                    </div>
                    <div className="pb-4">
                      <h2 className="px-4 font-bold text-lg md:text-xl">11 September</h2>
                      <p className="px-6 font-medium pb-0.5">Grand Shuffle Team</p>
                      <p className="px-11 text-sm md:text-sm text-gray-500">
                        Gracia pindah ke Tim KIII
                      </p>
                    </div>
                  </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <div>
                    <div className="pb-4">
                      <h2 className="px-4 font-bold text-lg md:text-xl">22 April</h2>
                      <p className="px-6 font-medium pb-0.5">SSK Single 17</p>
                      <p className="px-11 text-sm md:text-sm text-gray-500">
                        Gracia meraih peringkat 4
                      </p>
                    </div>
                  </div>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <div>
                    <div className="pb-4">
                      <h2 className="px-4 font-bold text-lg md:text-xl">17 November</h2>
                      <p className="px-6 font-medium pb-0.5">SSK Single 20</p>
                      <p className="px-11 text-sm md:text-sm text-gray-500">
                        Gracia meraih peringkat 8
                      </p>
                    </div>
                  </div>
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                  <div>
                    <div className="pb-4">
                      <h2 className="px-4 font-bold text-lg md:text-xl">30 November</h2>
                      <p className="px-6 font-medium pb-0.5">SSK Single Original</p>
                      <p className="px-11 text-sm md:text-sm text-gray-500">
                        Gracia meraih peringkat 10
                      </p>
                    </div>
                  </div>
                </div>
                <div className={openTab === 7 ? "block" : "hidden"} id="link7">
                  <div>
                    <div className="pb-4">
                      <h2 className="px-4 font-bold text-lg md:text-xl">6 Juni</h2>
                      <p className="px-6 font-medium pb-0.5">Pengumuman Kapten Tim KIII</p>
                      <p className="px-11 text-sm md:text-sm text-gray-500">
                        Gracia diumumkan menjadi kapten tim KIII
                      </p>
                    </div>
                  </div>
                </div>
                <div className={openTab === 8 ? "block" : "hidden"} id="link8">
                  <div>
                    <div className="pb-4">
                      <h2 className="px-4 font-bold text-lg md:text-xl">13 Maret</h2>
                      <p className="px-6 font-medium pb-0.5">Pembubaran Team</p>
                      <p className="px-11 text-sm md:text-sm text-gray-500">
                        JKT48 menghilangkan sistem tim.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={openTab === 9 ? "block" : "hidden"} id="link9">
                  <div>
                    <div className="pb-4">
                      <h2 className="px-4 font-bold text-lg md:text-xl">10 April</h2>
                      <p className="px-6 font-medium pb-0.5">Pengumuman Senbatsu</p>
                      <p className="px-11 text-sm md:text-sm text-gray-500">
                        Gracia masuk dalam jajaran senbatsu yang membawakan Single Original
                        JKT48 kedua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
