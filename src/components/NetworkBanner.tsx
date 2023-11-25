import React from 'react';
import { type NextPage } from "next";
import DarkMode from "~/components/utils/DarkMode";

const NetworkBanner: NextPage = () => (
  <div className="sticky top-0 m-auto flex justify-between p-2 transition-all w-full sm:max-w-screen-lg items-start">
    <p className="text-gray-300 text-md font-bold">PNN</p>
    <DarkMode size="small" />
  </div>
)

export default NetworkBanner;