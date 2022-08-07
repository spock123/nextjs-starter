module.exports = {
  locales: ['en', 'da'],
  defaultLocale: 'en',
  pages: {
    '*': ['common']
  },
  // logger: true,
  loadLocaleFrom: (locale, namespace) =>
    import(`./locales/${locale}/${namespace}`).then((m) => m.default)
};
