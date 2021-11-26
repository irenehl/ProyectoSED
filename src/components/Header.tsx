import { FunctionComponent } from 'react';
import Navbar from '@components/Navbar';

const Header: FunctionComponent = () => {
    return(
        <div className="flex h-screen">
        <Navbar/>
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex justify-between items-center py-4 px-6 bg-dark-red border-b-4 border-pink">
                    <div className="flex items-center"></div>
                    <div>
                        <div className="bg-blue-200">
                            <div className="block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-pink" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546
                                    2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </header>
            </div >
        </div >
    )
}

export default Header;