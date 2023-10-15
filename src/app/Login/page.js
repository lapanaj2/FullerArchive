import React from 'react';
import styles from './login.module.css';
import { Autour_One } from 'next/font/google';

const autour_one = Autour_One({ subsets: ['latin'], weight: '400' });

export default function LoginPage() {
    return (
        <main className={[styles.main, styles.gradientBackground].join(' ')}>
            <div className={styles['login-box']}>
                <div className={styles['input-wrapper']}>
                    <input type="text" placeholder="Username" className={styles.input} />
                </div>
                <div className={styles['input-wrapper']}>
                    <input type="password" placeholder="Password" className={styles.input} />
                </div>
                <button className={[styles.button, autour_one.className].join(' ')}>Login</button>
            </div>
        </main>
    );
}