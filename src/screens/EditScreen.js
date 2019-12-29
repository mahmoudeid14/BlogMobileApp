import React,{useState,useContext} from 'react';
import {View,Text,StyleSheet,TextInput,Button} from 'react-native';
import BlogContext from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen= ({navigation})=>{
   const {data,addBlogPost} = useContext(BlogContext);
   
  
   return <BlogPostForm 
   id={navigation.getParam('id')} 
   formType={2} 
   navigation={navigation}/>;


}

const styles = StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginBottom:15,
        padding:5,
        margin:5
    },
    label:{
        fontSize:20,
        marginBottom:5,
        marginLeft:5
    }
});

export default EditScreen;