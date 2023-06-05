import { useEffect } from "react";
import { Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt"

const PostsList = () => {
    const dispatch = useDispatch()

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    useEffect(() => {
        if(postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    },[postStatus, dispatch])

    let content;
    if(postStatus === 'loading') {
        content = <Text>Loading...</Text>
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <Text>{error}</Text>
    }
  
    return (
      <View>
        <Text>Posts</Text>
        {content}
      </View>
    );
  };

export default PostsList;