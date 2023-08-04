import { AiOutlineHeart, AiOutlineProfile } from "react-icons/ai";
import { TbMap2 } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
export const sideBarData = [
  {
    id: 's_1',
    name: "Home",
    to: "/",
    icon: <TbMap2 />,
  },
  {
    id: 's_2',
    name: "Places",
    to: "/places",
    icon: <AiOutlineProfile />,
  },
  {
    id: 's_3',
    name: "Favorites",
    to: "/favorites",
    icon: <AiOutlineHeart />,
    
  },
  {
    id: 's-4',
    name: "Profile",
    to: "/profile",
    icon: <GoLocation />,
  },
];
