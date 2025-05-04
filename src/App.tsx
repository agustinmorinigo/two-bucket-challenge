import Header from '@/components/layout/Header';
import Body from '@/components/layout/Body';
import Footer from '@/components/layout/Footer';

function App() {
    return (
        <div className="size-full grid grid-rows-[auto_1fr_auto] grid-cols-1">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
