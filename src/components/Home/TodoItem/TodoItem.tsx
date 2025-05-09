// components/TodoItem/TodoItem.tsx
'use client';

import { Todo } from '@/types/todo';
import { useUpdateTodo } from '@/hooks/useTodos';
import { useRouter } from 'next/navigation';
import styles from './TodoItem.module.css';

export default function TodoItem({
    id,
    name,
    memo,
    imageUrl,
    isCompleted,
}: Todo) {
    const router = useRouter();
    const { mutate: updateTodo } = useUpdateTodo();

    // 박스 클릭 시 상세페이지로 이동
    const handleNavigate = () => {
        router.push(`/items/${id}`);
    };

    // 체크박스 클릭 시 토글만, 이벤트 전파 차단
    const handleToggle = (
        e: React.MouseEvent<HTMLInputElement>
    ) => {
        e.stopPropagation();
        updateTodo({
            itemId: id,
            data: {
                name,
                memo,
                imageUrl,
                isCompleted: !isCompleted,
            },
        });
    };

    return (
        <div
            className={`${styles.item} ${
                isCompleted
                    ? styles.completed
                    : styles.pending
            }`}
            onClick={handleNavigate}
        >
            <input
                type="checkbox"
                checked={isCompleted}
                onClick={handleToggle}
                readOnly
            />
            <span className={styles.name}>{name}</span>
        </div>
    );
}
