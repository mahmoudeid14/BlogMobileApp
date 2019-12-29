import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import BlogContext from '../context/BlogContext';
import { Feather, EvilIcons } from '@expo/vector-icons';
import MyHeader from "../components/MyHeader";

const IndexScreen = ({ navigation }) => {

    const { data, addBlogPost, deletePost, getBlogPosts } = useContext(BlogContext);

    useEffect(() => {
        getBlogPosts();
        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });
        return () => {
            listener.remove();
        };
    }, []);



    return (
        <View>


            <FlatList
                data={data}
                keyExtractor={(post) => post.id.toString()}
                renderItem={({ item }) => {
                    return (<TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.name}</Text>


                            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: item.id })}>
                                <EvilIcons name="pencil" size={35} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => deletePost(item.id)}>
                                <Feather style={styles.icon} name="trash" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    )

                }}
            />
        </View>
    );
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} />
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 25
    }
});

export default IndexScreen;