import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook
} from "react-icons/ai";
import {
  HiOutlineHome,
  HiOutlineDocumentText,
  HiOutlineLocationMarker,
  HiMail
} from "react-icons/hi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default function HomePage({ children }) {
  const router = useRouter();

  const [userData, setUserData] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/varad615")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  const iconStyle = { color: "#7d8590", fontSize: "1.5em" };

  const isActive = (pathname) => {
    return router.pathname === pathname ? "bg-[#21262C]" : "";
  };

  return (
    <>
      <div className="text-gray-600 body-font overflow-hidden">
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="md:ml-auto gap-2 md:mr-auto flex flex-wrap items-center text-base justify-center">
              <Link href="/">
                <button className={`hover:bg-[#21262C] rounded-md border-gray-900 border-opacity-20 ${isActive('/')}`}>
                  <div className="inline-flex space-x-2  items-center justify-start px-3 py-1.5">
                    <HiOutlineHome color="#535962" />
                    <p className="text-sm font-semibold leading-tight text-center text-[#E5EDF3]">
                      Home
                    </p>
                  </div>
                </button>
              </Link>
              <Link href="/projects">
                <button className={`hover:bg-[#21262C] rounded-md border-gray-900 border-opacity-20 ${isActive('/projects')}`}>
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
                alt="varad gundap"
                className="lg:w-56 w-36 lg:h-56 h-36 object-cover -mt-1 lg:-mt-10 gobject-center rounded-full"
                src="https://avatars.githubusercontent.com/u/30592638?v=4"
              />
              <br />
              <span className="text-white text-2xl font-semibold">
                {" "}
                {userData.name}
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
                  <HiMail style={iconStyle} />
                  varad615@gmail.com
                </div>
                <div className="flex gap gap-2 text-white">
                  <HiOutlineBuildingOffice2 style={iconStyle} />
                  {userData.company}
                </div>
                <div className="flex gap gap-2 text-white">
                  <HiOutlineLocationMarker style={iconStyle} />
                  {userData.location}
                </div>
                <div className="flex gap gap-2 text-white">
                  <AiOutlineTwitter style={iconStyle} />
                  <Link href="https://twitter.com/VaradGundap">
                    <span className="hover:text-[#2F81F7]">@VaradGundap</span>
                  </Link>
                </div>
                <div className="flex gap gap-2 text-white">
                  <AiFillInstagram style={iconStyle} />
                  <Link href="https://www.instagram.com/varadgundap/">
                    <span className="hover:text-[#2F81F7]">varadgundap</span>
                  </Link>
                </div>
                <div className="flex gap gap-2 text-white">
                  <AiFillFacebook style={iconStyle} />
                  <Link href="https://www.facebook.com/VaradGundap">
                    <span className="hover:text-[#2F81F7]">VaradGundap</span>
                  </Link>
                </div>
                <div className="flex gap gap-2 text-white">
                  <AiFillLinkedin style={iconStyle} />
                  <Link href="https://www.linkedin.com/in/varad-gundap-604158191/">
                    <span className="hover:text-[#2F81F7]">
                      in/varad-gundap-604158191
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
