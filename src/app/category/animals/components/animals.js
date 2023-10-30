'use client'

import React from 'react';
import styles from '../../components/category.module.css';

const Animals = () => {
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
            <a href="/elephants.jpg" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/elephants.jpg"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/elephants.jpg" className={styles['picture-title']}>
                Elephants
                </a>
            </div>
            </div>
        </article>
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
            <a href="/hamster.jpg" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/hamster.jpg"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/hamster.jpg" className={styles['picture-title']}>
                Hamster
                </a>
            </div>
            </div>
        </article>
        <article className={styles['picture-container']}>
            <a href="/raccoon.jpg" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/raccoon.jpg"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/raccoon.jpg" className={styles['picture-title']}>
                Raccoon
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
        </section>
        </div>
  </div>
    );
};

export default Animals;