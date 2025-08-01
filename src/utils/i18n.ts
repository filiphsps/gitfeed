/* eslint-disable import/no-unresolved */
import english from '@/i18n/en.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export type i18nKey = keyof typeof english;

const resources = {
    en: { translation: english }
};

const initI18n = async () => {
    let savedLanguage = await AsyncStorage.getItem('language');
    if (!savedLanguage) {
        savedLanguage = getLocales()[0]?.languageCode!;
    }

    // eslint-disable-next-line import/no-named-as-default-member
    i18n.use(initReactI18next).init({
        compatibilityJSON: 'v4',
        resources,
        lng: savedLanguage,
        fallbackLng: 'en',
        supportedLngs: Object.keys(resources),
        cleanCode: true,
        ns: ['translation'],
        defaultNS: 'translation',
        interpolation: {
            escapeValue: false
        }
    });
};

initI18n();

export default i18n;
