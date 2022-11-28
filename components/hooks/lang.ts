import { useRouter } from 'next/router';
import en from 'lang/locales/en';
import ja from 'lang/locales/ja';

export const useLocale = () => {
  const { locale } = useRouter();
  const t = locale === 'en' ? en : ja;
  return { locale, t };
};
