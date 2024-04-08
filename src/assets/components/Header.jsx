import React from 'react';

function Header() {
    return (
        <div className='w-full'>
            <nav className='flex bg-orange-500 text-lg text-white justify-between p-3 px-9'>
                <div><img src="" alt="" />Logo</div>
                <ul className='flex gap-5'>
                    <li className='hover:bg-white hover:text-white'><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Media</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
