import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {

const {addPost} =useContext(PostList)

 const userIdElement= useRef()
 const PostTitleElement= useRef()
 const PostBodyElement= useRef()
 const reactionsElement= useRef()
 const tagsElement= useRef()

const handleSubmit=(event)=>{
  event.preventDefault();
  const userId = userIdElement.current.value;
  const postTitle = PostTitleElement.current.value;
  const postBody = PostBodyElement.current.value;
  const reactions = reactionsElement.current.value;
  const tags = tagsElement.current.value.split(" ");

  userIdElement.current.value = "";
  PostTitleElement.current.value="";
  PostBodyElement.current.value="";
  reactionsElement.current.value="";
  tagsElement.current.value="";

  addPost(userId,postTitle,postBody,reactions,tags)
}
 
 
 return (
    <form className="Create-post" onSubmit={handleSubmit}>
       <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your userId
        </label>
        <input
         
          placeholder="your userId"
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          placeholder="how are you feeling today"
          type="text"
          ref={PostTitleElement}
          className="form-control"
          id="title"
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post content
        </label>
        <textarea
          rows='4'
          placeholder="Tell us more about it"
          type="text"
          ref={PostBodyElement}
          className="form-control"
          id="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          reactions
        </label>
        <input
         
          placeholder="How many people reacted on your post"
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your tags here
        </label>
        <input
         
          placeholder="Please enter tag using space"
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          
        />
      </div>
      
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
