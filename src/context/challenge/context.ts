import type { Bucket, BucketType } from '@/entities/bucket';
import { createContext, useContext } from 'react';

export type ChallengeContextType = {
    firstBucket: Bucket;
    secondBucket: Bucket;
    movesCount: number;
    isSolved: boolean;
    resetChallenge: () => void;
    fillBucket: (bucketType: BucketType) => void;
    emptyBucket: (bucketType: BucketType) => void;
    transferWater: (from: BucketType, to: BucketType) => void;
};

export const ChallengeContext = createContext<ChallengeContextType | undefined>(undefined);

const useChallengeContext = () => {
    const context = useContext(ChallengeContext);
    if (!context) {
        throw new Error('useChallengeContext must be used within a ChallengeProvider');
    }
    return context;
};

export default useChallengeContext;
