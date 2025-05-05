import type { Bucket, BucketType } from '@/entities/bucket';
import hasTheRequiredQuantity from '@/utils/has-the-required-quantity';
import { useEffect, useState } from 'react';
import { ChallengeContext } from './context';

const ChallengeProvider = ({ children }: { children: React.ReactNode }) => {
    const [bucketsInfo, setBucketsInfo] = useState<Record<BucketType, Bucket>>({
        first: {
            currentWaterQuantity: 0,
            capacity: 3,
            type: 'first',
        },
        second: {
            currentWaterQuantity: 0,
            capacity: 5,
            type: 'second',
        },
    });

    const [movesCount, setMovesCount] = useState(0);
    const [isSolved, setIsSolved] = useState(false);

    useEffect(() => {
        const anyHasTheRequiredQuantity = Object.values(bucketsInfo).some(hasTheRequiredQuantity);
        setIsSolved(anyHasTheRequiredQuantity);
    }, [bucketsInfo]);

    const updateWaterQuantity = (type: BucketType, newQuantity: number): void => {
        setMovesCount(movesCount + 1);

        setBucketsInfo((prev) => ({
            ...prev,
            [type]: {
                ...prev[type],
                currentWaterQuantity: newQuantity,
            },
        }));
    };

    const resetChallenge = (): void => {
        updateWaterQuantity('first', 0);
        updateWaterQuantity('second', 0);
        setMovesCount(0);
        setIsSolved(false);
    };

    const fillBucket = (type: BucketType): void => {
        updateWaterQuantity(type, bucketsInfo[type].capacity);
    };

    const emptyBucket = (type: BucketType): void => {
        updateWaterQuantity(type, 0);
    };

    const transferWater = (from: BucketType, to: BucketType): void => {
        const fromBucket = bucketsInfo[from];
        const toBucket = bucketsInfo[to];

        const availableSpace = toBucket.capacity - toBucket.currentWaterQuantity;
        const waterToTransfer = Math.min(fromBucket.currentWaterQuantity, availableSpace);

        if (waterToTransfer > 0) {
            updateWaterQuantity(from, fromBucket.currentWaterQuantity - waterToTransfer);
            updateWaterQuantity(to, toBucket.currentWaterQuantity + waterToTransfer);
        }
    };

    return (
        <ChallengeContext.Provider
            value={{
                firstBucket: bucketsInfo.first,
                secondBucket: bucketsInfo.second,
                movesCount,
                isSolved,
                resetChallenge,
                fillBucket,
                emptyBucket,
                transferWater,
            }}
        >
            {children}
        </ChallengeContext.Provider>
    );
};

export default ChallengeProvider;
