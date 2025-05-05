import useLanguage from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import useInstructionsDialogContext from '@/context/instructions-dialog/context';

export default function InstructionsDialog() {
    const { isOpen, toggle } = useInstructionsDialogContext();
    const { t } = useLanguage();

    return (
        <Dialog open={isOpen} onOpenChange={toggle}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl text-sky-700 text-center">{t('instructions')}</DialogTitle>
                    <div>
                        <p className="my-4">{t('challenge.description')}</p>
                        <div className="my-10">
                            <p className="my-4">{t('challenge.allowedActions.description')}</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>{t('challenge.allowedActions.fill')}</li>
                                <li>{t('challenge.allowedActions.empty')}</li>
                                <li>{t('challenge.allowedActions.transfer')}</li>
                            </ul>
                        </div>
                        <p className="mt-4 font-semibold">{t('challenge.footerDescription')}</p>
                    </div>
                </DialogHeader>
                <DialogClose asChild>
                    <Button className="mt-4 bg-sky-600 hover:bg-sky-700">¡{t('understand')}!</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}
