import useLanguage from '@/hooks/use-language';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="w-full bg-gray-200 p-4 text-center">
            <p>{t('developedBy')} Agustin Morinigo</p>
        </footer>
    );
}
