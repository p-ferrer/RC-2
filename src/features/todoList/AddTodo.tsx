import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

export default function AddTodo(): JSX.Element {
    const dispatch = useDispatch();
    const [text, setText] = React.useState('');

    function handleChange(e: { target: HTMLInputElement; }) {
        setText(e.target.value);
    }

    function handleSubmit(e: any) {
        e.preventDefault()

        if (!text.trim()) {
            return
        }
        dispatch(addTodo(text))

        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={handleChange} />
            <button type="submit">Add Todo</button>
        </form>
    )
}