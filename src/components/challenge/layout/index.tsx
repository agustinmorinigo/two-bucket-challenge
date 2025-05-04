import { Card } from '@/components/ui/card';
import InstructionsDialog from '@/components/instructions-dialog';
import ChallengeHeader from '../header';
import ChallengeFooter from '../footer';
import ChallengeBody from '../body';

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
