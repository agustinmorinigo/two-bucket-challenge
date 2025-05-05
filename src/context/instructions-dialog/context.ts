import { createContext, useContext } from 'react';

export type InstructionsDialogContextType = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};

export const InstructionsDialogContext = createContext<InstructionsDialogContextType | undefined>(undefined);

const useInstructionsDialogContext = () => {
    const context = useContext(InstructionsDialogContext);
    if (!context) throw new Error('useInstructionsDialogContext must be used within InstructionsDialogProvider');
    return context;
};

export default useInstructionsDialogContext;
