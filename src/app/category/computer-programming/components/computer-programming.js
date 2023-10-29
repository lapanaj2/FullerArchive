'use client'

import React from 'react';
import styles from './computer-programming.module.css';

const ComputerProgramming = () => {
    return (
  <div className={styles.whiteBackground}>
    <header className={styles.header}>
        <a href="/home">
        <img
            src="/Fullerarchive.png"
            width={150}
            height={60}
            alt="FullerArchive Logo"
        />
        </a>
    </header>
    <div className={styles.pictures}>
        <section className={styles['picture-section']}>
        <article className={styles['picture-container']}>
            <a href="/basketball-1.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/basketball-1.png"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="#" className={styles['picture-title']}>
                Basketball
                </a>
            </div>
            </div>
        </article>
        <article className={styles['picture-container']}>
            <a href="/basketball-1.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/basketball-1.png"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="#" className={styles['picture-title']}>
                Basketball
                </a>
            </div>
            </div>
        </article>
        <article className={styles['picture-container']}>
            <a href="/basketball-1.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/basketball-1.png"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="#" className={styles['picture-title']}>
                Basketball
                </a>
            </div>
            </div>
        </article>
        <article className={styles['picture-container']}>
            <a href="/basketball-1.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/basketball-1.png"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="#" className={styles['picture-title']}>
                Basketball
                </a>
            </div>
            </div>
        </article>
        <article className={styles['picture-container']}>
            <a href="/basketball-1.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/basketball-1.png"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="#" className={styles['picture-title']}>
                Basketball
                </a>
            </div>
            </div>
        </article>
        <article className={styles['picture-container']}>
            <a href="/basketball-1.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/basketball-1.png"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="#" className={styles['picture-title']}>
                Basketball
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