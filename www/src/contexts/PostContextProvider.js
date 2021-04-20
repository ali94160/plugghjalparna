import React, { useState, createContext, useEffect } from 'react'

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);


  const fetchPosts = async () => {
    let data = await fetch('/rest/posts')
    data = await data.json();
    setPosts([...data]);
    return data;
  }

  const deletePost = async (id) => {
    let res = await fetch('/rest/posts/' + id, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    })
    res = await res.json();
  }

  const updatePost = async (id, post) => {
    let res = await fetch('/rest/posts/' + id, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(post)
    })
    res = await res.json();
    fetchPosts();
  }


  const addPost = async (postObj) => {
    let res = await fetch('/rest/posts', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(postObj)
    })
    res = await res.json();
    return res;
  }

  useEffect(() => {
    fetchPosts();
  },[]);


  const values = {
    posts,
    setPosts,
    updatePost,
    fetchPosts,
    addPost,
    deletePost
  }

  return (
    <PostContext.Provider value={values}>
      {props.children}
    </PostContext.Provider>
  );

}
