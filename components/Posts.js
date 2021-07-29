import React, { useState } from "react";
import PostComp from "../components/Post";

function PostsComp(props) {
    const [showAddNewPost, setShowAddNewPost] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const addPost = () => {
        setShowAddNewPost(false);
        let id = props.posts[props.posts.length - 1].id + 1;
        props.add({ userId: props.userId, id: id, title: title, body: body });
    };

    // Reverse User Posts And Getting Only The Three First Posts
    let firstThreePosts = props.posts
        .filter((todo) => todo.userId === props.userId)
        .reverse()
        .splice(0, 3);

    let userPosts = firstThreePosts.map((post) => {
        return <PostComp key={post.id} post={post} />;
    });

    return (
        <div className="posts-container">
            {showAddNewPost ? (
                <div className="new_post_container">
                    <div className="new_Post_header">
                        <h2>New Post - User {props.userId}</h2>
                    </div>
                    <div className="new_post">
                        <label htmlFor="title">Title:</label>
                        <input
                            className="title"
                            value={title}
                            type="text"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <br />
                        <label htmlFor="body">Body:</label>
                        <input
                            className="body"
                            value={body}
                            type="text"
                            name="body"
                            onChange={(e) => setBody(e.target.value)}
                        />
                        <br /><br/>
                        <input
                            className="cancel_button"
                            type="button"
                            value="Cancel"
                            onClick={() => setShowAddNewPost(false)}
                        />
                        <input
                            className="add_button"
                            type="button"
                            value="Add"
                            onClick={addPost}
                        />
                        <br />
                    </div>
                </div>
            ) : (
                <div>
                    <div className="posts-header">
                        <h2>Posts - User {props.userId}</h2>
                        <input
                            type="button"
                            value="Add"
                            onClick={() => setShowAddNewPost(true)}
                        />
                    </div>

                    <div className="posts">
                        {firstThreePosts.length !== 0 ? (
                            userPosts
                        ) : (
                            <div>No Posts</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PostsComp;
