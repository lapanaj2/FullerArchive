'use client'

import React from 'react';
import styles from './home.module.css';

const HomePage = () => {
    return (
  <div className={styles.whiteBackground}>
    <header className={styles.header}>
        <a href="/home">
            <img
                src="/FullerArchive.png"
                width={150}
                height={60}
                alt="FullerArchive Logo"
            />
        </a>
    </header>
    <div className={styles.categories}>
        <section className={styles['category-section']}>
            <button className={styles.category}>
                <a href="/category/fullerton">
                Fullerton
                </a>
            </button>
            <button className={styles.category}>
                <a href="/category/nature">
                Nature
                </a>
            </button>
            <button className={styles.category}>
                <a href="/category/cars">
                Cars
                </a>
            </button>
            <button className={styles.category}>
                <a href="/category/animals">
                Animals
                </a>
            </button>
            <button className={styles.category}>
                <a href="/category/sports">
                Sports
                </a>
            </button>
            <button className={styles.category}>
                <a href="/category/figurines">
                Figurines
                </a>
            </button>
            <button className={styles.category}>
                <a href="/category/computer-programming">
                Computer Programming
                </a>
            </button>
        </section>
    </div>
    <div className={styles.pictures}>
        <section className={styles['picture-section']}>
            <h2 className={styles['picture-section-title']}>
                Trending Pictures
            </h2>
            <article className={styles['picture-container']}>
                <a href="/992_GT3RS.png" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="/992_GT3RS.png"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="/992_GT3RS.png" className={styles['picture-title']}>
                        992 GT3RS
                        </a>
                    </div>  
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="/Fraser_Island.jpg" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="/Fraser_Island.jpg"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="/Fraser_Island.jpg" className={styles['picture-title']}>
                        Fraser Island
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="/basketball.jpg" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="/basketball.jpg"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="/basketball.jpg" className={styles['picture-title']}>
                        Basketball
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="/lemur.jpg" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="/lemur.jpg"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="/lemur.jpg" className={styles['picture-title']}>
                        Lemur
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="/k1931r1dpqm2.png" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="/k1931r1dpqm2.png"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="/k1931r1dpqm2.png" className={styles['picture-title']}>
                        Luffy
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="/IMG_4749.jpg" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="/IMG_4749.jpg"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="/IMG_4749.jpg" className={styles['picture-title']}>
                        Laguna Lake Park
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="/f2005.png" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="/f2005.png"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="/f2005.png" className={styles['picture-title']}>
                        F2005
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="/Puerto_Vallarta.jpg" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="/Puerto_Vallarta.jpg"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="/Puerto_Vallarta.jpg" className={styles['picture-title']}>
                        Puerto Vallarta
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="/eagle.jpg" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="/eagle.jpg"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="/eagle.jpg" className={styles['picture-title']}>
                        Eagle
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="/emerald-lake.jpg" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="/emerald-lake.jpg"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="/emerald-lake.jpg" className={styles['picture-title']}>
                        Emerald Lake
                        </a>
                    </div>
                </div>
            </article>
        </section>
        <section className={styles['picture-section']}>
            <article className={styles['picture-container']}>
                <a href="/squirrel.jpg" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="/squirrel.jpg"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="/squirrel.jpg" className={styles['picture-title']}>
                        Squirrel
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="/65725-1.png" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="/65725-1.png"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="/65725-1.png" className={styles['picture-title']}>
                        Spot
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="/amg-gt.png" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="/amg-gt.png"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="/amg-gt.png" className={styles['picture-title']}>
                        AMG GT
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="/categories.png" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="/categories.png"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="/categories.png" className={styles['picture-title']}>
                        Categories
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="/volleyball.jpg" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="/volleyball.jpg"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="/volleyball.jpg" className={styles['picture-title']}>
                        Volleyball
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="/one-piece-portgas-d-ace.png" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="/one-piece-portgas-d-ace.png"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="/one-piece-portgas-d-ace.png" className={styles['picture-title']}>
                        Ace
                        </a>
                    </div>
                </div>
            </article>
        </section>
    </div>
</div>
    );
};

export default HomePage;