import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { postAdded } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'

const AddPostForm = () => {
    const [ title, setTitle ] = useState("")
    const [ content, setContent ] = useState("")
    const [ userId, setUserId ] = useState("")

    const users = useSelector(selectAllUsers)

    const dispatch = useDispatch()

    const handleTitleChange = (text) => {
        setTitle(text);
      };
    
      const handleContentChange = (text) => {
        setContent(text);
      };
      const handleAuthorChange = (value) => {
        setUserId(value)
      };

      const handleSubmit = () => {
        if(title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle("")
            setContent("")
        }
      }

      const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

      const usersOptions = users.map(user => (
        <Picker.Item key={user.id} label={user.name} value={user.id} />
      ))

  return (
    <View>
      <Text>Add a new Post</Text>
      <TextInput 
        value={title}
        placeholder='add title'
        onChangeText={handleTitleChange}
      />
      <Picker
        selectedValue={userId}
        onValueChange={handleAuthorChange}
        >
      <Picker.Item label="" value={userId} />
        {usersOptions}
      </Picker>
      <TextInput 
        value={content}
        placeholder='add content'
        onChangeText={handleContentChange}
      />
      <Button 
        title='SUBMIT'
        onPress={handleSubmit}
        disabled={!canSave}
      />
    </View>
  )
}

export default AddPostForm

const styles = StyleSheet.create({})