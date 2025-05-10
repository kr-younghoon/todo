export type ButtonVariant =
    | 'add' // ✚ 추가하기
    | 'delete' // ✕ 삭제하기
    | 'complete' // ✔ 수정 완료
    | 'image'; // ⚲ 이미지 추가 / ✎ 이미지 수정

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** 버튼 스타일 종류 */
    variant?: ButtonVariant;
    /** 텍스트 없이 아이콘만 렌더링할 때 */
    iconOnly?: boolean;
}
