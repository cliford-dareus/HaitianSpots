import { AiOutlineHeart, AiOutlineProfile } from "react-icons/ai";
import { TbMap2 } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
export const sideBarData = [
  {
    id: 1,
    name: "Home",
    to: "/",
    icon: <TbMap2 />,
  },
  {
    id: 2,
    name: "Places",
    to: "/places",
    icon: <AiOutlineProfile />,
  },
  {
    id: 3,
    name: "Favorites",
    to: "/favorites",
    icon: <AiOutlineHeart />,
    
  },
  {
    id: 4,
    name: "Profile",
    to: "/profile",
    icon: <GoLocation />,
  },
];
