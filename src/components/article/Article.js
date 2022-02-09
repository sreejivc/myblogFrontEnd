import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './SampleArticlesDB';
import Error from '../error/Error';
import Comments from './Comments';
import AddComments from './AddComments';

function Article(props) {
    const { name } = useParams();

    // Temporary storage of DB data
    const [articleData, setarticleData] = useState({ upvotes: 0, comments: [] });

    // Matching name parameter
    const article = articleContent.find(i => i.name === name);

    // Backend Connection API Fetch
    useEffect(() => {
        fetchAPI();
    }, [name]);

    async function fetchAPI() {
        const response = await fetch(`http://localhost:5001/api/article/${name}`);
        const body = await response.json();
        console.log(body);
        setarticleData(body);

    }

    // Article Not Exist in DB
    if (!article) return <Error />

    return (
        <div >
            <h1 className='article'>{article.title}</h1>
           
            <br></br> <br></br>
            <p className='desc'>{article.description}</p>
            <Comments comments={articleData.comments} />
            <AddComments name={name} setarticleData={setarticleData} />
        </div>
    );
}

export default Article;