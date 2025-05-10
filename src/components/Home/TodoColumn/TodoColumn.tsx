'use client';

import { useTodos } from '@/hooks/useTodos';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoColumn.module.css';
import { Todo } from '@/types/todo';
import ImgTodo from '@/components/ui/imgs/img-todo';
import ImgTodoLarge from '@/components/ui/imgs/img-todo-large';
import ImgDone from '@/components/ui/imgs/img-done';
import ImgTodoSmall from '@/components/ui/imgs/img-todo-small';
import ImgDoneLarge from '@/components/ui/imgs/img-done-large';
import ImgDonSmall from '@/components/ui/imgs/img-done-small';

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
                <div className={styles.marginBottom}>
                    <ImgTodo />
                </div>

                {/* {} */}
                {todoList.length === 0 ? (
                    <div className={styles.iconColumn}>
                        <div className={styles.largeIcon}>
                            <ImgTodoLarge />
                            <p>할 일이 없어요.</p>
                            <p>
                                TODO를 새롭게 추가해주세요!
                            </p>
                        </div>
                        <div className={styles.smallIcon}>
                            <ImgTodoSmall />
                            <p>할 일이 없어요.</p>
                            <p>
                                TODO를 새롭게 추가해주세요!
                            </p>
                        </div>
                    </div>
                ) : (
                    todoList.map((item) => (
                        <TodoItem key={item.id} {...item} />
                    ))
                )}
            </div>

            <div className={styles.column}>
                <div className={styles.marginBottom}>
                    <ImgDone />
                </div>

                {doneList.length === 0 ? (
                    <div className={styles.iconColumn}>
                        <div className={styles.largeIcon}>
                            <ImgDoneLarge />
                            <p>아직 다 한 일이 없어요.</p>
                            <p>
                                해야 할 일을 체크해보세요!
                            </p>
                        </div>
                        <div className={styles.smallIcon}>
                            <ImgDonSmall />
                            <p>아직 다 한 일이 없어요.</p>
                            <p>
                                해야 할 일을 체크해보세요!
                            </p>
                        </div>
                    </div>
                ) : (
                    doneList.map((item) => (
                        <TodoItem key={item.id} {...item} />
                    ))
                )}
            </div>
        </div>
    );
}
