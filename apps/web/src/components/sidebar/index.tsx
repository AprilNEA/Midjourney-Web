import clsx from "clsx";
import TriggerList from "./trigger-list";
import SettingIcon from "@/icons/setting.svg";
import { Button } from "@/components/ui-lib";

const Sidebar: React.FC = () => {
  return (
    <div className={clsx("top-0 box-border flex w-64 flex-col bg-second p-5")}>
      <div className="text-base font-bold">Title</div>
      <div className=""></div>
      <div className="">logo</div>
      <div className="grow">
        <TriggerList />
      </div>
      <div className={clsx("bg-gray")}>
        <Button className={clsx("bg-white")}>
          <SettingIcon />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
