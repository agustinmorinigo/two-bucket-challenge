import type { Bucket } from '@/entities/bucket';

export default function isBucketFilled(bucket: Bucket): boolean {
    return bucket.currentWaterQuantity === bucket.capacity;
}
