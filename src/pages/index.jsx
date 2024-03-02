import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import HomePage from "../components/layout";

export default function Home() {
  const [userdata, setuserdata] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/varad615")
      .then((response) => response.json())
      .then((data) => setuserdata(data));
  }, []);

  return (
    <>
      <Head>
        <title>{userdata.name} | Home</title>
      </Head>
      <HomePage>
        <div className="lg:w-1/2 mb-7 w-full lg:ml-7 rounded-md border-2 border-[#2B3138] p-4 lg:py-6 mt-6 lg:mt-7">
          <div>
            <div className="text-xs flex justify-between text-white">
              <div>
                <Link href="#">
                  <span className="hover:text-[#2F81F7]">varad615</span>
                  /home<span className="text-[#7d8590]">.js</span>
                </Link>
              </div>
            </div>
            <div className="mt-6 items-center pb-5 border-gray-100 mb-5">
              <ul className="list-disc text-white ml-7">
                <li>👋 Hi, I’m Varad</li>
                <li>👀 I’m interested in UI designing and Frontend</li>
                <li>🌱 I’m currently learning something new</li>
                <li>
                  📫 How to reach me -{" "}
                  <Link href="mailto:varad615@gmail.com">
                    <span className="text-[#2F81F7] hover:underline">
                      varad615@gmail.com
                    </span>
                  </Link>{" "}
                </li>
              </ul>
              <br />
              <img src="http://github-readme-streak-stats.herokuapp.com?user=varad615&theme=dark&hide_border=true" />
            </div>
          </div>
        </div>
      </HomePage>
    </>
  );
}
