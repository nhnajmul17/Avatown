import React, { useEffect, useState } from 'react';
import AvatarCard from '../AvatarCard/AvatarCard';
import { BiDownArrow } from 'react-icons/bi';

import Filters from '../Filters/Filters';
import Pagination from '../Pagination/Pagination';

const AllAvatar = () => {
    const [wishlist, setWishlist] = useState([]);
    const [filters, setFilters] = useState([]);
    const [gender, setGender] = useState([])
    const [avatars, setAvatars] = useState([]);

    const [currentpage, setCurrentPage] = useState(1);
    const [avatarPerPage] = useState(8);

    useEffect(() => {
        fetch('./avatar.json')
            .then(res => res.json())
            .then(data => setAvatars(data))
    }, [])

    const lastitem = currentpage * avatarPerPage
    const firstItem = lastitem - avatarPerPage
    const currentAvatar = avatars.slice(firstItem, lastitem)


    let content;
    if (currentAvatar.length && (gender.length)) {
        content = currentAvatar
            .filter(item => {
                if (gender.length) {
                    return gender.includes(item.gender)
                }
                else {
                    return item;
                }
            })
            .map((item) => (
                <AvatarCard key={item._id} item={item} wishlist={wishlist} setWishlist={setWishlist}></AvatarCard>
            ))
    } else {
        content = currentAvatar.map(item => <AvatarCard key={item._id} item={item} wishlist={wishlist} setWishlist={setWishlist}></AvatarCard>)
    }


    return (
        <div className='flex flex-row my-5 mx-5'>
            <div className='lg:w-1/6'>
                <Filters setFilters={setFilters} Filters={filters} setGender={setGender} gender={gender}></Filters>
            </div>
            <div className=' lg:w-5/6 '>
                <div className='flex flex-row justify-between'>
                    {
                        filters.length ? <div className="text-sm breadcrumbs">
                            <ul>{filters.map((item, i) => <li key={i}>{item}</li>)}</ul>
                        </div> : <h3 className='text-2xl font-medium'>All Items</h3>
                    }

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
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2'>
                    {content}

                    {/* {
                        currentAvatar.map(item => <AvatarCard key={item._id} item={item} wishlist={wishlist} setWishlist={setWishlist}></AvatarCard>)
                    } */}
                </div>
                <Pagination avatarPerPage={avatarPerPage} totalavatar={avatars.length} currentpage={currentpage} setCurrentPage={setCurrentPage}></Pagination>

            </div>
        </div>
    );
};

export default AllAvatar;