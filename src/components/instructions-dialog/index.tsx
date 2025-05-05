import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import useInstructionsDialogContext from '@/context/instructions-dialog/context';

export default function InstructionsDialog() {
    const { isOpen, toggle } = useInstructionsDialogContext();

    return (
        <Dialog open={isOpen} onOpenChange={toggle}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl text-sky-700">Desafío de los Baldes de Agua</DialogTitle>
                    <div>
                        <p className="my-4">
                            Tienes dos baldes, uno de 3 litros y otro de 5 litros. El objetivo es obtener exactamente 4
                            litros de agua en alguno de ellos.
                        </p>
                        <p className="my-4">Puedes realizar las siguientes acciones:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Llenar completamente cualquier balde.</li>
                            <li>Vaciar completamente cualquier balde.</li>
                            <li>
                                Transferir agua de un balde a otro hasta que el origen quede vacío o el destino lleno.
                            </li>
                        </ul>
                        <p className="mt-4 font-semibold">
                            ¡Intenta resolver el desafío con la menor cantidad de movimientos posible!
                        </p>
                    </div>
                </DialogHeader>
                <DialogClose asChild>
                    <Button className="mt-4 bg-sky-600 hover:bg-sky-700">¡Entendido!</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}
