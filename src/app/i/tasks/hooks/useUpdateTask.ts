import { taskService } from "@/services/task.service";
import { ITaskResponse, TypeTaskFormState } from "@/types/task.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react";

export const useUpdateTask = (key?: string) => {
    const queryClient = useQueryClient();

    const { mutate: updateTask } = useMutation({
        mutationKey: ['update task', key],
        mutationFn: ({ id, data }: { id: string; data: TypeTaskFormState }) => taskService.updateTask(id, data),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        }
    });

    return { updateTask };

}