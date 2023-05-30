import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId)

    return <Text>by {author ? author.name : 'Unknown author'}</Text>;
}

export default PostAuthor

const styles = StyleSheet.create({})