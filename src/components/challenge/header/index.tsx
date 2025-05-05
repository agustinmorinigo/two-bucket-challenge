import { Info } from 'lucide-react';
import useLanguage from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import useInstructionsDialogContext from '@/context/instructions-dialog/context';
import ResetButton from '../reset-button';

export default function ChallengeHeader() {
    const { open } = useInstructionsDialogContext();
    const { t } = useLanguage();

    return (
        <div className="flex flex-col items-center gap-4 w-full shrink-0 md:flex-row md:justify-between">
            <h1 className="text-xl md:text-3xl font-bold text-sky-700">{t('challenge.title')}</h1>
            <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={open}>
                    <Info className="h-5 w-5" />
                </Button>

                <ResetButton showLabel={false} />
            </div>
        </div>
    );
}
