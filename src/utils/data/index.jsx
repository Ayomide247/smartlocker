import { FaRegMoneyBillAlt, FiChevronUp } from "../../assets/icons";
import userPic1 from "../../assets/image/naija1.jpeg";
import userPic2 from "../../assets/image/naija2.jpeg";
import userPic3 from "../../assets/image/naija3.jpeg";
import userPic4 from "../../assets/image/naija4.jpeg";
import userPic5 from "../../assets/image/naija5.jpeg";
import userPic6 from "../../assets/image/naija6.jpeg";
import userPic7 from "../../assets/image/whatsapp.png";
import userPic8 from "../../assets/image/naija8.jpg";
import { BsFillHouseDoorFill, BsPersonFillGear } from "react-icons/bs";
import { FaBell, FaRegCreditCard, FaTruck } from "react-icons/fa";



export const servicesData = [
  {
    id: 1,
    title: "Cost Effective",
    text: "Spend less to send and receive your packages with our affordable pricing.",
    icon: <FaRegMoneyBillAlt className="text-[#F1620C] text-3xl" />,
  },
  {
    id: 2,
    title: "Track your Delivery",
    text: "Get instant notifications on pickups and drop-offs of your delivery items.",
    icon: <FaRegMoneyBillAlt className="text-[#F1620C] text-3xl" />,
  },
  {
    id: 3,
    title: "Safe and Secure",
    text: "Our Smart Locker is equipped with various security measures to ensure quick and safe deliveries.",
    icon: <FaRegMoneyBillAlt className="text-[#F1620C] text-3xl" />,
  },
  {
    id: 4,
    title: "Speed",
    text: "Get your deliveries faster.  Our Smart Locker eliminates delay at the pickup and  drop-off points.",
    icon: <FaRegMoneyBillAlt className="text-[#F1620C] text-3xl" />,
  },
  {
    id: 5,
    title: "Easily Accessible",
    text: "Our Smart Lockers are very easy to find as they are  situated in straightforward locations.",
    icon: <FaRegMoneyBillAlt className="text-[#F1620C] text-3xl" />,
  },
  {
    id: 6,
    title: "Easy and Convenient",
    text: "Access your packages in our Smart Lockers at your own convenience. We are always available, you call the shots.",
    icon: <FaRegMoneyBillAlt className="text-[#F1620C] text-3xl" />,
  },
];
export const faqsData = [
  {
    id: 1,
    title: "Whats is a Smart Locker?",
    text: "A Smart Locker is a 24/7 self-service parcel delivery service which allows you to securely collect and send parcels with the use of one-time passwords (OTP). These OTPs are often a combination of alphabets and numerals.",
    icon: (
      <span className="absolute right-0 top-6 w-8 h-8 rounded-full border border-[#ff620071] text-[#ff620071] grid place-content-center cursor-pointer">
        <FiChevronUp />
      </span>
    ),
    isOpen: false,
  },
  {
    id: 2,
    title: "How do I track my parcel?",
    text: "A Smart Locker is a 24/7 self-service parcel delivery service which allows you to securely collect and send parcels with the use of one-time passwords (OTP). These OTPs are often a combination of alphabets and numerals.",
    icon: (
      <span className="absolute right-0 top-6 w-8 h-8 rounded-full border border-[#ff620071] text-[#ff620071] grid place-content-center cursor-pointer">
        <FiChevronUp />
      </span>
    ),
    isOpen: false,
  },
  {
    id: 3,
    title: "Safe and Secure",
    text: "A Smart Locker is a 24/7 self-service parcel delivery service which allows you to securely collect and send parcels with the use of one-time passwords (OTP). These OTPs are often a combination of alphabets and numerals.",
    icon: (
      <span className="absolute right-0 top-6 w-8 h-8 rounded-full border border-[#ff620071] text-[#ff620071] grid place-content-center cursor-pointer">
        <FiChevronUp />
      </span>
    ),
    isOpen: false,
  },
  {
    id: 4,
    title: "Speed",
    text: "A Smart Locker is a 24/7 self-service parcel delivery service which allows you to securely collect and send parcels with the use of one-time passwords (OTP). These OTPs are often a combination of alphabets and numerals.",
    icon: (
      <span className="absolute right-0 top-6 w-8 h-8 rounded-full border border-[#ff620071] text-[#ff620071] grid place-content-center cursor-pointer">
        <FiChevronUp />
      </span>
    ),
    isOpen: false,
  },
  {
    id: 5,
    title: "Easily Accessible",
    text: "A Smart Locker is a 24/7 self-service parcel delivery service which allows you to securely collect and send parcels with the use of one-time passwords (OTP). These OTPs are often a combination of alphabets and numerals.",
    icon: (
      <span className="absolute right-0 top-6 w-8 h-8 rounded-full border border-[#ff620071] text-[#ff620071] grid place-content-center cursor-pointer">
        <FiChevronUp />
      </span>
    ),
    isOpen: false,
  },
];

