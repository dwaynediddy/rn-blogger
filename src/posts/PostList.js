import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { Text, View } from "react-native"
import PostAuthor from "./PostsAuthor";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const renderPosts = posts.map(post =>(
        <View key={post.id}>
            <Text>{post.title}</Text>
            <Text>{post.content}</Text>
            <PostAuthor userId={post.userId} />
        </View>
    ))
    return (
        <View>
            <Text>Posts</Text>
            {renderPosts}
        </View>
    )
}

export default PostsList;