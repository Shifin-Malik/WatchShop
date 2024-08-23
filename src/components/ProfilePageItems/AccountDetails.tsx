import { FaMoon } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Card, CardBody, Avatar, Input } from "@material-tailwind/react";

import { IoIosArrowForward ,IoMdHelpCircleOutline} from "react-icons/io";
import { BsPersonFillGear } from "react-icons/bs";
import { MdOutlineHistory } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";

const inputData = [
  {
    icon: BsPersonFillGear,
    label: "Privacy",
  },
  {
    icon: MdOutlineHistory ,
    label: "Purchase History",
  },
  {
    icon: IoMdHelpCircleOutline,
    label: "Help & Support",
  },
  {
    icon: CiSettings,
    label: "Settings",
  },
  {
    icon: FaPersonCirclePlus ,
    label: "Invite a Friend",
  },

 

 
];
function AccountDetails() {
  return (
    <div className="props props-invert fixed top-0 w-full h-auto bg-primary">
      <div className="flex items-center justify-between px-6 py-2 text-secondary">
        <Link to="/">
          <FaArrowLeft className="w-8 h-8 text-secondary " />
        </Link>

        <FaMoon className="w-8 h-8" />
      </div>
      <div className="bg-primary ">
        <Card
          shadow={false}
          className="bg-primary relative grid  h-40 w-full  items-start justify-center overflow-hidden text-center"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <CardBody
            className="relative px-6  md:px-12"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              className="border-2 bg-black w-40 h-40 rounded-full object-cover mt-0"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          </CardBody>
        </Card>

        <div className="flex flex-col bg-primary h-screen w-full items-center mt-[-3rem]">
          <h2 className="font-bold   text-black mb-0">Shifin malik</h2>
          <p className="text-gray-700 mb-2">Shifinmalik@gmail.com</p>
          <input
            className=" bg-yellow-500 text-center rounded-3xl h-10  "
            type="text"
            placeholder="Upgrade to PRO"
          />

<div className="md:w-[1330px] w-80 mt-7 flex flex-col gap-7 md:overflow-y-scroll">
      {inputData.map(({ icon: Icon, label }, i) => (
        <div key={i} className="relative flex-1">
          <Input
            type="text"
            placeholder={label}
            className="!h-14 pl-12 bg-white rounded-full border border-gray-300 text-gray-900 shadow-lg ring-4 ring-transparent placeholder:text-gray-500 !focus:border-gray-900 !focus:ring-gray-900/10" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} success={undefined}          />
          {/* Render dynamic icon */}
          <Icon className="absolute top-4 left-4 text-gray-500 w-6 h-6" />
          <IoIosArrowForward className="absolute top-4 right-4 text-gray-500 w-6 h-6" />
        </div>
      ))}
    </div>
    <div className="md:w-[1330px] w-80 mt-7 flex flex-col gap-7 ">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="Logout"
          className="!h-14 pl-12 bg-white rounded-full border border-gray-300 text-gray-900 shadow-lg ring-4 ring-transparent placeholder:text-gray-500 !focus:border-gray-900 !focus:ring-gray-900/10" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} success={undefined}          />
        <AiOutlineLogout className="absolute top-4 left-4 text-gray-500 w-6 h-6" />
      </div>
     
    </div>

        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
