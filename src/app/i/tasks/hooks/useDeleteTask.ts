import { taskService } from "@/services/task.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const useDeleteTask = () => {
    const queryClient = useQueryClient()

    const { mutate: deleteTask, isPending: isDeletePending } = useMutation({
        mutationKey: ['delete task'],
        mutationFn: (id: string) => taskService.deleteTask(id),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        }
    })

    return { deleteTask, isDeletePending }
}