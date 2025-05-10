'use client';

import Button from '@/components/ui/Button';
import IconCheck from '@/components/ui/icons/ic-check';
import IconX from '@/components/ui/icons/ic-x';
import styles from './ActionButtons.module.css';

interface Props {
    onSave: () => void;
    onDelete: () => void;
}

export default function ActionButtons({
    onSave,
    onDelete,
}: Props) {
    return (
        <div className={styles.wrapper}>
            <Button variant="complete" onClick={onSave}>
                <IconCheck />
                <p>수정 완료</p>
            </Button>
            <Button variant="delete" onClick={onDelete}>
                <IconX />
                <p>삭제하기</p>
            </Button>
        </div>
    );
}
