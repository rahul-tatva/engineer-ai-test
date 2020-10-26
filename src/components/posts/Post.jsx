import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Post = () => {
    const location = useLocation();

    return (
        <div>
            {location.state.postDetail.map((item) => <p>{item}</p>)}
        </div>
    );
};

export default Post;
