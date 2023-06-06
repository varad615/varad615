import { AiFillGithub } from "react-icons/ai";
import {
  HiOutlineHome,
  HiOutlineDocumentText,
  HiOutlineLocationMarker,
  HiShare
} from "react-icons/hi";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook
} from "react-icons/ai";
import { useEffect, useState } from "react";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import Link from "next/link";

export default function Home() {
  const [userdata, setuserdata] = useState("");
  useEffect(() => {
    fetch("https://api.github.com/users/varad615")
      .then((response) => response.json())
      .then((data) => setuserdata(data));
  }, []);
  console.log("What are u seeing in this log. You wont find anything.😊");
  const iconstyle = { color: "#7d8590", fontSize: "1.5em" };
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <div>
                <button className="hover:bg-[#21262C]  rounded-md border-gray-900 border-opacity-20">
                  <div className="inline-flex space-x-2  items-center justify-start px-3 py-1.5">
                    <HiOutlineHome color="#535962" />
                    <p className="text-sm font-semibold leading-tight text-center text-[#E5EDF3]">
                      Home
                    </p>
                  </div>
                </button>
              </div>
              <Link href="https://github.com/varad615?tab=repositories">
                <button className="hover:bg-[#21262C] rounded-md border-gray-900 border-opacity-20">
                  <div className="inline-flex space-x-2 items-center justify-start px-3 py-1.5">
                    <HiOutlineDocumentText color="#535962" />
                    <p className="text-sm font-semibold leading-tight text-center text-[#E5EDF3]">
                      Projects
                    </p>
                  </div>
                </button>
              </Link>
            </nav>
          </div>
        </header>
        <div className="container px-5 mx-auto">
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div>
              <img
                alt="ecommerce"
                className="lg:w-56 w-36 lg:h-56 h-36 object-cover -mt-1 lg:-mt-10 gobject-center rounded-full"
                src="https://avatars.githubusercontent.com/u/30592638?v=4"
              />
              <br />
              <span className="text-white text-2xl font-semibold">
                {" "}
                {userdata.name}
              </span>
              <br />
              <Link href="https://github.com/varad615">
                <button className="hover:bg-[#ececec] mt-5 px-5 mb-5 bg-white rounded-md border-gray-900 border-opacity-20">
                  <div className="inline-flex space-x-2 items-center justify-start px-3 py-1.5">
                    <AiFillGithub color="black" />
                    <p className="text-sm font-semibold leading-tight text-center text-black">
                      Visit my Github
                    </p>
                  </div>
                </button>
              </Link>
              <br />
              <div className="space-y-3">
                <div className="flex gap gap-2 text-white">
                  <HiOutlineBuildingOffice2 style={iconstyle} />
                  {userdata.company}
                </div>
                <div className="flex gap gap-2 text-white">
                  <HiOutlineLocationMarker style={iconstyle} />
                  {userdata.location}
                </div>
                <div className="flex gap gap-2 text-white">
                  <AiOutlineTwitter style={iconstyle} />
                  <Link href="https://twitter.com/VaradGundap">
                    <span className="hover:text-[#2F81F7]">@VaradGundap</span>
                  </Link>
                </div>
                <div className="flex gap gap-2 text-white">
                  <AiFillInstagram style={iconstyle} />
                  <Link href="https://www.instagram.com/varadgundap/">
                    <span className="hover:text-[#2F81F7]">varadgundap</span>
                  </Link>
                </div>
                <div className="flex gap gap-2 text-white">
                  <AiFillFacebook style={iconstyle} />
                  <Link href="https://www.facebook.com/VaradGundap">
                    <span className="hover:text-[#2F81F7]">VaradGundap</span>
                  </Link>
                </div>
                <div className="flex gap gap-2 text-white">
                  <AiFillLinkedin style={iconstyle} />
                  <Link href="https://www.linkedin.com/in/varad-gundap-604158191/">
                    <span className="hover:text-[#2F81F7]">
                      in/varad-gundap-604158191
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mb-7 w-full lg:ml-7 rounded-md border-2 border-[#2B3138] p-4 lg:py-6 mt-6 lg:mt-7">
              <div>
                <div className="text-xs flex justify-between text-white">
                  <div>
                    <Link href="#">
                      <span className="hover:text-[#2F81F7]">varad615</span>
                      /home<span className="text-[#7d8590]">.js</span>
                    </Link>
                  </div>
                  <div>
                    <HiShare className="text-[#6B727D] hover:text-[#2F81F7] text-lg" />
                  </div>
                </div>
                <div className="mt-6 items-center pb-5 border-gray-100 mb-5">
                  <ul className="list-disc text-white ml-7">
                    <li>👋 Hi, I’m Varad</li>
                    <li>👀 I’m interested in UI designing and Frontend</li>
                    <li>🌱 I’m currently learning something new</li>
                    <li>
                      📫 How to reach me -{" "}
                      <Link
                        href="mailto:varad615@gmail.com"
                        passHref
                        target="_blank"
                      >
                        <span className="text-[#2F81F7] hover:underline">
                          varad615@gmail.com
                        </span>
                      </Link>{" "}
                    </li>
                  </ul>
                  <br />
                  <img src="https://camo.githubusercontent.com/f9eba74a07f45b7d9b630674b370d57e38d46f410c49819aad0bb636d29e4329/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d7661726164363135266c61796f75743d636f6d70616374" />
                  <br />
                  <img src="http://github-readme-streak-stats.herokuapp.com?user=varad615&theme=dark&hide_border=true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
