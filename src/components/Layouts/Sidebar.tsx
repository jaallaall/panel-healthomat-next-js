import { Icon } from "@UI";
import ClientOnlyPortal from "@UI/ClientPortal";
import { useMediaQuery, useToggleDrawer } from "hooks";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Menu from "./Menu";

const Layouts: React.FC = (): React.ReactElement => {
  const { t } = useTranslation();
  const matches = useMediaQuery("(min-width:600px)");
  const { state, toggleDrawer } = useToggleDrawer();

  const sidebar = (
    <aside
      className={`sidebar md:shadow flex flex-col transform translate-x-full md:translate-x-0  transition-transform duration-150 ease-in bg-tahiti fixed top-0 bottom-0 start-0 w-72 ${
        state["left"] ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="sidebar-header flex items-center justify-center py-4">
        <Link href="#">
          <a className="inline-flex flex-row items-center">
            <span className="leading-10 text-gray-100 text-2xl font-bold ml-1 uppercase">
              Brandname
            </span>
          </a>
        </Link>
      </div>
      <div className="flex-auto scrollbar p-4 h-full">
        <Menu />
      </div>
      <div className="m-3">
        <button className="p-3 w-full rounded-lg hover:bg-tahiti-dark">
          <Icon name="logout" className="align-middle me-2" />
          <span>{t("logout")}</span>
        </button>
      </div>
    </aside>
  );
  if (!matches) {
    return (
      <ClientOnlyPortal open={state["left"]} selector="#sidebar">
        <div
          className="fixed top-0 bottom-0 left-0 right-0 bg-black/40"
          onClick={toggleDrawer("left", false)}
        ></div>
        {sidebar}
      </ClientOnlyPortal>
    );
  }
  return sidebar;
};

export default Layouts;
