import CompletedIndicator from './completed-indicator';
import MovesCount from './moves-count';
import ResetButton from '../reset-button';

export default function ChallengeFooter() {
    return (
        <div className="w-full flex flex-col md:flex-row justify-between items-center p-4 bg-sky-50 rounded-lg shrink-0">
            <MovesCount />
            <CompletedIndicator />
            <ResetButton />
        </div>
    );
}
