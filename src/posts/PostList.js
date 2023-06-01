import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { Text, View } from "react-native";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
  
    const renderPosts = orderedPosts.map((post) => (
      <View key={post.id}>
        <Text>{post.title}</Text>
        <Text>{post.content}</Text>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </View>
    ));
  
    return (
      <View>
        <Text>Posts</Text>
        {renderPosts}
      </View>
    );
  };

export default PostsList;