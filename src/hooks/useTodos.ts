import {
    useMutation,
    useQuery,
    useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';

const BASE_URL =
    'https://assignment-todolist-api.vercel.app/api';
const TENANT_ID = 'sullanta0802';

/** 항목 목록 조회
 * [GET] /api/{tenantId}/items
 * @returns Todo 목록 배열
 * [
 *   {
 *     "isCompleted": true,
 *     "name": "string",
 *     "id": 0
 *   }
 * ]
 */
export const useTodos = () =>
    useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const res = await axios.get(
                `${BASE_URL}/${TENANT_ID}/items`
            );
            return res.data;
        },
    });

/** 항목 상세 조회
 * [GET] /api/{tenantId}/items/{itemId}
 * @param itemId 항목 ID
 * @returns 단일 Todo 객체
 * {
 *   "isCompleted": true,
 *   "imageUrl": "string",
 *   "memo": "string",
 *   "name": "string",
 *   "tenantId": "string",
 *   "id": 0
 * }
 */
export const useTodoDetail = (itemId: number) =>
    useQuery({
        queryKey: ['todo', itemId],
        queryFn: async () => {
            const res = await axios.get(
                `${BASE_URL}/${TENANT_ID}/items/${itemId}`
            );
            return res.data;
        },
    });

/** 항목 등록
 * [POST] /api/{tenantId}/items
 * @param data name 문자열
 * @returns 생성된 Todo 객체
 * {
 *   "id": 0,
 *   "tenantId": "string",
 *   "name": "string",
 *   "memo": "string",
 *   "imageUrl": "string",
 *   "isCompleted": false
 * }
 */
export const useCreateTodo = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data: { name: string }) => {
            const res = await axios.post(
                `${BASE_URL}/${TENANT_ID}/items`,
                data
            );
            return res.data;
        },
        onSuccess: (data) => {
            console.log(
                '✅ 항목이 성공적으로 생성되었습니다:',
                data
            );
            queryClient.invalidateQueries({
                queryKey: ['todos'],
            });
        },
        onError: (error) => {
            console.error(
                '❌ 항목 생성 중 에러 발생:',
                error
            );
        },
    });
};

/** 항목 수정
 * [PATCH] /api/{tenantId}/items/{itemId}
 * @param itemId 항목 ID
 * @param data 수정할 필드 (name, memo, imageUrl, isCompleted)
 * @returns 수정된 Todo 객체
 */
export const useUpdateTodo = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({
            itemId,
            data,
        }: {
            itemId: number;
            data: {
                name: string;
                memo: string;
                imageUrl: string;
                isCompleted: boolean;
            };
        }) => {
            const res = await axios.patch(
                `${BASE_URL}/${TENANT_ID}/items/${itemId}`,
                data
            );
            return res.data;
        },
        onSuccess: (data) => {
            console.log(
                '✅ 항목이 성공적으로 수정되었습니다:',
                data
            );
            queryClient.invalidateQueries({
                queryKey: ['todos'],
            });
        },
        onError: (error) => {
            console.error(
                '❌ 항목 수정 중 에러 발생:',
                error
            );
        },
    });
};

/** 항목 삭제
 * [DELETE] /api/{tenantId}/items/{itemId}
 * @param itemId 삭제할 항목 ID
 * @returns
 * {
 *   "message": "string"
 * }
 */
export const useDeleteTodo = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (itemId: number) => {
            const res = await axios.delete(
                `${BASE_URL}/${TENANT_ID}/items/${itemId}`
            );
            return res.data;
        },
        onSuccess: (data) => {
            console.log(
                '🗑️ 항목이 성공적으로 삭제되었습니다:',
                data
            );
            queryClient.invalidateQueries({
                queryKey: ['todos'],
            });
        },
        onError: (error) => {
            console.error(
                '❌ 항목 삭제 중 에러 발생:',
                error
            );
        },
    });
};

/** 이미지 업로드
 * [POST] /api/{tenantId}/images/upload
 * @param image 업로드할 이미지 파일 (5MB 이하)
 * @returns 업로드된 이미지 URL
 * {
 *   "url": "string"
 * }
 */
export const useUploadImage = () =>
    useMutation({
        mutationFn: async (image: File) => {
            const formData = new FormData();
            formData.append('image', image);
            const res = await axios.post(
                `${BASE_URL}/${TENANT_ID}/images/upload`,
                formData,
                {
                    headers: {
                        'Content-Type':
                            'multipart/form-data',
                    },
                }
            );
            return res.data.url;
        },
        onSuccess: (url) => {
            console.log('🖼️ 이미지 업로드 성공:', url);
        },
        onError: (error) => {
            console.error('❌ 이미지 업로드 실패:', error);
        },
    });
