import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Create = () => {  

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('John Doe')
    const [body, setBody] = useState('')
    const [isPending, setIsPanding] = useState(false)
    const navigate = useNavigate()

    const clearForm = () => {
        setIsPanding(false)
        setTitle('')
        setAuthor('John Doe')
        setBody('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const blog = {title, body, author};
        setIsPanding(true)

        fetch('https://blog-server.glitch.me/posts', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            clearForm()
            navigate('/')
        })
    }

    return (
        <div className="create">
            <h1>New Post</h1>
            <form onSubmit={handleSubmit}>
                <label>Post Title</label>
                <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}/>

                <label>Post Content</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} ></textarea>

                <label>Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="John Doe">John Doe</option>
                    <option value="Mary Jane">Mary Jane</option>
                    <option value="Tom Soyer">Tom Soyer</option>
                </select>
                {isPending && <button disabled>Adding Post</button>}
                {!isPending && <button>Create Post</button>}
            </form>
        </div>
    )
}


export default Create