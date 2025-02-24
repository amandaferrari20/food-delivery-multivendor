import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as Localization from 'expo-localization'
import { Platform } from 'react-native'
import { en } from './languages/en'
import { de } from './languages/de'
import { fr } from './languages/fr'
import { km } from './languages/km'
import { zh } from './languages/zh'
import { ar } from './languages/ar'
import { he } from './languages/he'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const languageResources = {
  en: { translation: en },
  zh: { translation: zh },
  de: { translation: de },
  fr: { translation: fr },
  km: { translation: km },
  ar: { translation: ar },
  he: { translation: he }
}

const getStoredLanguage = async () => {
  const lng = await AsyncStorage.getItem('enatega-language')
  console.log(lng)
  
  const initLng = lng || Localization.locale; // Fallback to device locale if no stored language
  i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: initLng, // Use the stored language or device locale
    fallbackLng: 'en',
    resources: languageResources
  })
  i18next.changeLanguage(initLng); // Apply the initial language
}

getStoredLanguage()


if (Platform.OS === 'ios') {
  i18next.locale = Localization.locale
  i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: i18next.locale,
    fallbackLng: 'en',
    resources: languageResources
  })
  console.log('language:', Localization.locale)
  i18next.changeLanguage(i18next.locale)
}

export default i18next
