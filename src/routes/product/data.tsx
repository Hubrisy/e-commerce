import Battery from '@assets/svg/char/Battery.svg';
import Camera from '@assets/svg/char/Camera.svg';
import Cores from '@assets/svg/char/Cores.svg';
import Cpu from '@assets/svg/char/Cpu.svg';
import Headphones from '@assets/svg/char/Headphones.svg';
import Screen from '@assets/svg/char/Screensize.svg';
import Watch from '@assets/svg/char/Smart Watches.svg';

export const colors = [
  'bg-black',
  'bg-[#781DBC]',
  'bg-[#E1B000]',
  'bg-[#E10000]',
  'bg-[#E8E8E8]',
];

export const productStorageSizes = [
  {
    id: 1, // Apple iPhone 14 Pro Max
    storageSizes: ['128GB', '256GB', '512GB', '1TB'],
  },
  {
    id: 2, // Blackmagic Pocket Cinema Camera 6k
    storageSizes: ['128GB', '256GB'],
  },
  {
    id: 3, // Apple Watch Series 9
    storageSizes: ['32GB', '64GB'],
  },
  {
    id: 4, // AirPods Max
    storageSizes: [], // AirPods Max не имеет встроенной памяти
  },
  {
    id: 5, // Samsung Galaxy Watch6 Classic
    storageSizes: ['16GB', '32GB'],
  },
  {
    id: 6, // Galaxy Z Fold5
    storageSizes: ['256GB', '512GB', '1TB'],
  },
  {
    id: 7, // Galaxy Buds FE
    storageSizes: [], // Galaxy Buds FE не имеет встроенной памяти
  },
  {
    id: 8, // Apple iPad 9
    storageSizes: ['64GB', '128GB'],
  },
  {
    id: 9, // Apple iPhone 14 Pro 512GB
    storageSizes: ['512GB'],
  },
  {
    id: 10, // Apple iPhone 14 Pro 1TB
    storageSizes: ['1TB'],
  },
];

export const characteristics = [
  {
    id: 1,
    characteristics: [
      { title: 'Screen size', char: '6.7"', img: <Screen /> },
      { title: 'Cpu', char: 'Apple A16 Bionic', img: <Cpu /> },
      { title: 'Number of cores', char: '6', img: <Cores /> },
      { title: 'Main camera', char: '48 + 12 + 12 MP', img: <Camera /> },
      { title: 'Front camera', char: '12 MP', img: <Camera /> },
      { title: 'Battery capacity', char: '4323 mAh', img: <Battery /> },
    ],
  },
  {
    id: 2,
    characteristics: [
      { title: 'Resolution', char: '6144x3456 (6K)', img: <Screen /> },
      { title: 'Sensor', char: 'Super 35', img: <Camera /> },
      { title: 'Mount', char: 'EF Mount', img: <Camera /> },
      { title: 'Dynamic Range', char: '13 stops', img: <Cpu /> },
      { title: 'Storage', char: 'CFast 2.0 / SD / USB-C', img: <Screen /> },
    ],
  },
  {
    id: 3,
    characteristics: [
      { title: 'Display', char: '41mm Retina', img: <Screen /> },
      { title: 'Cpu', char: 'Apple S9 SiP', img: <Cpu /> },
      { title: 'Battery', char: 'Up to 18 hours', img: <Battery /> },
      { title: 'Sensors', char: 'ECG, Blood O₂, Temp', img: <Watch /> },
    ],
  },
  {
    id: 4,
    characteristics: [
      { title: 'Audio tech', char: 'ANC, Spatial Audio', img: <Headphones /> },
      { title: 'Battery', char: '20 hours', img: <Battery /> },
      { title: 'Chip', char: 'Apple H1', img: <Cpu /> },
    ],
  },
  {
    id: 5,
    characteristics: [
      { title: 'Display', char: '47mm Super AMOLED', img: <Screen /> },
      { title: 'Cpu', char: 'Exynos W930', img: <Cpu /> },
      { title: 'Battery', char: 'Up to 40 hours', img: <Battery /> },
      { title: 'Water resistance', char: '5 ATM / IP68', img: <Watch /> },
    ],
  },
  {
    id: 6,
    characteristics: [
      { title: 'Screen size', char: '7.6"', img: <Screen /> },
      { title: 'Cpu', char: 'Snapdragon 8 Gen 2', img: <Cpu /> },
      { title: 'Storage', char: '256GB', img: <Screen /> },
      { title: 'Battery', char: '4400 mAh', img: <Battery /> },
    ],
  },
  {
    id: 7,
    characteristics: [
      { title: 'Type', char: 'In-ear, ANC', img: <Headphones /> },
      { title: 'Battery', char: 'Up to 30h w/case', img: <Battery /> },
      { title: 'Resistance', char: 'IPX2', img: <Headphones /> },
    ],
  },
  {
    id: 8,
    characteristics: [
      { title: 'Screen size', char: '10.2"', img: <Screen /> },
      { title: 'Cpu', char: 'Apple A13 Bionic', img: <Cpu /> },
      { title: 'Storage', char: '64GB', img: <Screen /> },
      { title: 'Battery', char: '10 hours', img: <Battery /> },
    ],
  },
  {
    id: 9,
    characteristics: [
      { title: 'Storage', char: '512GB', img: <Screen /> },
      { title: 'Screen size', char: '6.1"', img: <Screen /> },
      { title: 'Cpu', char: 'Apple A16 Bionic', img: <Cpu /> },
      { title: 'Camera', char: '48 MP main', img: <Camera /> },
    ],
  },
  {
    id: 10,
    characteristics: [
      { title: 'Storage', char: '1TB', img: <Screen /> },
      { title: 'Cpu', char: 'Apple A16 Bionic', img: <Cpu /> },
      { title: 'Camera', char: '48 MP main', img: <Camera /> },
      { title: 'Screen', char: '6.1" OLED', img: <Screen /> },
    ],
  },
];

export const productDetails = [
  {
    id: 1,
    desc: 'Apple\'s flagship smartphone featuring a large 6.7" OLED display, A16 Bionic chip, and an advanced triple camera system. Perfect for those who demand top-tier performance and design.',
    productTitle: 'Key Specifications',
    productChar: [
      { title: 'Display', info: '6.7" OLED, 120Hz, Dynamic Island' },
      { title: 'Processor', info: 'Apple A16 Bionic' },
      { title: 'Camera', info: '48 + 12 + 12 MP' },
      { title: 'Storage', info: '128GB' },
      { title: 'Battery', info: '4323 mAh' },
    ],
  },
  {
    id: 2,
    desc: 'A professional cinema camera with 6K resolution, Super 35 sensor, and RAW recording capabilities. Ideal for filmmakers and content creators.',
    productTitle: 'Key Specifications',
    productChar: [
      { title: 'Recording Resolution', info: '6K (6144x3456)' },
      { title: 'Sensor', info: 'Super 35' },
      { title: 'Mount Type', info: 'EF Mount' },
      { title: 'Dynamic Range', info: '13 stops' },
      { title: 'Media', info: 'CFast 2.0 / SD UHS-II / USB-C' },
    ],
  },
  {
    id: 3,
    desc: 'The latest Apple Watch with a bright Retina display, advanced health tracking, and a sleek aluminum design. Built for everyday use and fitness.',
    productTitle: 'Key Specifications',
    productChar: [
      { title: 'Display Size', info: '41mm Retina' },
      { title: 'Case Material', info: 'Starlight Aluminum' },
      { title: 'Chipset', info: 'S9 SiP' },
      { title: 'Features', info: 'Blood Oxygen, ECG, Temperature sensor' },
      { title: 'Battery Life', info: 'Up to 18 hours' },
    ],
  },
  {
    id: 4,
    desc: 'High-fidelity over-ear headphones with spatial audio, active noise cancellation, and a premium design. Tailored for audiophiles and Apple fans.',
    productTitle: 'Key Specifications',
    productChar: [
      { title: 'Audio Tech', info: 'Spatial Audio, ANC, Transparency mode' },
      { title: 'Chip', info: 'Apple H1 (each ear cup)' },
      { title: 'Battery Life', info: 'Up to 20 hours' },
      { title: 'Build', info: 'Aluminum ear cups, knit mesh canopy' },
    ],
  },
  {
    id: 5,
    desc: 'A premium smartwatch from Samsung with a rotating bezel, classic design, and robust health tracking features.',
    productTitle: 'Key Specifications',
    productChar: [
      { title: 'Display', info: '1.5" Super AMOLED, 47mm' },
      { title: 'Build', info: 'Stainless Steel' },
      { title: 'OS', info: 'Wear OS powered by Samsung' },
      { title: 'Features', info: 'Heart Rate, ECG, Sleep Tracking' },
    ],
  },
  {
    id: 6,
    desc: 'Samsung’s cutting-edge foldable phone with a massive AMOLED display and powerful Snapdragon processor. Combines portability with productivity.',
    productTitle: 'Key Specifications',
    productChar: [
      { title: 'Main Display', info: '7.6" AMOLED, 120Hz' },
      { title: 'Processor', info: 'Snapdragon 8 Gen 2' },
      { title: 'Storage', info: '256GB' },
      { title: 'Fold Type', info: 'Horizontal fold, water resistant' },
    ],
  },
  {
    id: 7,
    desc: 'Compact wireless earbuds with powerful sound, ANC, and seamless Galaxy ecosystem integration. Great value for everyday use.',
    productTitle: 'Key Specifications',
    productChar: [
      { title: 'Noise Control', info: 'Active Noise Cancellation' },
      { title: 'Playback Time', info: 'Up to 30 hours with case' },
      { title: 'Water Resistance', info: 'IPX2 (splash resistant)' },
      { title: 'Touch Controls', info: 'Yes' },
    ],
  },
  {
    id: 8,
    desc: 'A reliable iPad for everyday use, featuring a 10.2" Retina display, iPadOS, and support for Apple Pencil (1st Gen). Great for browsing, streaming, and learning.',
    productTitle: 'Key Specifications',
    productChar: [
      { title: 'Display', info: '10.2" Retina' },
      { title: 'Storage', info: '64GB' },
      { title: 'Chipset', info: 'A13 Bionic' },
      { title: 'Features', info: 'Apple Pencil (1st gen) support' },
    ],
  },
  {
    id: 9,
    desc: 'Powerful iPhone 14 Pro with 512GB storage, featuring ProMotion display, Dynamic Island, and cinematic camera experience.',
    productTitle: 'Key Specifications',
    productChar: [
      { title: 'Storage', info: '512GB' },
      { title: 'Camera System', info: '48 + 12 + 12 MP' },
      { title: 'Display', info: '6.1" OLED, 120Hz' },
      { title: 'Chipset', info: 'Apple A16 Bionic' },
    ],
  },
  {
    id: 10,
    desc: 'Top-tier iPhone model with massive 1TB storage, ideal for creators and professionals who need maximum space and power.',
    productTitle: 'Key Specifications',
    productChar: [
      { title: 'Storage', info: '1TB' },
      { title: 'Display', info: '6.1" OLED, ProMotion, Always-On' },
      { title: 'Chipset', info: 'Apple A16 Bionic' },
      { title: 'Camera', info: 'Pro camera system with 48 MP main sensor' },
    ],
  },
];

