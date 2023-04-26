import React, { useEffect, useState } from 'react';
import AvatarCard from '../AvatarCard/AvatarCard';
import { BiDownArrow } from 'react-icons/bi';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

const AllAvatar = () => {
    const [wishlist, setWishlist] = useState([]);
    const [avatars, setAvatars] = useState([])
    useEffect(() => {
        fetch('./avatar.json')
            .then(res => res.json())
            .then(data => setAvatars(data))
    }, [])

    return (
        <div className='flex flex-row my-5 mx-5'>
            <div className='w-1/5'>

            </div>
            <div className=' w-4/5 '>
                <div className='flex flex-row justify-between'>
                    <h3 className='text-2xl font-medium'>All Items</h3>
                    <div className="dropdown dropdown-bottom">
                        <label tabIndex={0} className="">
                            <p className="badge badge-outline font-medium">Sort by Featured <BiDownArrow /></p>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32">
                            <li className='text-sm '>Price: Low to High</li>
                            <li className='text-sm '>Price: High to Low</li>
                            <li className='text-sm '>Customer Review</li>
                            <li className='text-sm '>New</li>
                            <li className='text-sm '>Polygon: Low to High</li>
                            <li className='text-sm '>Polygon: High to Low</li>
                        </ul>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-2'>

                    {
                        avatars.map(item => <AvatarCard key={item._id} item={item} wishlist={wishlist} setWishlist={setWishlist}></AvatarCard>)
                    }
                </div>
                <div className="btn-group flex justify-center my-2">
                    <button className="mx-2"> <FaLessThan /></button>
                    <button className="btn btn-outline ">1</button>
                    <button className="btn btn-outline">2</button>
                    <button className="mx-2"> <FaGreaterThan /></button>
                </div>

            </div>
        </div>
    );
};

export default AllAvatar;