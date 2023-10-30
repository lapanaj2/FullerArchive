'use client'

import React from 'react';
import styles from '../../components/category.module.css';

const Nature = () => {
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
            <a href="/Oaxaca_Monte_Alban.jpg" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/Oaxaca_Monte_Alban.jpg"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="Oaxaca_Monte_Alban.jpg" className={styles['picture-title']}>
                Oaxaca Monte Alban
                </a>
            </div>
            </div>
        </article>
        <article className={styles['picture-container']}>
            <a href="/Parque_Nacional_Iguazu_Argentina.jpg" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/Parque_Nacional_Iguazu_Argentina.jpg"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/Parque_Nacional_Iguazu_Argentina.jpg" className={styles['picture-title']}>
                Parque Nacional Iguazu Argentina
                </a>
            </div>
            </div>
        </article>
        <article className={styles['picture-container']}>
            <a href="/Playa_De_Las_Catedrales_Espana.jpg" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/Playa_De_Las_Catedrales_Espana.jpg"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/Playa_De_Las_Catedrales_Espana.jpg" className={styles['picture-title']}>
                Playa De Las Catedrales Espana
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
        </section>
        </div>
  </div>
    );
};

export default Nature;