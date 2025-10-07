"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

const links = [
  { name: "GitHub", url: "https://github.com/" },
  { name: "Frontend Mentor", url: "https://frontendmentor.io/" },
  { name: "LinkedIn", url: "https://linkedin.com/" },
  { name: "Twitter", url: "https://twitter.com/" },
  { name: "Instagram", url: "https://instagram.com/" },
];

export default function Home() {
  return (
    <>
      <main
        className={`${inter.className} w-screen min-h-screen bg-[#141414ff] flex justify-center items-center pt-[15vh] pb-[15vh]`}
      >
        <section className=" w-md h-full bg-[#1f1f1fff] rounded-2xl ">
          <div className="h-1/5 flex justify-center items-center mt-8 mb-4">
            <Image
              className="w-24 rounded-full"
              src="/images/avatar-jessica.jpeg"
              alt="Jessica Avatar"
              width={96}
              height={96}
            ></Image>
          </div>
          <div className="h-4/5 flex flex-col items-center">
            <div className="flex flex-col justify-center items-center pb-8">
              <h1 className="text-[#ffffffff] font-bold text-[24px]">
                Jessica Randall
              </h1>
              <h2 className="text-[#c5f82aff] text-[14px] font-semibold">
                London, United Kingdom
              </h2>
            </div>
            <p className="text-[#ffffffff] text-[14px] pb-2">
              &quot;Front-end developer and avid reader.&quot;
            </p>
            <div className="grid grid-cols-1 gap-y-4 w-full  p-10 pt-4 text-[#ffffffff] text-[14px]">
              {links.map((link) => {
                return (
                  <button
                    key={link.name}
                    className="w-full h-12 bg-[#333333ff] font-semibold rounded-md cursor-pointer hover:bg-[#c5f82aff] hover:text-black transition-all duration-200 ease-in-out"
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
