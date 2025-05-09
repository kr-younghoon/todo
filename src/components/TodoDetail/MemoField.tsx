'use client';
import { ChangeEvent, useState, useEffect } from 'react';

interface MemoFieldProps {
    initialMemo: string;
    onChange: (memo: string) => void;
}

export default function MemoField({
    initialMemo,
}: MemoFieldProps) {
    const [memo, setMemo] = useState(initialMemo);

    // initialMemo 변경 시 상태 동기화
    useEffect(() => {
        setMemo(initialMemo);
    }, [initialMemo]);

    return (
        <textarea
            value={memo}
            onChange={(
                e: ChangeEvent<HTMLTextAreaElement>
            ) => setMemo(e.target.value)}
        />
    );
}
