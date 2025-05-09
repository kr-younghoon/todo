'use client';

import ImageUpload from '@/components/TodoDetail/ImageUpload';
import NameField from '@/components/TodoDetail/NameField';
import {
    useTodoDetail,
    useUploadImage,
} from '@/hooks/useTodos';
import { NameFieldState, Todo } from '@/types/todo';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function TodoDetailPage() {
    const id = Number(useParams().itemid);
    const {
        data: todo,
        isLoading,
        isError,
    } = useTodoDetail(id);
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

    return (
        <div>
            <h2>TODO DETAIL - {id}</h2>
            <NameField
                initialName={currentTodo.name}
                initialCompleted={currentTodo.isCompleted}
                onChange={handleNameChange}
            />
            <ImageUpload
                initialUrl={currentTodo.imageUrl}
                onFileSelect={handleFileSelect}
            />
        </div>
    );
}
