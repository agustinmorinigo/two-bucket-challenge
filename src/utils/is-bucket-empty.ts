import type { Bucket } from '@/entities/bucket';

export default function isBucketEmpty(bucket: Bucket): boolean {
    return bucket.currentWaterQuantity === 0;
}