export const AREA = [
  { value: "Agege", label: "Agege" },
  { value: "Ajeromi-Ifelodun", label: "Ajeromi-Ifelodun" },
  { value: "Alimosho", label: "Alimosho" },
  { value: "Amuwo-Odofin", label: "Amuwo-Odofin" },
  { value: "Apapa", label: "Apapa" },
  { value: "Badagry", label: "Badagry" },
  { value: "Epe", label: "Epe" },
  { value: "Eti-Osa", label: "Eti-Osa" },
  { value: "Ibeju-Lekki", label: "Ibeju-Lekki" },
  { value: "Ifako-Ijaiye", label: "Ifako-Ijaiye" },
  { value: "Ikeja", label: "Ikeja" },
  { value: "Ikorodu", label: "Ikorodu" },
  { value: "Kosofe", label: "Kosofe" },
  { value: "Lagos Island", label: "Lagos Island" },
  { value: "Lagos Mainland", label: "Lagos Mainland" },
  { value: "Mushin", label: "Mushin" },
  { value: "Ojo", label: "Ojo" },
  { value: "Oshodi-Isolo", label: "Oshodi-Isolo" },
  { value: "Shomolu", label: "Shomolu" },
  { value: "Surulere", label: "Surulere" },
];

export const Lockers = [
  {
    id: 1,
    area: "Agege",
    lockers: [
      {
        id: 1,
        title: "LOCKER 01",
        address: "5 Charles Logan Street, Agege Lagos",
      },
      {
        id: 2,
        title: "LOCKER 02",
        address: "15 Ologbonsere Street, Agege Lagos",
      },
    ],
  },
  {
    id: 2,
    area: "Ikeja",
    lockers: [
      {
        id: 1,
        title: "LOCKER 03",
        address: "25 Wemco Street, Ikeja Lagos",
      },
      {
        id: 2,
        title: "LOCKER 04",
        address: "60 Oregun Street, Ikeja Lagos",
      },
    ],
  },
  {
    id: 3,
    area: "Lagos Island",
    lockers: [
      {
        id: 1,
        title: "LOCKER 05",
        address: "17 Gerrard Road, Ikoyi Lagos",
      },
      {
        id: 2,
        title: "LOCKER 06",
        address: "35 Herbert Marculay Street, VI Lagos",
      },

      {
        id: 3,
        title: "LOCKER 07",
        address: "No 9, MacDonald Ikoyi, Lagos",
      },
    ],
  },
];

