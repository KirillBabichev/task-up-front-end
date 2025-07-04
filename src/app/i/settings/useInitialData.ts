import useProfile from "@/hooks/useProfile";
import { TUserForm } from "@/types/auth.types";
import { useEffect } from "react";
import { UseFormReset } from "react-hook-form";


export function useInitialData(reset: UseFormReset<TUserForm>) {
    const { data, isSuccess } = useProfile()

    useEffect(() => {
        if (isSuccess && data) {
            reset({
                email: data.user.email,
                name: data.user.name,
                breakInterval: data.user.breakInterval,
                intervalsCount: data.user.intervalsCount,
                workInterval: data.user.workInterval
            })
        }
    }, [isSuccess])
}
