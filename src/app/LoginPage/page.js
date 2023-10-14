import React from 'react';
import styles from './login.module.css';


function LoginPage() {
    return (
        <main className={[styles.main, styles.gradientBackground].join(' ')}>
            <div className={styles['login-box']}>
            </div>
        </main>
    );
}

export default LoginPage;