import React from 'react';
import styles from './button.module.css';
import { Autour_One } from 'next/font/google';
import Link from  'next/link';

const autour_one = Autour_One({ subsets: ['latin'], weight: '400' })

const LoginButton = () => {
  return (
    <Link href="/LoginPage">
        <button className={[styles.button, autour_one.className].join(' ')}>Login</button>
    </Link>
  );
};

export default LoginButton;