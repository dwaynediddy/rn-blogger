import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { Text, View } from "react-native"

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === user)
    return (
        <View>
            <Text>by { author ? author.name : "unknown author" }</Text>
        </View>
    )
}
export default PostAuthor