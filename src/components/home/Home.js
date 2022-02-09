import React from 'react';
import './Home.css';
import Image from './comimg.jfif';

function Home(props) {
    return (
        <div classname='home'>
             <img src={Image} id="pic" />
            <h1>BLOG APPLICATION</h1>
            <p>Do you know what a blog is? If you don’t, then you’ve come to the right place. In 1994, when blogs began,
 a blog was more of a personal diary that people shared online. In this online journal, you could talk about your daily life or share about things that you were doing. 
Then, people saw an opportunity to communicate information in a new way online. Thus began the beautiful world of blogging.</p>
        </div>
    );
}

export default Home;