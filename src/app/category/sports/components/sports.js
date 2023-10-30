'use client'

import React from 'react';
import styles from '../../components/category.module.css';

const Sports = () => {
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
    <div className={styles.pictures}>
        <section className={styles['picture-section']}>
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
            <a href="/baseball.jpg" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/baseball.jpg"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/baseball.jpg" className={styles['picture-title']}>
                Baseball
                </a>
            </div>
            </div>
        </article>
        <article className={styles['picture-container']}>
            <a href="/swimming.jpg" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/swimming.jpg"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/swimming.jpg" className={styles['picture-title']}>
                Swimming
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
            <a href="/soccer.jpg" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/soccer.jpg"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/soccer.jpg" className={styles['picture-title']}>
                Soccer
                </a>
            </div>
            </div>
        </article>
        <article className={styles['picture-container']}>
            <a href="/football.jpg" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/football.jpg"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/football.jpg" className={styles['picture-title']}>
                Football
                </a>
            </div>
            </div>
        </article>
        </section>
        </div>
  </div>
    );
};

export default Sports;