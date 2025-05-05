import useLanguage from '@/hooks/use-language';
import useChallengeContext from '@/context/challenge/context';

export default function MovesCount() {
    const { t } = useLanguage();
    const { movesCount } = useChallengeContext();

    return (
        <div className="flex items-center">
            <span className="text-lg font-medium text-sky-700">{t('movements')}: </span>
            <span className="ml-2 text-xl font-bold text-sky-900">{movesCount}</span>
        </div>
    );
}