export const RIDERS = [
  {
    "id": 1,
    "first_name": "Efe",
    "last_name": "Antony",
    "username": "eantonescu0",
    "duration": "2hr 42min",
    "price": "₦2250.46",
    "type": "Express",
    "avatar": "https://robohash.org/quaeratcumqueincidunt.png?size=50x50&set=set1"
  },
  {
    "id": 2,
    "first_name": "Ika",
    "last_name": "Micheal",
    "username": "imaciejewski1",
    "duration": "1hr 25min",
    "price": "₦3500.01",
    "type": "Express",
    "avatar": "https://robohash.org/etveniamdolores.png?size=50x50&set=set1"
  },
  {
    "id": 3,
    "first_name": "Hellen",
    "last_name": "Mary",
    "username": "hwindless2",
    "duration": "2Days 00min",
    "price": "₦2100.89",
    "type": "Regular",
    "avatar": "https://robohash.org/providentvoluptatenecessitatibus.png?size=50x50&set=set1"
  },
  {
    "id": 4,
    "first_name": "Miller",
    "last_name": "Akpan",
    "username": "mweiner3",
    "duration": "5hr 25min",
    "price": "₦1250.77",
    "type": "Regular",
    "avatar": "https://robohash.org/quaeratcumqueincidunt.png?size=50x50&set=set1"
  },
  {
    "id": 5,
    "first_name": "Adewale",
    "last_name": "Rafiu",
    "username": "rhuddy4",
    "duration": "3Days 00min",
    "price": "₦950.31",
    "type": "Regular",
    "avatar": "https://robohash.org/velanimiipsam.png?size=50x50&set=set1"
  },
  {
    "id": 6,
    "first_name": "Ali",
    "last_name": "Monday",
    "username": "agutch5",
    "duration": "3hr 42min",
    "price": "₦3150.00",
    "type": "Express",
    "avatar": "https://robohash.org/rerumfacilisminus.png?size=50x50&set=set1"
  },
  {
    "id": 7,
    "first_name": "Sarah",
    "last_name": "Monica",
    "username": "smurch6",
    "duration": "3Days 00min",
    "price": "₦1100.40",
    "type": "Regular",
    "avatar": "https://robohash.org/fugaarchitectoodio.png?size=50x50&set=set1"
  },
  {
    "id": 8,
    "first_name": "Kolade",
    "last_name": "Mayowa",
    "username": "lkrolle7",
    "duration": "7hr 25min",
    "price": "₦2700.61",
    "type": "Express",
    "avatar": "https://robohash.org/quisquamexrerum.png?size=50x50&set=set1"
  },
  {
    "id": 9,
    "first_name": "John",
    "last_name": "Bovi",
    "username": "lmathivon8",
    "duration": "2Days 42min",
    "price": "#1200.80",
    "type": "Regular",
    "avatar": "https://robohash.org/ipsanamnatus.png?size=50x50&set=set1"
  },
  {
    "id": 10,
    "first_name": "Shina",
    "last_name": "Boye",
    "username": "sfoye9",
    "duration": "2hr 42min",
    "price": "₦4500.29",
    "type": "Express",
    "avatar": "https://robohash.org/porrodoloremaut.png?size=50x50&set=set1"
  },
  // {
  //   "id": 11,
  //   "first_name": "Dorree",
  //   "last_name": "Chitham",
  //   "username": "dchithama",
  //   "duration": "5hr 25min",
  //   "price": "₦3.64",
  //   "type": "Express",
  //   "avatar": "https://robohash.org/inautemsunt.png?size=50x50&set=set1"
  // },
  // {
  //   "id": 12,
  //   "first_name": "Devlen",
  //   "last_name": "Gallon",
  //   "username": "dgallonb",
  //   "duration": "15hr 25min",
  //   "price": "₦1.40",
  //   "type": "Express",
  //   "avatar": "https://robohash.org/nostrumremnihil.png?size=50x50&set=set1"
  // },
  // {
  //   "id": 13,
  //   "first_name": "Gwenora",
  //   "last_name": "Ernshaw",
  //   "username": "gernshawc",
  //   "duration": "5hr 25min",
  //   "price": "₦6.96",
  //   "type": "Express",
  //   "avatar": "https://robohash.org/consequunturquiaomnis.png?size=50x50&set=set1"
  // },
  // {
  //   "id": 14,
  //   "first_name": "Carlin",
  //   "last_name": "Heelis",
  //   "username": "cheelisd",
  //   "duration": "12hr 42min",
  //   "price": "₦2.40",
  //   "type": "Express",
  //   "avatar": "https://robohash.org/etquasaccusantium.png?size=50x50&set=set1"
  // },
  // {
  //   "id": 15,
  //   "first_name": "Arline",
  //   "last_name": "Lippini",
  //   "username": "alippinie",
  //   "duration": "12hr 42min",
  //   "price": "₦8.79",
  //   "type": "Express",
  //   "avatar": "https://robohash.org/velquiofficiis.png?size=50x50&set=set1"
  // },
  // {
  //   "id": 16,
  //   "first_name": "Miguelita",
  //   "last_name": "Morby",
  //   "username": "mmorbyf",
  //   "duration": "12hr 42min",
  //   "price": "₦1250.96",
  //   "type": "Express",
  //   "avatar": "https://robohash.org/dignissimosminusasperiores.png?size=50x50&set=set1"
  // },
  // {
  //   "id": 17,
  //   "first_name": "Marlyn",
  //   "last_name": "Layburn",
  //   "username": "mlayburng",
  //   "duration": "2hr 42min",
  //   "price": "₦5.45",
  //   "type": "Regular",
  //   "avatar": "https://robohash.org/dolorummollitiaiusto.png?size=50x50&set=set1"
  // },
  // {
  //   "id": 18,
  //   "first_name": "Adelle",
  //   "last_name": "Ofen",
  //   "username": "aofenh",
  //   "duration": "2hr 42min",
  //   "price": "₦9.70",
  //   "type": "Regular",
  //   "avatar": "https://robohash.org/veritatisdoloritaque.png?size=50x50&set=set1"
  // },
  // {
  //   "id": 19,
  //   "first_name": "Stillman",
  //   "last_name": "Havers",
  //   "username": "shaversi",
  //   "duration": "2hr 42min",
  //   "price": "₦4.89",
  //   "type": "Regular",
  //   "avatar": "https://robohash.org/estlaboriosammolestiae.png?size=50x50&set=set1"
  // },
  // {
  //   "id": 20,
  //   "first_name": "Abdel",
  //   "last_name": "Jackett",
  //   "username": "ajackettj",
  //   "duration": "5hr 25min",
  //   "price": "₦1250.97",
  //   "type": "Regular",
  //   "avatar": "https://robohash.org/quidebitispraesentium.png?size=50x50&set=set1"
  // }
]

