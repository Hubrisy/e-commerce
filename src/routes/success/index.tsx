import Link from 'next/link';

import { Summary } from '@/components/summary';

const SuccessPage = () => (
  <div className="max-w-[340px] m-auto mt-[128px] mb-10 md:flex md:max-w-[80%] flex-row-reverse justify-between">
    <div className="text-center md:mt-12 md:ml-4">
      <div className="text-center text-2xl font-medium">
        Thanks for your purchase!❤️
      </div>
      <div className="text-center mt-4 text-base text-gray-600">
        We will send you a confirmation email with the order details shortly.
      </div>
      <Link
        href="/"
        className="mt-6 inline-block bg-black text-white py-3 px-6 rounded-xl hover:bg-opacity-80 transition"
      >
        Continue shopping
      </Link>
      <div className="mt-8 bg-[#F6F6F6] p-4 rounded-xl text-start text-sm text-gray-700">
        <p className="font-medium mb-2">📦 Delivery Information:</p>
        <ul className="list-disc list-inside">
          <li className="mt-2">
            Orders are typically shipped within 1–2 business days.
          </li>
          <li className="mt-2">
            Track your shipment via the link in your confirmation email.
          </li>
          <li className="mt-2">Contact our support if you have any issues.</li>
        </ul>
      </div>
    </div>
    <Summary />
  </div>
);

export default SuccessPage;
