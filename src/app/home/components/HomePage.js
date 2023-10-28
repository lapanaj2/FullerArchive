'use client'

import React from 'react';
import styles from './home.module.css';
import { useEffect } from 'react';

const HomePage = () => {
    useEffect(() => {
        // Check if we are running on the client (browser)
        if (typeof window !== 'undefined') {
          // Get the dark mode toggle button
          const darkModeToggle = document.getElementById('dark-mode-toggle');
    
          // Add a click event listener to the button
          darkModeToggle.addEventListener('click', () => {
            // Toggle the 'dark-mode' class on the body
            document.body.classList.toggle('dark-mode');
            // You can also save the user's preference in local storage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
          });
    
          // Check for the user's previous preference in local storage
          const savedDarkMode = localStorage.getItem('darkMode');
    
          // Apply dark mode if the preference is saved
          if (savedDarkMode === 'true') {
            document.body.classList.add('dark-mode');
          }
        }
      }, []);
    
    return (
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="stylesheets/style.css" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link
    href="https://fonts.googleapiscom/css2?family=Roboto.wght@400;700&display=swap"
    rel="stylesheet"
  />
  <title>FullerTube</title>
  <div className={styles.whiteBackground}>
    <header className={styles.header}>
        <a href="index.html">
        <img
            src="/FullerTube.png"
            width={150}
            height={60}
            alt="FullerTube Logo"
            className={styles['fullertube-logo']}
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
        <a href="#">
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
        <button className={styles.category}>Gaming</button>
        <button className={styles.category}>Sports</button>
        <button className={styles.category}>live</button>
        <button className={styles.category}>Podcasts</button>
        <button className={styles.category}>Cars</button>
        <button className={styles.category}>Watched</button>
        <button className={styles.category}>Computer Programming</button>
        <button className={styles.category}>New to you</button>
        <button className={styles.category}>Recently Uploaded</button>
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
</>

    );
};

export default HomePage;