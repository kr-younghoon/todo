'use client';

import { useCreateTodo } from '@/hooks/useTodos';
import { useState } from 'react';
import SearchBar from '../ui/SearchBar';
import Button from '../ui/Button';
import IconPlus2 from '../ui/icons/ic-plus2';
import styles from './TodoForm.module.css';

export default function TodoForm() {
    const [text, setText] = useState('');
    const createTodo = useCreateTodo();

    const onChangeInput = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setText(e.target.value);
    };

    const onClickBtn = () => {
        if (!text.trim()) return;
        createTodo.mutate({ name: text });
        setText('');
    };
    return (
        <>
            <div className={styles.Search}>
                <SearchBar
                    value={text}
                    onChange={onChangeInput}
                    placeholder="할 일을 입력해주세요"
                />
                <Button
                    variant="add"
                    disabled={!text.trim()}
                    onClick={onClickBtn}
                    className={`fB16`}
                >
                    <IconPlus2 />
                    <p>추가하기</p>
                </Button>
            </div>
        </>
    );
}
