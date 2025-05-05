import type { FIRST_BUCKET_MAX_CAPACITY, SECOND_BUCKET_MAX_CAPACITY } from '@/constants/bucket';

export type BucketType = 'first' | 'second';

type FirstBucket = {
    currentWaterQuantity: number;
    capacity: typeof FIRST_BUCKET_MAX_CAPACITY;
    type: 'first';
};

type SecondBucket = {
    currentWaterQuantity: number;
    capacity: typeof SECOND_BUCKET_MAX_CAPACITY;
    type: 'second';
};

export type Bucket = FirstBucket | SecondBucket;
