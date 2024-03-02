import { useEffect, useState } from "react";
import Head from "next/head";
import HomePage from "../components/layout";

export default function Home() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/varad615/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  // Function to format the date string
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Head>
        <title>Varad Gundap | Projects</title>
      </Head>
      <HomePage>
        <div className="lg:w-1/2 mb-7 w-full lg:ml-7 rounded-md border-2 border-[#2B3138] p-4 lg:py-6 mt-6 lg:mt-7">
          <div>
            <div className="items-center pb-5 border-gray-100 mb-5">
              <ul className="text-white">
                {repos.map((repo, index) => (
                  <li key={repo.id}>
                    <div className="py-4">
                      <div className="text-[#2F81F7] text-xl font-semibold">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#2F81F7]"
                        >
                          {repo.name}
                        </a>
                      </div>
                      <div className="flex flex-row gap-2 text-xs text-[#848D86] mt-2">
                        <div>{repo.language}</div>
                        <div>Updated on {formatDate(repo.updated_at)}</div>
                      </div>
                    </div>
                    {/* Render the divider line only if the current item is not the last one */}
                    {index !== repos.length - 1 && (
                      <hr className="border-t border-[#30363d]" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </HomePage>
    </>
  );
}
