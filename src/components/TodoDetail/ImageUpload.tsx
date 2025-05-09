'use client';
import Image from 'next/image';

import { useEffect, useState } from 'react';

interface ImageUploadProps {
    initialUrl?: string;
    onFileSelect: (file: File) => void;
}

export default function ImageUpload({
    initialUrl,
    onFileSelect,
}: ImageUploadProps) {
    const [previewUrl, setPreviewUrl] = useState<
        string | undefined
    >(initialUrl);

    // initialUrl 변경 시 미리보기 업데이트
    useEffect(() => {
        setPreviewUrl(initialUrl);
    }, [initialUrl]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (e.target.files && e.target.files[0]) {
            onFileSelect(e.target.files[0]);
        }
    };

    return (
        <div>
            {previewUrl && (
                <Image
                    src={previewUrl}
                    alt="Todo image"
                    width={100}
                    height={100}
                />
            )}
            <input
                type="file"
                accept="image/*"
                onChange={handleChange}
            />
        </div>
    );
}
