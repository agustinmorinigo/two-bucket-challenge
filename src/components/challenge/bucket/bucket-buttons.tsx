import { Droplets } from 'lucide-react';
import useLanguage from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import useChallengeContext from '@/context/challenge/context';
import type { Bucket } from '@/entities/bucket';
import isBucketEmpty from '@/utils/is-bucket-empty';
import isBucketFilled from '@/utils/is-bucket-filled';

interface BucketButtonsProps {
    bucket: Bucket;
}

export default function BucketButtons({ bucket }: BucketButtonsProps) {
    const { t } = useLanguage();
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
                {t('fill')}
            </Button>
            <Button
                onClick={() => emptyBucket(type)}
                variant="outline"
                className="border-sky-600 text-sky-600 md:w-full"
                disabled={isBucketEmpty(bucket) || isSolved}
            >
                {t('empty')}
            </Button>
        </div>
    );
}
