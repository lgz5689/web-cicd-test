const TOKEN = "USER_TOKEN";
const LOCALE = "USER_LOCALE";

export type LocaleString = "zh-CN" | "en-US";

export const getIMToken = () => localStorage.getItem(TOKEN);
export const getLocale = (): LocaleString =>
  (localStorage.getItem(LOCALE) as LocaleString) ||
  window.navigator.language ||
  "en-US";

export const setTMToken = (token: string) => localStorage.setItem(TOKEN, token);
export const setLocale = (locale: string) => localStorage.setItem(LOCALE, locale);
