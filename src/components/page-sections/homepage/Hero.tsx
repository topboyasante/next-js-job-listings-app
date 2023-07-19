import { FaPlaystation, FaGoogle, FaPaypal, FaApple } from "react-icons/fa";
import { SiTesla, SiToshiba } from "react-icons/si";
import Marquee from "react-fast-marquee";
import Link from "next/link";

function Hero() {
  return (
    <main className="pt-[7vh]">
      <section className="flex justify-center items-center h-full py-8 bg-[#f8fafc] px-5 lg:px-0">
        <section className="text-center">
          <h1 className="text-4xl lg:text-6xl header">
            WE <span className="text-red-500">{`DON'T`}</span> WORK REMOTELY
          </h1>
          <p className="lg:w-[55%] mx-auto lg:text-lg my-2">
            {` We Don't Work Remotely is the largest non-remote work community in the world.
            With over 4.5M visitors, WDWR is the number one destination to find
            and list incredible remote jobs.`}
          </p>
          <Link href={`/jobs`}>
            <button className="bg-red-500 text-white px-4 py-2 my-3">
              <p>Search Jobs</p>
            </button>
          </Link>
        </section>
      </section>
      <section className="max-w-[1000px] mx-auto py-16">
        <h1 className="text-center text-gray-400">{`Trusted by the world's leading companies`}</h1>
        <Marquee className="p-5 text-gray-400">
          <FaGoogle size={80} className="mx-[3em]" />
          <FaPlaystation size={80} className="mx-[3em]" />
          <SiTesla size={80} className="mx-[3em]" />
          <FaPaypal size={80} className="mx-[3em]" />
          <FaApple size={80} className="mx-[3em]" />
          <SiToshiba size={80} className="mx-[3em]" />
        </Marquee>
      </section>
    </main>
  );
}

export default Hero;
