'use client';

import { NameFieldState } from '@/types/todo';
import { ChangeEvent, useEffect, useState } from 'react';

interface Props {
    initialName: string;
    initialCompleted: boolean;
    onChange: (updates: Partial<NameFieldState>) => void;
}

// 이름 수정 / TODO에 대한 완료 체크
export default function NameField({
    initialName,
    initialCompleted,
    onChange,
}: Props) {
    const [name, setName] = useState(initialName);
    const [isCompleted, setCompleted] = useState(
        initialCompleted
    );

    useEffect(() => {
        setName(initialName);
        setCompleted(initialCompleted);
    }, [initialName, initialCompleted]);

    const onChangeName = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const newName = e.target.value;
        setName(newName);
        onChange({ name: newName });
    };

    const onChangeCheckbox = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const checked = e.target.checked;
        setCompleted(checked);
        onChange({ isCompleted: checked });
    };

    return (
        <div>
            <h2>name field</h2>
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={onChangeCheckbox}
            />
            <input
                type="text"
                value={name}
                onChange={onChangeName}
            />
        </div>
    );
}
