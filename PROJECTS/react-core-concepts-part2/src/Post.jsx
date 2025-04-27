export default function Post({post}){
    return(
        <div className="child-card">
            <h2>Post ID : {post.id}</h2>
            <h4>Title: {post.title}</h4>
            <p>{post.body}</p>
        </div>
    )
}