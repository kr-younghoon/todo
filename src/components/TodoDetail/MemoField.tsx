'use client';

import { ChangeEvent, useState, useEffect } from 'react';
import ImgMemo from '@/components/ui/imgs/img-memo';
import styles from './MemoField.module.css';

interface MemoFieldProps {
    initialMemo: string;
    onChange: (memo: string) => void;
}

export default function MemoField({
    initialMemo,
    onChange,
}: MemoFieldProps) {
    const [memo, setMemo] = useState(initialMemo);

    useEffect(() => {
        setMemo(initialMemo);
    }, [initialMemo]);

    const handleChange = (
        e: ChangeEvent<HTMLTextAreaElement>
    ) => {
        const v = e.target.value;
        setMemo(v);
        onChange(v);
    };

    return (
        <div className={styles.wrapper}>
            {/* 배경 SVG */}
            <div className={styles.bgSvg}>
                <ImgMemo />
            </div>

            {/* 실제 콘텐츠 (헤더 + textarea) */}
            <div className={styles.content}>
                <header className={styles.header}>
                    <h3 className={styles.title}>Memo</h3>
                </header>
                <textarea
                    className={styles.textarea}
                    value={memo}
                    onChange={handleChange}
                    placeholder="메모를 입력하세요"
                />
            </div>
        </div>
    );
}
