'use client'

import React from 'react';
import styles from '../../components/category.module.css';

const Cars = () => {
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
            <a href="/rx7-fd-front-end.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/rx7-fd-front-end.png"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/rx7-fd-front-end.png" className={styles['picture-title']}>
                RX-7 FD
                </a>
            </div>
            </div>
        </article>
        <article className={styles['picture-container']}>
            <a href="/bmw-m3-f80.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/bmw-m3-f80.png"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/bmw-m3-f80.png" className={styles['picture-title']}>
                F80 M3
                </a>
            </div>
            </div>
        </article>
        <article className={styles['picture-container']}>
            <a href="/jzx100-chaser.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/jzx100-chaser.png"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/jzx100-chaser.png" className={styles['picture-title']}>
                JZX100
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
        </section>
        </div>
  </div>
    );
};

export default Cars;