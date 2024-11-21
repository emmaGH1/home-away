'use client'

import { useActionState } from "react"
import { ReactNode, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { actionFunction, StateType } from '@/utils/types'

 const initialState: StateType = {
    message: '',
 }

 function FormContainer ({ action, children}: { action: actionFunction<StateType>, children: ReactNode}){
    const [state, formAction] = useActionState(action, initialState)
    const {toast} = useToast()

    useEffect(() => {
       if (state.message) {
        toast({ description: state.message })
       }
    }, [state])
    return <form action={formAction}>
        {children}
    </form>
 }

 export default FormContainer