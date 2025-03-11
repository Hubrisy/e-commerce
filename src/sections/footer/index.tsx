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

const Footer = () => (
  <div className="w-full h-[465px] bg-[#000000] flex justify-center items-center text-[14px] text-[#CFCFCF]">
    <div>
      <div className="flex justify-between">
        <div className="max-w-[384px]">
          <img src="/LogoWhite.png" alt="" />
          <div className="text-[#FFFFFF] mt-[24px] leading-[26px]">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </div>
        </div>
        <div className="w-full max-w-[623px] flex justify-between ml-[112px]">
          <div className="w-[295px]">
            <h1 className="text-[16px] text-[#FFFFFF]">Services</h1>
            <div className="leading-[32px]">
              {services.map(item => (
                <div
                  className="cursor-pointer hover:border-[1px] border-[white]"
                  key={item.name}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <div className="w-[295px]">
            <h1 className="text-[16px] text-[#FFFFFF]">
              Assistance to the buyer
            </h1>
            <div className="leading-[32px]">
              {assistance.map(item => (
                <div
                  className="cursor-pointer hover:border-[1px] border-[white]"
                  key={item.name}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[24px] flex gap-[36px]">
        <img src="/Twitter.png" alt="" />
        <img src="/Facebook.png" alt="" />
        <img src="/Tiktok.png" alt="" />
        <img src="/Instagram.png" alt="" />
      </div>
    </div>
  </div>
);

export default Footer;
