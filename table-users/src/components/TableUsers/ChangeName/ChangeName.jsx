
import { updateNameUser } from "../../../redux/actions"
import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'

export function ChangeName({ id, name }) {

    const [editName, setEditName] = useState('')
    const [editOpen, setEditOpen] = useState(false)

    const dispatch = useDispatch()

    const handleEdit = (name) => {
        setEditOpen((prev) => !prev)
        setEditName(name)
    }


    const handleUpdateName = (id) => {
        dispatch(updateNameUser(id, editName))
        setEditOpen(null)
        setEditName('')
    }

    const handleKeyDown = (e, id) => {
        if (e.key === 'Enter') {
            handleUpdateName(id)
        }
    }

    if (editOpen) {
        return <input
            type='text'
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, id)}
            autoFocus
        >
        </input>
    }

    return <span
        onClick={() => handleEdit(name)}>
        {
            name
        }
    </span>

}