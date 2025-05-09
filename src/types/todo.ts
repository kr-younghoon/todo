export interface Todo {
    id: number;
    tenantId: string;
    name: string;
    memo: string;
    imageUrl: string;
    isCompleted: boolean;
}

export type TodoFormData = Pick<
    Todo,
    'name' | 'memo' | 'imageUrl' | 'isCompleted'
>;

export interface UpdateTodoPayload {
    itemId: number;
    data: TodoFormData;
}
