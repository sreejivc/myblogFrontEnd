import React from 'react';
import './About.css';
import myImage from './1.jfif';

function About(props) {
    return (
        <>
            <div className="profile">
            <img src={myImage} alt="Profile" id="pic" />
                <h1>MY BLOG APP</h1>
                <h3>Come..Lets Read something..!!</h3>
            </div>
            <p>let's build a simple Blog app using React to understand how things work. ... It would be a simple blog website with very few functionalities, enabling you to learn better. The features we are going to build into this blog are:- 
                Fetching blogs from a local JSON server and displaying the blogs in list form.</p>
        </>
    );
}

export default About;