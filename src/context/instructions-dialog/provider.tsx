import { useState } from 'react';
import { InstructionsDialogContext, type InstructionsDialogContextType } from './context';

const InstructionsDialogProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isOpen, setIsOpen] = useState(true);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen((prev) => !prev);

    const value: InstructionsDialogContextType = {
        isOpen,
        open,
        close,
        toggle,
    };

    return <InstructionsDialogContext.Provider value={value}>{children}</InstructionsDialogContext.Provider>;
};

export default InstructionsDialogProvider;
