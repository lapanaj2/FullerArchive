'use client'

import React from 'react';
import styles from '../../components/category.module.css';

const ComputerProgramming = () => {
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
            <a href="/first-page.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/first-page.png"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/first-page.png" className={styles['picture-title']}>
                First Page
                </a>
            </div>
            </div>
        </article>
        <article className={styles['picture-container']}>
            <a href="/auth-component.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/auth-component.png"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/auth-component.png" className={styles['picture-title']}>
                Auth Component
                </a>
            </div>
            </div>
        </article>
        <article className={styles['picture-container']}>
            <a href="/file-structure.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/file-structure.png"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/file-structure.png" className={styles['picture-title']}>
                File Structure
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
            <a href="/car-category.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/car-category.png"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/car-category.png" className={styles['picture-title']}>
                Car Category
                </a>
            </div>
            </div>
        </article>
        <article className={styles['picture-container']}>
            <a href="/favicon.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/favicon.png"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/favicon.png" className={styles['picture-title']}>
                Favicon
                </a>
            </div>
            </div>
        </article>
        </section>
        </div>
  </div>
    );
};

export default ComputerProgramming;