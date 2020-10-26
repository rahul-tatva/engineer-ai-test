import React, { useEffect, useState } from 'react';
import http from '../../services/httpService';
import { INTERVAL_TIME_IN_SECONDS } from '../../utils/constants';
import MUIDataTable from 'mui-datatables';
import { useHistory } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const history = useHistory();

    useEffect(() => {
        const apiCallWithTimer = setInterval(() => {
            const apiEndPoint = `/search_by_date?tags=${'story'}&page=${pageCount}`;
            http.get(apiEndPoint)
                .then(response => {
                    setPosts((prevPosts) => [...prevPosts, ...response.data.hits]);
                    setPageCount((prevPageCount) => prevPageCount + 1);
                })
                .catch((error) => {
                    console.log((error));
                })
                ;

        }, INTERVAL_TIME_IN_SECONDS);

        return () => clearInterval(apiCallWithTimer);
    });

    const columns = [
        { name: 'title', label: 'Title' },
        { name: 'url', label: 'URL' },
        { name: 'created_at', label: 'Created At' },
        { name: 'author', label: 'Author' },
    ];

    const options = {
        filterType: 'checkbox',
        onRowClick: function (rowData, rowMeta) {
            history.push('/post', { postDetail: rowData });
        },
        rowsPerPageOptions: [5, 10, 15, 20, 100],
        rowsPerPage: 20,
    };

    return (
        <div>
            <MUIDataTable
                title={"Posts List"}
                data={posts}
                columns={columns}
                options={options}
            />
        </div>
    );
};

export default PostList;
