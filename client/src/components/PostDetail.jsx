import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useApiUrl } from '../contexts/ApiContext'; // Import useApiUrl


const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const apiUrl = useApiUrl(); // Get API URL from context

  useEffect(() => {
      const fetchPost = async () => {
          try {
              const response = await axios.get(`${apiUrl}/api/posts/${postId}`); // Use apiUrl
              setPost(response.data);
          } catch (error) {
              console.error('Error fetching post:', error);
          }
      };

      fetchPost();
  }, [postId, apiUrl]); // Add apiUrl as a dependency

  if (!post) return <div>Loading...</div>;

  return (
      <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          {/* Add edit and delete functionality if needed */}
      </div>
  );
};

export default PostDetail;
