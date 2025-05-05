import { Globe } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import useLanguage from '@/hooks/use-language';

export const LanguageSelector = () => {
    const { i18n, changeLanguage } = useLanguage();

    return (
        <Select value={i18n.language} onValueChange={changeLanguage}>
            <SelectTrigger className="bg-white">
                <Globe className="h-4 w-4" />
            </SelectTrigger>
            <SelectContent className="w-fit">
                <SelectItem value="es">Es</SelectItem>
                <SelectItem value="en">En</SelectItem>
            </SelectContent>
        </Select>
    );
};
