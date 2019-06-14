import React from 'react';

const Article = ({title,author,text}) => {

    
    return ( 
        <article >
        <h2>{title}</h2>
        <h4>{author}</h4>
        <p>{text} </p>
        </article>
        );
}
 
export default Article;