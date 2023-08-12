import { useLocation } from "react-router-dom";
import { sideBarData } from "../../Components/UI/SideBar/SideBarData";

const useGetActiveUrl = () => {
  const location = useLocation();

  const getActive = () => {
    if (location.pathname.split(":")[0] === "/place/")
      return [{ to: "/places" }];
    return sideBarData.filter((sideBar) => sideBar.to === location.pathname);
  };

  return getActive();
};

export default useGetActiveUrl;
