import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/outline'

const Header = () => {
    return <header className='sticky p-5 md:px-10 shadow-md grid grid-cols-3' >
        <div className='h-10 relative flex cursor-pointer'>
            <Image layout='fill' src="https://links.papareact.com/qd3" objectFit='contain' objectPosition='left' alt='airbnb' />
        </div>
        {/* search */}
        <div className='flex items-center md:border rounded-3xl py-2 px-3 md:shadow-md'>
            <input className='outline-none bg-transparent flex-1 text-slate-400' placeholder='Search here bich' />
            <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-3xl p-2 cursor-pointer' />
        </div>

        {/* misc */}
    </header>;
};

export default Header;
