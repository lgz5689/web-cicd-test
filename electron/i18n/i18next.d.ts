import { defaultNS } from ".";
import * as en from "./resources/en_US";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof en;
  }
}
