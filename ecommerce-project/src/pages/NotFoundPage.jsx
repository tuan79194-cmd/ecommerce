import { Header } from '../components/Header';
import HomeFavicon from '../../public/images/home-favicon.png';
import './NotFoundPage.css'

export function NotFoundPage() {
    return (
        <>
            <title>404 Page Not Found</title>
            <link rel="icon" type="image/svg+xml" href= { HomeFavicon } />
            
            <Header />

            <div 
                className="not-found-message"
            >
                Page not found
            </div>
        </>
    );
}