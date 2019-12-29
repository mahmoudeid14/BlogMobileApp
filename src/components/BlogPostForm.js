import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import BlogContext from '../context/BlogContext';

const BlogPostForm = ({ formType, navigation, id }) => {

    const { data, addBlogPost, editBlogPost } = useContext(BlogContext);
    let blogPost = null;
    if (formType === 2) {
        blogPost = data.find((item) => item.id === id);
    }
    const [title, setTitle] = useState(blogPost != null ? blogPost.name : '');
    const [content, setContent] = useState(blogPost != null ? blogPost.content : '');

  

    return (<View>
        {formType === 1 ? <Text style={styles.label}>Enter Title</Text> : <Text style={styles.label}>Enter New Title</Text>}

        <TextInput style={styles.input} onChangeText={(text) => { setTitle(text) }} value={title} />

        {formType === 1 ? <Text style={styles.label}>Enter Content</Text> : <Text style={styles.label}>Enter New Content</Text>}

        <TextInput style={styles.input} onChangeText={(text) => { setContent(text) }} value={content} />

        <Button title="Save Blog Post" onPress={() => {
            if (formType === 1) {
                addBlogPost(title, content, () => {
                    navigation.navigate('Index');
                });
            } else if (formType === 2) {
                editBlogPost(title, content, id, () => {
                    navigation.pop();
                });
            }
           
        }} />
    </View>);


}
BlogPostForm.defualtProps = {
    initialValues: {
        title: '',
        content: ''
    }
}
const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default BlogPostForm;