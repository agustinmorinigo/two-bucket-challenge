import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useChallengeContext from '@/context/challenge/context';
import isBucketFilled from '@/utils/is-bucket-filled';
import isBucketEmpty from '@/utils/is-bucket-empty';

export default function TransferButtons() {
    const { firstBucket, secondBucket, transferWater, isSolved } = useChallengeContext();

    return (
        <div className="flex md:flex-col items-center justify-center gap-6 w-full md:w-fit">
            <Button
                onClick={() => transferWater(firstBucket.type, secondBucket.type)}
                variant="outline"
                className="border-sky-600 text-sky-600 hover:bg-sky-50 flex items-center justify-center"
                disabled={isBucketEmpty(firstBucket) || isBucketFilled(secondBucket) || isSolved}
            >
                <ChevronRight className="rotate-90 md:rotate-0" />
                <span>Transferir</span>
            </Button>
            <Button
                onClick={() => transferWater(secondBucket.type, firstBucket.type)}
                variant="outline"
                className="border-sky-600 text-sky-600 hover:bg-sky-50 flex items-center justify-center"
                disabled={isBucketEmpty(secondBucket) || isBucketFilled(firstBucket) || isSolved}
            >
                <ChevronLeft className="rotate-90 md:rotate-0" />
                <span>Transferir</span>
            </Button>
        </div>
    );
}
