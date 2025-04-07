import LogoWhite from '@assets/svg/logos/LogoWhite.svg';
import Facebook from '@assets/svg/socialweb/Facebook.svg';
import Instagram from '@assets/svg/socialweb/Instagram.svg';
import TikTok from '@assets/svg/socialweb/TikTok.svg';
import Twitter from '@assets/svg/socialweb/Twitter.svg';

const services = [
  {
    name: 'Bonus program',
  },
  {
    name: 'Gift cards',
  },
  {
    name: 'Credit and payment',
  },
  {
    name: 'Service contracts',
  },
  {
    name: 'Non-cash account',
  },
  {
    name: 'Payment',
  },
];

const assistance = [
  { name: 'Find an order' },
  { name: 'Terms of delivery' },
  { name: 'Exchange and return of goods' },
  { name: 'Guarantee' },
  { name: 'Frequently asked questions' },
  { name: 'Terms of use of the site' },
];

const socialNetwork = [
  <Twitter key="twitter" />,
  <Facebook key="facebook" />,
  <TikTok key="tiktok" />,
  <Instagram key="instagram" />,
];

const Footer = () => (
  <div className="w-full bg-god-grey flex justify-center items-center text-[14px] text-alto sm:min-h-[465px] relative z-50">
    <div>
      <div className="flex flex-col justify-between mx-[10px] sm:flex-row">
        <div className="max-w-[384px] flex flex-col">
          <div className="m-auto mt-4xlarge sm:m-0">
            <LogoWhite />
          </div>
          <div className="text-white mt-[24px] text-center leading-[26px] sm:text-start">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </div>
        </div>
        <div className="w-full max-w-[623px] flex flex-col justify-between sm:flex-row sm:ml-[20px] md:ml-[112px]">
          <div className="xl:min-w-[295px] text-center mt-2xlarge sm:text-start sm:mt-0">
            <h1 className="text-[16px] text-white">Services</h1>
            <div className="leading-2xlarge">
              {services.map(item => (
                <div
                  className="cursor-pointer border-b-[1px] border-transparent hover:border-white"
                  key={item.name}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <div className="xl:min-w-[295px] text-center mt-[32px] sm:text-start sm:mt-0">
            <h1 className="text-[16px] text-white">Assistance to the buyer</h1>
            <div className="leading-2xlarge">
              {assistance.map(item => (
                <div
                  className="cursor-pointer border-b-[1px] border-transparent hover:border-white"
                  key={item.name}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2xlarge mb-4xlarge flex justify-center gap-2xlarge sm:gap-[36px] sm:mt-xlarge sm:mb-0">
        {socialNetwork.map((item, index) => (
          <div key={index} className="cursor-pointer">
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
