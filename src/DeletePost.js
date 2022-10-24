const deletePost = (id, callback) => {
    fetch('https://blog-server.glitch.me/posts/' + id, {
        method: 'DELETE'
    }).then(()=>{
        if (typeof callback === "function") {
            callback()
        };
    })
}

export default deletePost