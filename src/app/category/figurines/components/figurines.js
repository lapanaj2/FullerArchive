import React from 'react';
import styles from '../../components/category.module.css';

const Figurines = () => {
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
            <a href="/93mwpvm2.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/93mwpvm2.png"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/93mwpvm2.png" className={styles['picture-title']}>
                Susuka
                </a>
            </div>
            </div>
        </article>
        <article className={styles['picture-container']}>
            <a href="/64960-1.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/64960-1.png"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/64960-1.png" className={styles['picture-title']}>
                Sam
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
            <a href="/GUEST_381641.png" className={styles.thumbnail}>
            <img
                className={styles['thumbnail-image']}
                src="/GUEST_381641.png"
            />
            </a>
            <div className={styles['picture-bottom-section']}>
            <div className={styles['picture-details']}>
                <a href="/GUEST_381641.png" className={styles['picture-title']}>
                Yuji
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

export default Figurines;