import React, { useState} from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    } 
    return (
        <section className='search'>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    className='form-control' 
                    placeholder='Search characters' 
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus 
                />
            </form>            
        </section>
    )
}

export default Search;