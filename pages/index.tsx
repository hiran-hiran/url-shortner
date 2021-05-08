import { NextPage } from "next";
import { useState, VFC } from "react";

import { AddLinkForm } from "../components/AddLinkForm";

const Home: VFC<NextPage> = () => {
  const [linkId, setLinkId] = useState(null);
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-2xl bg-white rounded-lg w-full">
        <div className="px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="font-bold text-3xl text-gray-900">URL Shortner</h1>
          <AddLinkForm setLinkId={setLinkId} />
          {linkId && (
            <div className="w-full">
              <div className="px-4 py-4 mt-5 bg-blue-800 text-white w-1/2 rounded-lg">
                <a href={`http://localhost:3000/${linkId}`}>{`http://localhost:3000/${linkId}`}</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
