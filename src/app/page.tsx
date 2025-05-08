import TodoForm from '@/components/TodoForm';

export default function Home() {
    return (
        <>
            <div>
                <TodoForm />
            </div>
            <div>
                <div>
                    <h1>TO DO</h1>
                </div>
                <div>
                    <h1>DONE</h1>
                </div>
            </div>
        </>
    );
}
