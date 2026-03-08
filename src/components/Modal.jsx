import { useEffect, useRef } from "react"

export default function Modal({children, onClose}){
    const dialog = useRef()

    useEffect(()=> {
        dialog.current.showModal()
    }, [])

    return <dialog ref={dialog} onClose={onClose}>
        {children}
    </dialog>
}