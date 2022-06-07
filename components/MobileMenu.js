import cn from "classnames";
import Link from "next/link";
import useDelayedRender from "use-delayed-render";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(isMenuOpen, {
    enterDelay: 20,
    exitDelay: 150,
  });

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanUp() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, "visible md:hidden")}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <XIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <div className="flex flex-col max-h-screen max-w-screen">
          <ul
            className={cn(
              styles.menu,
              "flex flex-col absolute backdrop-blur-lg bg-my-op",
              isMenuRendered && styles.menuRendered
            )}
          >
            <li
              className="border-b border-gray-300 text-purple-700 text-sm font-semibold"
              style={{ transitionDelay: "150ms" }}
            >
              <Link href="/">
                <a className="flex w-auto pb-4">Home</a>
              </Link>
            </li>
            <li
              className="border-b border-gray-300 text-purple-700 text-sm font-semibold"
              style={{ transitionDelay: "150ms" }}
            >
              <Link href="/about">
                <a className="flex w-auto pb-4">About</a>
              </Link>
            </li>
            <li
              className="border-b border-gray-300 text-purple-700 text-sm font-semibold"
              style={{ transitionDelay: "150ms" }}
            >
              <Link href="https://fanbase.shaniagracia.my.id">
                <a className="flex w-auto pb-4">Fanbase</a>
              </Link>
            </li>
            <li
              className="border-b border-gray-300 text-purple-700 text-sm font-semibold"
              style={{ transitionDelay: "150ms" }}
            >
              <Link href="https://play.shaniagracia.my.id">
                <a className="flex w-auto pb-4">Game</a>
              </Link>
            </li>

            <div className="bottom-0 text-center py-12">
              <div className="flex flex-col justify-center justify-items-center">
                <div className="text-center">
                  <div>
                    <a
                      className="ri-instagram-line py-2 px-2 text-purple-700"
                      href="https://instagram.com/jkt48gracia"
                    ></a>
                    <a
                      className="ri-twitter-line py-2 px-2 text-purple-700"
                      href="https://twitter.com/s_graciajkt48"
                    ></a>
                    <a
                      className="ri-music-line py-2 px-2 text-purple-700"
                      href="https://tiktok.com/@graciajkt48"
                    ></a>
                    <a
                      className="ri-youtube-line py-2 px-2 text-purple-700"
                      href="https://youtube.com/GreShanTV"
                    ></a>
                  </div>
                </div>
              </div>
              <div className="py-4">
                <button className="px-5 py-2 bg-purple-700 hover:bg-pc text-white text-sm font-bold tracking-wide rounded-full focus:outline-none">
                  Donate
                </button>
              </div>
            </div>
          </ul>
        </div>
      )}
    </>
  );
}

function MenuIcon(props) {
  return (
    <svg
      className="h-5 w-5 text-purple-700"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 17.5H13.5"
        stroke="currentColor"
        width="4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      className="h-5 w-5 text-purple-700"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
