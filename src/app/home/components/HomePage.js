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
        <form className={styles['search-bar']}>
        <input
            className={styles['search-input']}
            type="search"
            placeholder="Search"
            aria-label="Search"
        />
        <button type="submit" className={styles['search-btn']}>
            <img src="/magnifying.png" width={20} height={20} />
        </button>
        </form>
        <div className={styles['menu-icons']}>
        <a href="/upload">
            <img
            src="/upload.png"
            width={30}
            height={30}
            alt="Upload Video"
            />
        </a>
        <a href="#">
            <img src="/apps.png" width={30} height={30} alt="Apps" />
        </a>
        <a href="#">
            <img
            src="/notifications.png"
            width={30}
            height={30}
            alt="Notifications"
            />
        </a>
        <div className={styles['profile-dropdown']}>
            <a href="#">
            <img
                src="http://unsplash.it/250/150?gravity=center"
                alt="Profile Picture"
            />
            </a>
            <div className={styles['dropdown-content']}>
            <a href="#"></a>
            <a href="channel.html">My Profile</a>
            <a href="#">Settings</a>
            <a href="#">Sign out</a>
            </div>
        </div>
        </div>
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
        <button id="dark-mode-toggle">Toggle Dark Mode</button>
        </section>
    </div>
    <div className={styles.videos}>
        <section className={styles['video-section']}>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail} data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
            <div className={styles['video-bottom-section']}>
            {/* Like button */}
            <button className={styles['like-button']} onClick="likeVideo(this)">
                Like
            </button>
            {/* Comment input */}
            <input
                className={styles['comment-input']}
                type="text"
                placeholder="Add a comment"
            />
            {/* Comment button */}
            <button className={styles['comment-button']} onClick="addComment(this)">
                Comment
            </button>
            </div>
            <div className={styles['comments-section']}>{/* Display comments here */}</div>
        </article>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail} data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail} data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail} data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail} data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail} data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
        </article>
        </section>
        <section className={styles['video-section']}>
        <h2 className={styles['video-section-title']}>
            Trending videos
            <button className={styles['video-section-title-close']}>×</button>
        </h2>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail} data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail} data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail} data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail} data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail} data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail} data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
        </article>
        </section>
        <section className={styles['video-section']}>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail} data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail} data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail} data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail} data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail} data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
        </article>
        <article className={styles['video-container']}>
            <a href="#" className={styles.thumbnail}data-duration="8:24">
            <img
                className={styles['thumbnail-image']}
                src="http://unsplash.it/250/150?gravity=center"
            />
            </a>
            <div className={styles['video-bottom-section']}>
            <a href="#">
                <img
                className={styles['channel-icon']}
                src="http://unsplash.it/36/36?gravity=center"
                />
            </a>
            <div className={styles['video-details']}>
                <a href="#" className={styles['video-title']}>
                Video Title
                </a>
                <a href="#" className={styles['video-channel-name']}>
                Channel Name
                </a>
                <div className={styles['video-metadata']}>
                <span>12k viwes</span>•<span>1 week ago</span>
                </div>
            </div>
            </div>
        </article>
        </section>
    </div>
  </div>
    );
};

export default HomePage;