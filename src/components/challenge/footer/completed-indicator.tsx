import { Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import useChallengeContext from '@/context/challenge/context';

export default function CompletedIndicator() {
    const { isSolved } = useChallengeContext();

    return (
        <div
            className={cn(
                'transition-all duration-300 ease-in-out transform flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full',
                isSolved ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none',
            )}
        >
            <Award className="mr-2 h-5 w-5 text-green-600" />
            <span className="font-bold">¡Desafío completado!</span>
        </div>
    );
}
