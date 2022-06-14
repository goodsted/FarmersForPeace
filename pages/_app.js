import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../lib/createEmotionCache';
import lightTheme from '../styles/theme/theme';

import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import translationEN from '../lib/translations/en.json';
import translationUKR from '../lib/translations/ukr.json';


const clientSideEmotionCache = createEmotionCache();

const resources = {
  en: {
    translation: translationEN
  },
  ukr: {
    translation: translationUKR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },

    keySeperator: false,
    resources
  });

if (i18n.language !== 'en' || i18n.language !== 'ukr') {
  if (i18n.language.slice(0, 2) === 'ukr') {
    i18n.changeLanguage('ukr');
  } else {
    i18n.changeLanguage('en');
  }
}

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;