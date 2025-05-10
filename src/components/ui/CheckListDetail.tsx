'use client';

import { ChangeEvent } from 'react';
import styles from './styles/CheckListDetail.module.css';
import IconChecked from './icons/ic-checked';
import IconNotChecked from './icons/ic-not-checked';

export interface ChecklistDetailProps {
    /** 항목 텍스트 */
    name: string;
    /** 완료 여부 */
    checked: boolean;
    /** 텍스트 변경 시 */
    onNameChange: (newName: string) => void;
    /** 체크박스 토글 시 */
    onToggle: (checked: boolean) => void;
}

/**
 * 투두 디테일 페이지의 체크리스트 항목 UI.
 * 클릭 가능한 전체 영역, 텍스트 수정, 상태 토글을 지원합니다.
 */
export default function ChecklistDetail({
    name,
    checked,
    onNameChange,
    onToggle,
}: ChecklistDetailProps) {
    const handleCheckboxChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        onToggle(e.target.checked);
    };

    const handleTextChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        onNameChange(e.target.value);
    };

    return (
        <>
            <label
                className={`${styles.container} ${
                    checked
                        ? styles.checked
                        : styles.unchecked
                }`}
            >
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleCheckboxChange}
                    className={styles.checkbox}
                />
                <span className={styles.icon}>
                    {checked ? (
                        <IconChecked />
                    ) : (
                        <IconNotChecked />
                    )}
                </span>
                <input
                    type="text"
                    value={name}
                    onChange={handleTextChange}
                    className={styles.textInput}
                    placeholder="할 일을 입력하세요"
                />
            </label>
        </>
    );
}
