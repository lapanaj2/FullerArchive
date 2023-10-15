import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Autour_One } from 'next/font/google';
import styles from './auth.module.css';
import { useRouter } from 'next/navigation';

const autour_one = Autour_One({ subsets: ['latin'], weight: '400' });

export const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push('/home');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className={styles['input-wrapper']}>
                <input 
                    placeholder="Email"
                    className={styles.input} 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={styles['input-wrapper']}>
                <input 
                    placeholder="Password"
                    type="password" 
                    className={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button 
                className={[styles.button, autour_one.className].join(' ')}
                onClick={handleLogin}>Login</button>
        </div>
    )
};