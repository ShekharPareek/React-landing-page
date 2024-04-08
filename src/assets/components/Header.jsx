import React from 'react';

function Header() {
    return (
        <div className='w-full font-mono relative'>
            <nav className='flex bg-gray-900 text-lg text-white justify-between p-3 px-9 border-b border-slate-200 dark:border-slate-400/20 font-bold fixed top-0 left-0 right-0'>
                <ul className='flex gap-5'>
                    <li className=' hover:text-sky-500 rounded-xl pl-1 pr-1 hover:transition-colors'><a href="#">Home</a></li>
                    <li className=' hover:text-sky-500 rounded-xl pl-1 pr-1 hover:transition-colors'><a href="#">About</a></li>
                    <li className=' hover:text-sky-500 rounded-xl pl-1 pr-1 hover:transition-colors'><a href="#">Media</a></li>
                    <li className=' hover:text-sky-500 rounded-xl pl-1 pr-1 hover:transition-colors'><a href="#">Contact</a></li>
                </ul>
                <div>
                    <input className='rounded-lg focus:outline-none focus:ring focus:border-blue-500 text-black' type="text" />
                    <button className='ml-2'>Search</button>
                </div>
            </nav>
        </div>
    );
}

export default Header;
