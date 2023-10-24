'use client'

import React from 'react';
import styles from './login.module.css';
import { Autour_One } from 'next/font/google';
import { Auth } from './components/auth';

const autour_one = Autour_One({ subsets: ['latin'], weight: '400' });

export default function LoginPage() {
    return (
        <main className={[styles.main, styles.gradientBackground].join(' ')}>
            <div className={styles['login-box']}>
                <Auth />
            </div>
        </main>
    );
}