export const Cards = [
  {
    id: 1,
    name: "Benjamin Adeyemo",
    post: "COO & Co-founder",
    image: userPic8
  },
  {
    id: 2,
    name: "Udo Nwaogbo",
    post: "CTO & Co-founder",
    image: userPic8
  },
  {
    id: 3,
    name: "Ipadeola Abayomi",
    post: "IT Manager",
    image: userPic8
  },
  {
    id: 4,
    name: "Gabriel Ukachukwu",
    post: "CFO",
    image: userPic8
  },
  // {
  //   id: 5,
  //   name: "Philips Durojaiye",
  //   post: "Products & Business Development Lead",
  //   image: userPic8
  // },
  // {
  //   id: 6,
  //   name: "Roseline Oduleke",
  //   post: "COO & Co-founder",
  //   image: userPic8
  // },
  // {
  //   id: 7,
  //   name: "Roseline Oduleke",
  //   post: "COO & Co-founder",
  //   image: userPic8
  // },
  // {
  //   id: 8,
  //   name: "Roseline Oduleke",
  //   post: "COO & Co-founder",
  //   image: userPic8
  // }
]

export const Links = [
  {
    id: 1,
    title: 'Dashboard',
    url: '/dashboard',
    icon: <BsFillHouseDoorFill />
  },
  {
    id: 2,
    title: 'Parcel',
    url: '/parcel',
    icon: <FaTruck />
  },
  {
    id: 3,
    title: 'Billings',
    url: '/billing',
    icon: <FaRegCreditCard />
  },
  {
    id: 4,
    title: 'Notifications',
    url: '/notification',
    icon: <FaBell />
  },
  {
    id: 5,
    title: 'Settings',
    url: '/settings',
    icon: <BsPersonFillGear />
  },
]
