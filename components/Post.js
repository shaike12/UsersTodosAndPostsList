
function PostComp(props) {
    return (
        <div className="post-item">
            <label htmlFor="title">Title:</label> <p>{props.post.title}</p>
            <label htmlFor="Completed">Body:</label> <p>{props.post.body}</p>
        </div>
    );
}

export default PostComp;
