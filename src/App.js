import { useState } from "react";
import SideBar from "./components/Sidebar";
import { IoCloseOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { FaQrcode } from "react-icons/fa";
import Header from "./components/Header/Header";
import Card from "./components/Forms/Card";
import Bank from "./components/Forms/Bank";
import MobileMoney from "./components/Forms/MobileMoney";
import { HiHome } from "react-icons/hi";
import { GiPadlock } from "react-icons/gi";
import Transfer from "./components/Forms/Transfer";
import VisaQR from "./components/Forms/QR";

function App() {
  const items = [
    {
      title: "card",
      icon: <CiCreditCard1 size={20} />,
      badge: "",
    },
    {
      title: "bank",
      icon: <CiBank size={20} />,
      badge: "",
    },
    {
      title: "mobile money",
      icon: <CiMoneyBill size={20} />,
      badge: "",
    },
    {
      title: "visa qr",
      icon: <FaQrcode size={20} />,
      badge: "",
    },
    {
      title: "transfer",
      icon: <HiHome size={20} />,
      badge: "New",
    },
  ];
  const [selectedMenu, setSelectedMenu] = useState(items[0].title);
  return (
    <div className=" relative min-h-[100vh] bg-black-rgba flex justify-center items-center">
      <span className=" absolute bottom-16 flex flex-row text-sm">
        <GiPadlock size={20} className="mr-2" />
        <span>
          {" "}
          Secured by <span className=" font-semibold">ADrunkAboki</span>{" "}
        </span>
      </span>
      <div className="h-[58vh] w-[40vw] grid grid-cols-3 bg-white rounded-md  relative">
        <IoCloseOutline size={20} className=" absolute  top-0 right-[-30px]" />

        <div className=" ">
          <SideBar
            items={items}
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
        </div>
        <div className="col-span-2 p-5 bg-white">
          <Header
            logo={
              "https://res.cloudinary.com/ifeanyi/image/upload/v1713455112/mngg6v8aosgunlghaxyy.svg"
            }
            email={"jeon316@icloud.com"}
            currency={"NGN"}
            amount={600}
          />
          <div className="min-h-auto">
            {selectedMenu === "card" && <Card />}
            {selectedMenu === "bank" && <Bank />}
            {selectedMenu === "mobile money" && <MobileMoney />}
            {selectedMenu === "transfer" && (
              <Transfer amount={600} currency={"NGN"} />
            )}
            {selectedMenu === "visa qr" && <VisaQR />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
