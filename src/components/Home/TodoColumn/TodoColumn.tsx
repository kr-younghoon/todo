'use client';

import { useTodos } from '@/hooks/useTodos';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoColumn.module.css';
import { Todo } from '@/types/todo';

/**
 * TodoColumn: 할 일과 완료된 항목을 렌더링합니다.
 */
export default function TodoColumn() {
    const { data: todos = [] } = useTodos();

    const [todoList, doneList] = todos.reduce(
        (acc, t) => {
            acc[+t.isCompleted].push(t);
            return acc;
        },
        [[], []] as [Todo[], Todo[]]
    );

    return (
        <div className={styles.columns}>
            <div className={styles.column}>
                <h2>🕒 TO DO</h2>
                {todoList.map((item) => (
                    <TodoItem key={item.id} {...item} />
                ))}
            </div>

            <div className={styles.column}>
                <h2>✅ DONE</h2>
                {doneList.map((item) => (
                    <TodoItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}
