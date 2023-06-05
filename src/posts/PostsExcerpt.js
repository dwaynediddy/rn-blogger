import { StyleSheet, Text, View } from 'react-native'

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {
  return (
    <View>
        <Text>{post.title}</Text>
        <Text>{post.body}</Text>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
    </View>
  )
}

export default PostsExcerpt

const styles = StyleSheet.create({})