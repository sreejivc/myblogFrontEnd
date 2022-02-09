import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';



  

function Header(props) {
    return (
        <div>
            <nav className="header">
                <h2 className="logo">MY BLOG APPLICATION</h2> {/* JSX*/}
                <div className="articles">
                
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                    <Link className="link" to="/article-list">Articles</Link>
                    <Link className="link" to='/signin'>Login</Link>
                <Link className="link" to="/signup">Sign up</Link>

                   <Link className="link" to="/AddArticle">Add Articles</Link>
                    <Link className="link" to="/UpdateArticle">Update Articles</Link>
  
                </div>
            </nav>
        </div>
    );
}

export default Header; 