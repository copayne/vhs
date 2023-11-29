import React from 'react';
import { type NextPage } from "next";

const NetworkBanner: NextPage = () => (
  <div className="bg-default-black sticky top-0 m-auto flex justify-between p-2 transition-all w-full sm:max-w-screen-md items-start">
    <p className="text-default-white text-md font-bold">PHS T-120</p>
  </div>
)

export default NetworkBanner;