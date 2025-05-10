'use client';

import ActionButtons from '@/components/TodoDetail/ActionButtons';
import ImageUpload from '@/components/TodoDetail/ImageUpload';
import MemoField from '@/components/TodoDetail/MemoField';
import NameField from '@/components/TodoDetail/NameField';
import {
    useDeleteTodo,
    useTodoDetail,
    useUpdateTodo,
    useUploadImage,
} from '@/hooks/useTodos';
import { NameFieldState, Todo } from '@/types/todo';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function TodoDetailPage() {
    const id = Number(useParams().itemid);
    const router = useRouter();

    const {
        data: todo,
        isLoading,
        isError,
    } = useTodoDetail(id);
    const updateTodo = useUpdateTodo();
    const deleteTodo = useDeleteTodo();
    const uploadImage = useUploadImage();

    console.log(todo);

    const [currentTodo, setCurrentTodo] = useState<Todo>({
        id: id,
        tenantId: '',
        name: '',
        memo: '',
        imageUrl: '',
        isCompleted: false,
    });

    useEffect(() => {
        if (todo) setCurrentTodo(todo);
    }, [todo]);

    if (isLoading) return <p>로딩 중...</p>;
    if (isError || !todo)
        return <p>존재하지 않는 항목입니다.</p>;

    const handleNameChange = (
        updates: Partial<NameFieldState>
    ) => {
        setCurrentTodo((prev) => ({
            ...prev,
            ...updates,
        }));
    };

    const handleFileSelect = (file: File) => {
        console.log('test', file, currentTodo);
        uploadImage.mutate(file, {
            onSuccess: (url) =>
                setCurrentTodo((prev) => ({
                    ...prev,
                    imageUrl: url,
                })),
        });
    };

    const handleMemoChange = (newMemo: string) => {
        setCurrentTodo((prev) => ({
            ...prev,
            memo: newMemo,
        }));
    };

    const handleSave = () => {
        const { name, memo, imageUrl, isCompleted } =
            currentTodo;

        updateTodo.mutate(
            {
                itemId: id,
                data: { name, memo, imageUrl, isCompleted },
            },
            {
                onSuccess: () => {
                    router.push('/');
                },
            }
        );
    };
    const handleDelete = () => {
        deleteTodo.mutate(id, {
            onSuccess: () => router.push('/'),
        });
    };

    return (
        <div className={styles.column}>
            <NameField
                initialName={currentTodo.name}
                initialCompleted={currentTodo.isCompleted}
                onChange={handleNameChange}
            />
            <ImageUpload
                initialUrl={currentTodo.imageUrl}
                onFileSelect={handleFileSelect}
            />
            <MemoField
                initialMemo={currentTodo.memo}
                onChange={handleMemoChange}
            />
            <ActionButtons
                onSave={handleSave}
                onDelete={handleDelete}
            />
        </div>
    );
}
