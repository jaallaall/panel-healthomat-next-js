import "next-i18next";

import common from "./public/locales/fa/common.json";
import menu from "./public/locales/fa/menu.json";

export declare module "next-i18next" {
  interface Resources {
    common: typeof common;
    menu: typeof menu;
  }
}
