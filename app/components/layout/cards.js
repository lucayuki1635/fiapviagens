import React from 'react';
import "./cards.css";

const Card = () => {
    return (
        <div className="articles-container">
            <section className="articles">
                <article>
                    <div className="article-wrapper">
                    <figure>
                        <img src="coliseu.jpg" alt="" />
                    </figure>
                    <div className="article-body">
                        <h2>Itália</h2>
                        <p>Coliseu</p>
                        
                    </div>
                    <a href="#" className="read-more fixed-bottom">
                        Leia mais
                    </a>
                    
                    </div>
                </article>
                <article>
                    <div className="article-wrapper">
                    <figure>
                        <img src="alpis.jpg" alt="" />
                    </figure>
                    <div className="article-body">
                        <h2>Suiça</h2>
                        <p>Alpes Suíço</p>
                        
                    </div>
                    <a href="#" className="read-more fixed-bottom">
                        Leia mais
                    </a>
                    
                    </div>
                </article>
                <article>
                    <div className="article-wrapper">
                    <figure>
                        <img src="torre-paris.jpg" alt="" />
                    </figure>
                    <div className="article-body">
                        <h2>França</h2>
                        <p>Torre Eiffel</p>
                        
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