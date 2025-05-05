import { SECOND_BUCKET_MAX_CAPACITY } from '@/constants/bucket';
import type { Bucket as BucketT } from '@/entities/bucket';
import BucketButtons from './bucket-buttons';
import useLanguage from '@/hooks/use-language';

interface BucketProps {
    bucket: BucketT;
}

export default function Bucket({ bucket }: BucketProps) {
    const { t } = useLanguage();

    const { currentWaterQuantity, capacity } = bucket;
    const containerHeightPercent = Math.min((capacity / SECOND_BUCKET_MAX_CAPACITY) * 100, 100);
    const heightPercent = (currentWaterQuantity / capacity) * 100;

    return (
        <div className="flex flex-col items-center w-full md:w-fit md:h-full gap-4">
            <h2 className="text-xl font-semibold text-sky-600 shrink-0 w-full text-center">
                {t('bucket', { count: capacity })}
            </h2>

            <div className="w-40 h-60 flex items-center justify-center overflow-hidden">
                <div
                    className="relative w-full border-4 border-sky-700 rounded-b-lg overflow-hidden bg-white"
                    style={{ height: `${containerHeightPercent}%` }}
                >
                    <div
                        className="absolute bottom-0 w-full bg-sky-500 transition-all duration-500 ease-in-out"
                        style={{ height: `${heightPercent}%` }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold text-sky-900">{currentWaterQuantity}L</span>
                    </div>

                    {Array.from({ length: capacity }, (_, i) => i + 1).map((mark) => (
                        <div
                            key={mark}
                            className="absolute w-4 h-0.5 bg-sky-900/50 left-0"
                            style={{
                                bottom: `${(mark / capacity) * 100}%`,
                            }}
                        />
                    ))}
                </div>
            </div>

            <BucketButtons bucket={bucket} />
        </div>
    );
}
