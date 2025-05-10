'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ImageUpload.module.css';
import IconPlus2 from '../ui/icons/ic-plus2';
import IconEdit from '../ui/icons/ic-edit';
import IcImg from '../ui/imgs/ic-img';

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
        const file = e.target.files?.[0];
        if (!file) return;

        //  파일명 영어/5MB 이하 검증 (옵션)
        if (
            !/^[\w\-]+\.(jpe?g|png|gif)$/i.test(file.name)
        ) {
            alert(
                '영문 파일명(jpg, png, gif)만 가능합니다.'
            );
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            alert('5MB 이하 파일만 업로드 가능합니다.');
            return;
        }

        onFileSelect(file);
    };

    return (
        <div className={styles.wrapper}>
            <label className={styles.uploadBox}>
                {previewUrl ? (
                    <div className={styles.preview}>
                        <Image
                            src={previewUrl}
                            alt="Todo image"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(min-width:1024px) 384px, (min-width:744px) 696px, 343px"
                        />
                    </div>
                ) : (
                    <div className={styles.placeholder}>
                        <IcImg />
                    </div>
                )}
                <div className={styles.button}>
                    {previewUrl ? (
                        <IconEdit />
                    ) : (
                        <IconPlus2 />
                    )}
                </div>
                <input
                    type="file"
                    accept="image/*"
                    className={styles.fileInput}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
}
