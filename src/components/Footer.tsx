import React from 'react';
import { type NextPage } from "next";
import { ColorStripeRainbow } from '~/components/common/ColorStripe';

const Footer: NextPage = () => (
  <div className="mt-2">
    <ColorStripeRainbow />
    <div className="bg-default-black sticky top-0 m-auto flex justify-end p-2 transition-all w-full items-start">
      <p className="text-default-white text-2xl font-bold">2-4-6 HRS.</p>
    </div>
  </div>
)

export default Footer;