export const productDescriptions = [
  {
    id: 1,
    description:
      'Enhanced capabilities thanks to an enlarged display of 6.7 inches and work without recharging throughout the day. Incredible photos in both weak and bright light using the new system with three cameras, including a 48MP main sensor. Smooth performance with the latest A16 Bionic chip, and plenty of storage options for all your apps, photos, and videos. With Ceramic Shield, your phone is tougher than any other smartphone screen.',
  },
  {
    id: 2,
    description:
      'Elevate your video production with the Blackmagic Pocket Cinema Camera 6K, featuring a powerful Super 35 sensor and incredible 6K resolution. Capture stunning cinematic shots with wide dynamic range and excellent low-light performance. The compact design means you can take it anywhere, and with a variety of lens mounts, you have the flexibility to create the perfect shot.',
  },
  {
    id: 3,
    description:
      'The Apple Watch Series 9 brings you all-day performance with its stunning 41mm display and GPS functionality. Stay connected with notifications, calls, and messages right on your wrist. Enhanced fitness tracking features, including heart rate monitoring and sleep tracking, give you the insights you need to improve your health. Now with improved battery life, the Series 9 is your perfect companion for all-day wear.',
  },
  {
    id: 4,
    description:
      'Unmatched sound quality in a sleek, over-ear design. AirPods Max brings you the best of spatial audio, active noise cancellation, and a rich listening experience. With a high-fidelity audio driver and powerful computational audio, these headphones deliver exceptional sound clarity and immersion. Perfect for music lovers and audio professionals alike.',
  },
  {
    id: 5,
    description:
      'A sophisticated smartwatch with a premium 47mm stainless steel frame and a rotating bezel for an intuitive experience. Track your fitness with advanced sensors that monitor heart rate, blood oxygen levels, and more. With the long-lasting battery, you can wear it all day and night, and the always-on display ensures you stay connected at all times.',
  },
  {
    id: 6,
    description:
      'A revolutionary folding smartphone that opens up to a tablet-sized 7.6-inch display. The Galaxy Z Fold5 combines the best of both worlds with a compact form factor when closed and a large immersive display when open. Experience seamless multitasking, an ultra-responsive touchscreen, and premium features, all housed in a sturdy and elegant design.',
  },
  {
    id: 7,
    description:
      'Compact, comfortable, and high-performance wireless earbuds designed to deliver rich sound and deep bass. With IPX7 waterproofing, the Galaxy Buds FE are built to withstand rain, sweat, and splashes, making them perfect for workouts. Enjoy up to 8 hours of playtime and effortless connectivity with your devices for all your listening needs.',
  },
  {
    id: 8,
    description:
      "Experience an ultra-responsive 10.2-inch Retina display with the iPad 9. Whether you're watching movies, playing games, or working on the go, this device delivers stunning visuals and powerful performance. The A13 Bionic chip ensures smooth performance across apps, while Apple Pencil and Smart Keyboard compatibility expands your productivity options.",
  },
  {
    id: 9,
    description:
      'Capture cinematic-quality photos with the 48MP main camera and take advantage of the ultra-wide and telephoto lenses for stunning shots in any lighting. The iPhone 14 Pro features a powerful A16 Bionic chip, ensuring fast and efficient performance for apps, games, and multitasking. With 512GB of storage, you can store all your media, apps, and more.',
  },
  {
    id: 10,
    description:
      'With a 1TB storage capacity, this iPhone 14 Pro model ensures you’ll never run out of space. The 6.1-inch Super Retina XDR display with ProMotion delivers ultra-smooth visuals, and the 48MP camera system is designed to capture incredible photos and videos. Powered by the A16 Bionic chip, it provides fast performance and long-lasting battery life.',
  },
];
