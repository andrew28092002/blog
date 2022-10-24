import { useNavigate, useParams } from "react-router-dom"
import useFetch from "./useFetch"
import deletePost from "./DeletePost"

const BlogDetails = () => {
    const {id} = useParams()
    const {error, data: blog, isLoading} = useFetch(`https://blog-server.glitch.me/posts/${id}`)
    const navigate = useNavigate()

    const afterDelete = () => {
        navigate('/')
    }

    return (
        <div className="blog-details">
            {error && <div className='loading'>{error}</div>}
            { isLoading && <h3 className='loading'>Loading...</h3>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p className="author">Written by: {blog.author}</p>
                    <div className="blog-body">{blog.body}</div>
                    <button onClick={() => deletePost(blog.id, afterDelete)} className="btn-delete">Delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails