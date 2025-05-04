import useChallengeContext from '@/context/challenge/context';
import Bucket from '../bucket';
import TransferButtons from '../transfer-buttons';

export default function ChallengeBody() {
    const { firstBucket, secondBucket } = useChallengeContext();

    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full size-full">
            <Bucket bucket={firstBucket} />
            <TransferButtons />
            <Bucket bucket={secondBucket} />
        </div>
    );
}
