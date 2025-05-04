import { Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import isBucketFilled from '@/utils/is-bucket-filled';
import isBucketEmpty from '@/utils/is-bucket-empty';
import useChallengeContext from '@/context/challenge/context';
import type { Bucket } from '@/entities/bucket';

interface BucketButtonsProps {
    bucket: Bucket;
}

export default function BucketButtons({ bucket }: BucketButtonsProps) {
    const { fillBucket, emptyBucket, isSolved } = useChallengeContext();
    const { type } = bucket;

    return (
        <div className="flex md:flex-col items-center justify-center gap-2 w-full shrink-0">
            <Button
                onClick={() => fillBucket(type)}
                className="bg-sky-600 hover:bg-sky-700 md:w-full"
                disabled={isBucketFilled(bucket) || isSolved}
            >
                <Droplets className="h-4 w-4" />
                Llenar
            </Button>
            <Button
                onClick={() => emptyBucket(type)}
                variant="outline"
                className="border-sky-600 text-sky-600 md:w-full"
                disabled={isBucketEmpty(bucket) || isSolved}
            >
                Vaciar
            </Button>
        </div>
    );
}
