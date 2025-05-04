import useChallengeContext from '@/context/challenge/context';

export default function MovesCount() {
    const { movesCount } = useChallengeContext();

    return (
        <div className="flex items-center">
            <span className="text-lg font-medium text-sky-700">Movimientos: </span>
            <span className="ml-2 text-xl font-bold text-sky-900">{movesCount}</span>
        </div>
    );
}
