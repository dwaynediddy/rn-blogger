import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";
import { StyleSheet, Text, View, Button } from 'react-native'

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕',
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <Button
                title={`${emoji} ${post.reactions[name]}`}
                key={name}
                onPress={() => 
                    dispatch(reactionAdded({ postId: post.id, reaction: name}))
                }
            >
            {emoji} {post.reactions[name]}
            </Button>
            )
        })
        return <Text>{reactionButtons}</Text>
    }

export default ReactionButtons

const styles = StyleSheet.create({})