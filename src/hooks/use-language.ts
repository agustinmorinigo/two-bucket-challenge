import { useTranslation } from 'react-i18next';

export default function useLanguage() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: 'es' | 'en') => {
        i18n.changeLanguage(lang);
    };

    return {
        t,
        i18n,
        changeLanguage,
    };
}
