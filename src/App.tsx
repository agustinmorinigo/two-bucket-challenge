import Body from '@/components/layout/body';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import './i18n/config';

export default function App() {
    return (
        <div className="size-full grid grid-rows-[auto_1fr_auto] grid-cols-1">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}
