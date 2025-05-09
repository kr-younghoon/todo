interface Props {
    onSave: () => void;
    onDelete: () => void;
}

export default function ActionButtons({
    onSave,
    onDelete,
}: Props) {
    return (
        <>
            <button onClick={onSave}>수정 완료</button>
            <button onClick={onDelete}>삭제하기</button>
        </>
    );
}
