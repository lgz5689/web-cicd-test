import * as en from "./resources/en_US";
import { defaultNS } from ".";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof en;
  }
}
