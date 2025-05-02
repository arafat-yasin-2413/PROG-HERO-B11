import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {

    const [categoryNews , setCategoryNews] = useState([]);


    const {id} = useParams();
    // console.log(id);

    const data = useLoaderData();

    // console.log(data);


    useEffect(()=>{

        if (parseInt(id) === 0) {
            setCategoryNews(data)
            return;
        }

        else if(parseInt(id) === 1){
            const filteredNews = data.filter((news)=> news.others.is_today_pick === true) 
            setCategoryNews(filteredNews)
            
        }

        else{

            const filteredNews = data.filter((news)=> news.category_id === parseInt(id));
            // console.log(filteredNews);   
            setCategoryNews(filteredNews);
        }



    },[data, id])



    return (
        <div>
            Total {categoryNews.length} news found
        </div>
    );
};

export default CategoryNews;