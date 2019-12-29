import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BlogContext from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';
const ShowScreen = ({ navigation }) => {
    const { data, addBlogPost, deletePost } = useContext(BlogContext);
    const blogPost = data.find((item) => item.id === navigation.getParam('id'));
    return <View>
        <Text>
            Title: {blogPost.name}
        </Text>
        <Text>
            Content:   {blogPost.content}
        </Text>
    </View>;
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
            <EvilIcons name="pencil" size={35} />
        </TouchableOpacity>
    }
}
const styles = StyleSheet.create({});

export default ShowScreen;