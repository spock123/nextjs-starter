export const fallbackLang = 'en';
export const languages = [fallbackLang, 'da'];
export const defaultNS = 'translation';

export function getOptions(lang = fallbackLang, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLang,
    lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  };
}
