import { Link, useLocation } from 'react-router-dom';
import { useContact } from '../context/ContactContext';

export function Header() {
    const location = useLocation();
    const { toggleContact, isContactOpen } = useContact();
    
    const isAbout = location.pathname === '/about';
    const isArchive = location.pathname === '/archive';

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
            <div className="px-12 py-8 flex items-center justify-between max-w-7xl mx-auto">
                <Link to="/" className="text-[#a5d6a7] italic font-semibold text-2xl tracking-tighter font-bristol">ddplata</Link>
                <nav>
                    <ul className="flex items-center gap-16 text-[15px] text-neutral-900">
                        <li>
                            <Link 
                                to="/about" 
                                className={`${isAbout ? 'text-[#a5d6a7]' : 'hover:text-[#a5d6a7]'} transition-colors`}
                            >
                                info
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/archive" 
                                className={`${isArchive ? 'text-[#a5d6a7]' : 'hover:text-[#a5d6a7]'} transition-colors`}
                            >
                                archive
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={toggleContact}
                                className={`transition-colors ${isContactOpen ? 'text-[#a5d6a7] font-bold underline' : 'hover:text-[#a5d6a7]'}`}
                            >
                                contact
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
