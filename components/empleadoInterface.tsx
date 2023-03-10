import { createContext } from 'react'

export interface empleado {
    image: string,
    id: number
    name: string,
    joinedDate: string,
    expireDate: string,
    web: string,
    phone: string
}

export const empleadoContext = createContext<empleado>({
    id: 0,
    image: '',
    name: '',
    joinedDate: '',
    expireDate: '',
    web: '',
    phone: ''
}) 