import InstructionsDialog from '@/components/instructions-dialog';
import { Card } from '@/components/ui/card';
import ChallengeBody from '../body';
import ChallengeFooter from '../footer';
import ChallengeHeader from '../header';

export default function WaterBucketChallenge() {
    return (
        <div className="w-full max-w-4xl">
            <Card className="p-6 shadow-xl bg-white/90 backdrop-blur-sm">
                <div className="flex flex-col items-center w-full gap-10">
                    <ChallengeHeader />
                    <ChallengeBody />
                    <ChallengeFooter />
                </div>
            </Card>

            <InstructionsDialog />
        </div>
    );
}
