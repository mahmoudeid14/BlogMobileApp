import React,{useContext} from 'react';
import {StyleSheet} from 'react-native';

import BlogPostForm from '../components/BlogPostForm';
const CreateScreen= ({navigation})=>{
 
   return <BlogPostForm 
   id = {0}
   formType={1} 
   navigation={navigation}/>; 

}

const styles = StyleSheet.create({
 
});

export default CreateScreen;