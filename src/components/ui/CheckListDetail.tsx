'use client';

import { ChangeEvent } from 'react';
import IconCheck from '../ui/icons/ic-check'; // 체크 아이콘 컴포넌트 경로에 맞게 수정
import styles from './styles/ChecklistDetail.module.css';

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
        <div>
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
                    {checked && <IconCheck />}
                </span>
                <input
                    type="text"
                    value={name}
                    onChange={handleTextChange}
                    className={styles.textInput}
                    placeholder="할 일을 입력하세요"
                />
            </label>
        </div>
    );
}
