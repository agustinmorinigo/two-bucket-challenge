import ChallengeLayout from '@/components/challenge/layout';
import ChallengeProvider from '@/context/challenge/provider';
import InstructionsDialogProvider from '@/context/instructions-dialog/provider';

export default function Body() {
    return (
        <main className="size-full bg-white p-6 flex items-center justify-center">
            <ChallengeProvider>
                <InstructionsDialogProvider>
                    <ChallengeLayout />
                </InstructionsDialogProvider>
            </ChallengeProvider>
        </main>
    );
}
