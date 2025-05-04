import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useChallengeContext from '@/context/challenge/context';

interface ResetButtonProps {
    showLabel?: boolean;
}

export default function ResetButton({ showLabel = true }: ResetButtonProps) {
    const { resetChallenge } = useChallengeContext();

    return (
        <Button onClick={resetChallenge} variant="outline" className="flex items-center justify-center gap-2">
            <RotateCcw className="h-4 w-4" />
            {showLabel && <span>Reiniciar</span>}
        </Button>
    );
}
