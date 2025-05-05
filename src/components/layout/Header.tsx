import { PaintBucket } from 'lucide-react';
import useLanguage from '@/hooks/use-language';
import { LanguageSelector } from '../language-selector';

export default function Header() {
    const { t } = useLanguage();

    return (
        <header className="w-full bg-gray-200 p-4 text-center flex gap-4 items-start flex-col md:flex-row md:gap-0 md:items-center md:justify-between">
            <div className="flex items-center justify-center gap-3">
                <h1 className="font-bold text-xl text-sky-700">{t('challenge.title')}</h1>
                <PaintBucket className="h-7 w-7 text-sky-700" />
            </div>
            <div>
                <LanguageSelector />
            </div>
        </header>
    );
}
