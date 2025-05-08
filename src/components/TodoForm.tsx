'use client';

import { useCreateTodo } from '@/hooks/useTodos';
import { useState } from 'react';

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
            <input
                type="text"
                value={text}
                onChange={onChangeInput}
            />
            <button onClick={onClickBtn}>추가하기</button>
        </>
    );
}
