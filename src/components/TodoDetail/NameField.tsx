'use client';

import { NameFieldState } from '@/types/todo';
import { useEffect, useState } from 'react';

interface Props {
    initialName: string;
    initialCompleted: boolean;
}

// 이름 수정 / TODO에 대한 완료 체크
export default function NameField({
    initialName,
    initialCompleted,
}: Props) {
    const [state, setState] = useState<NameFieldState>({
        name: initialName,
        isCompleted: initialCompleted,
    });

    useEffect(() => {
        setState({
            name: initialName,
            isCompleted: initialCompleted,
        });
    }, [initialName, initialCompleted]);

    return (
        <div>
            <h2>name field</h2>
            <input
                type="checkbox"
                checked={state.isCompleted}
            />
            <input type="text" value={state.name} />
        </div>
    );
}
