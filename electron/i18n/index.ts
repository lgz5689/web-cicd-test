import { app } from "electron";
import i18n from "i18next";

import * as en from "./resources/en_US";
import * as zh from "./resources/zh_CN";

type TupleUnion<U extends string, R extends unknown[] = []> = {
  [S in U]: Exclude<U, S> extends never
    ? [...R, S]
    : TupleUnion<Exclude<U, S>, [...R, S]>;
}[U];

const ns = Object.keys(en) as TupleUnion<keyof typeof en>;

export const defaultNS = ns[0];

export const initI18n = () => {
  i18n.init({
    ns,
    defaultNS,
    resources: {
      en,
      zh,
    },
    lng: app.getLocale(),
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false,
    },
  });
};

export const changeLanguage = i18n.changeLanguage;
