import React from 'react';
import "./cards.css";

const Card = () => {
    return (
        <div className="articles-container">
            <section className="articles">
                <article>
                    <div className="article-wrapper">
                    <figure>
                        <img src="img1.jpg" alt="" />
                    </figure>
                    <div className="article-body">
                        <h2>Itália</h2>
                        <p>Descrição</p>
                        
                    </div>
                    <a href="#" className="read-more fixed-bottom">
                        Leia mais
                    </a>
                    
                    </div>
                </article>
                <article>
                    <div className="article-wrapper">
                    <figure>
                        <img src="img1.jpg" alt="" />
                    </figure>
                    <div className="article-body">
                        <h2>Itália</h2>
                        <p>Descrição</p>
                        
                    </div>
                    <a href="#" className="read-more fixed-bottom">
                        Leia mais
                    </a>
                    
                    </div>
                </article>
                <article>
                    <div className="article-wrapper">
                    <figure>
                        <img src="img1.jpg" alt="" />
                    </figure>
                    <div className="article-body">
                        <h2>Itália</h2>
                        <p>Descrição</p>
                        
                    </div>
                    <a href="#" className="read-more fixed-bottom">
                        Leia mais
                    </a>
                    
                    </div>
                </article>
            </section>
        </div>
    );
};


export default Card;