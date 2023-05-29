import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { Text, View } from "react-native"

const PostsList = () => {
    const posts = useSelector(selectAllPosts);
  
    const renderPosts = posts?.map((post) => (
      <View key={post.id}>
        <Text>{post.title}</Text>
        <Text>{post.content.substring(0, 100)}</Text>
      </View>
    ));
  
    return (
      <View>
        <Text>Posts</Text>
        {renderPosts || <Text>No posts available</Text>}
      </View>
    );
  };
  
  export default PostsList;