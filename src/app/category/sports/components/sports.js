'use client'

import React from 'react';
import styles from './sports.module.css';

const Sports = () => {
    return (
  <div className={styles.whiteBackground}>
    <header className={styles.header}>
        <a href="/home">
        <img
            src="/FullerTube.png"
            width={150}
            height={60}
            alt="FullerTube Logo"
            className={styles['fullertube-logo']}
        />
        </a>
    </header>
    <div className={styles.videos}>
        <section className={styles['video-section']}>
        <article className={styles['video-container']}>
            <a href="/basketball-1.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/basketball-1.png"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Basketball
                </a>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="/basketball-1.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/basketball-1.png"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Basketball
                </a>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="/basketball-1.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/basketball-1.png"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Basketball
                </a>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="/basketball-1.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/basketball-1.png"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Basketball
                </a>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="/basketball-1.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/basketball-1.png"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Basketball
                </a>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="/basketball-1.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/basketball-1.png"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
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

export default Sports;