'use client'

import { useFormState } from "react-dom"
import { ReactNode, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { actionFunction } from '@/utils/types'


 interface StateType {
    message: string;
 }

 const initialState: StateType = {
    message: '',
 }

 function FormContainer ({ action, children}: { action: actionFunction<StateType>, children: ReactNode}){
    const [state, formAction] = useFormState(action, initialState)
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