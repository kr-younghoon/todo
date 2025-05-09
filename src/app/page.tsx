import TodoColumn from '@/components/Home/TodoColumn/TodoColumn';
import TodoForm from '@/components/Home/TodoForm';

export default function Home() {
    return (
        <>
            <div>
                <TodoForm />
            </div>
            <div>
                <TodoColumn />
            </div>
        </>
    );
}
