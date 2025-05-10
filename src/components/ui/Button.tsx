import styles from './styles/Button.module.css';

type ButtonVariant =
    | 'add' // 추가하기
    | 'delete' // 삭제하기
    | 'complete' // 수정 완료
    | 'image'; // 이미지 추가/수정

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** 버튼 종류 (add, delete, complete, image) */
    variant?: ButtonVariant;
}

export default function Button({
    variant = 'add',
    disabled = false,
    children,
    className,
    ...rest
}: ButtonProps) {
    const classes = [
        styles.btn,
        styles[`btn--${variant}`],
        disabled ? styles['btn--disabled'] : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <>
            <button
                className={classes}
                disabled={disabled}
                {...rest}
            >
                {children}
            </button>
        </>
    );
}
