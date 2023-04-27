import React from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
    const { id } = useParams()
    return (
        <div>
            this is item {id}
        </div>
    );
};

export default Item;