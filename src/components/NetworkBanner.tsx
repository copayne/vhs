import React from 'react';
import { type NextPage } from "next";

const NetworkBanner: NextPage = () => (
  <div className="bg-default-black sticky top-0 m-auto flex justify-between p-2 transition-all w-full items-start border-b-2 border-black z-10">
    <p className="text-default-white text-md font-bold">PHS T-120</p>
  </div>
)

export default NetworkBanner;