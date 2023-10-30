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
                <a href="/category/luxury">
                Luxury
                </a>
            </button>
            <button className={styles.category}>
                <a href="/category/computer-programming">
                Computer Programming
                </a>
            </button>
            {/*<button id="dark-mode-toggle">Toggle Dark Mode</button>*/}
        </section>
    </div>
    <div className={styles.pictures}>
        <section className={styles['picture-section']}>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
                        </a>
                    </div>  
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['picture-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
                        </a>
                    </div>
                </div>
            </article>
        </section>
        <section className={styles['picture-section']}>
            <h2 className={styles['picture-section-title']}>
                Trending Pictures
                <button className={styles['picture-section-title-close']}>×</button>
            </h2>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
                        </a>
                    </div>
                </div>
            </article>
        </section>
        <section className={styles['picture-section']}>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
                        </a>
                    </div>
                </div>
            </article>
            <article className={styles['picture-container']}>
                <a href="#" className={styles.thumbnail}>
                    <img
                        className={styles['thumbnail-image']}
                        src="http://unsplash.it/250/150?gravity=center"
                    />
                </a>
                <div className={styles['picture-bottom-section']}>
                    <div className={styles['picture-details']}>
                        <a href="#" className={styles['picture-title']}>
                        Picture Title
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