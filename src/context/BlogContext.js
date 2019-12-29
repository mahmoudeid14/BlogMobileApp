import React, { useState } from 'react';
import jsonServer from '../api/jsonServer';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    //const blogPosts = [{title:'Blog Post #1'},{title:'Blog Post #2'}];
    const [blogPosts, setBlogPosts] = useState([{ title: 'test', content: 'content', id: 1 }]);
    const getBlogPosts = async () => {
        try {
            //test
            await jsonServer.get('/blog/get').then(response => {
                setBlogPosts(response.data);
            })
                .catch(error => {
                    console.log(error);
                });

        }
        catch (er) {
            console.log(er);
        }

    }
    const addBlogPost = async (title, content, callBack) => {
        //setBlogPosts([...blogPosts,{id:Math.floor(Math.random()*99999),title: title,content:content}]);
        try {
            await jsonServer.post('/blog/add', { Name: title, Content: content }).then(response => {
                console.log(response.data);
            })
                .catch(error => {
                    console.log(error);
                });

        }
        catch (er) {
            console.log(er);
        }
        callBack();
    }
    const editBlogPost = async (title, content, id, callBack) => {
        // setBlogPosts(blogPosts.map((item)=>{
        //     return item.id == id ? {id:id,title: title,content:content} : item
        //         // if(item.id == id)
        //         // {
        //         //     return {id:id,title: title,content:content};
        //         // }else return item;
        // }));
        try {
            await jsonServer.post('/blog/edit', { Name: title, Content: content, Id: id }).then(response => {
                console.log(response.data);
            })
                .catch(error => {
                    console.log(error);
                });

        }
        catch (er) {
            console.log(er);
        }
        callBack();
    }
    const deletePost = (id) => {
        //console.log('Delete Post #'+id);
        // setBlogPosts(blogPosts.filter((item)=> item.id !== id));
        try {
            jsonServer.post('/blog/delete', { Id: id }).then(response => {
                console.log(response.data);
                setBlogPosts(response.data);
            })
                .catch(error => {
                    console.log(error);
                });

        }
        catch (er) {
            console.log(er);
        }
    }
    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost, deletePost, editBlogPost, getBlogPosts }}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;