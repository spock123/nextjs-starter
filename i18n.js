module.exports = {
  locales: ['en', 'da'],
  defaultLocale: 'en',
  redirectToDefaultLang: true,
  pages: {
    '*': ['common'],
  },
  logger: true,
  logBuild: true,
  loadLocaleFrom: (locale, namespace) =>
    import(`./locales/${locale}/${namespace}`).then((m) => m.default),
};
