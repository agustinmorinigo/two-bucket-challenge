import { REQUIRED_QUANTITY } from '@/constants/bucket';
import type { Bucket } from '@/entities/bucket';

export default function hasTheRequiredQuantity(bucket: Bucket): boolean {
    return bucket.currentWaterQuantity === REQUIRED_QUANTITY;
}
