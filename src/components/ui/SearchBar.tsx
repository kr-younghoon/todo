'use client';

import styles from './styles/SearchBar.module.css';
import { ChangeEventHandler } from 'react';

export interface SearchBarProps {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
}

export default function SearchBar({
    value,
    onChange,
    placeholder,
}: SearchBarProps) {
    return (
        <div className={styles.wrapper}>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`${styles.SearchBar} fR16`}
            />
        </div>
    );
}
