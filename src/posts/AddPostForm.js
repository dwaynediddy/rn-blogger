import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

import { postAdded } from './postsSlice'

const AddPostForm = () => {
    const [ title, setTitle ] = useState("")
    const [ content, setContent ] = useState("")
    const dispatch = useDispatch()

    const handleTitleChange = (text) => {
        setTitle(text);
      };
    
      const handleContentChange = (text) => {
        setContent(text);
      };

      const handleSubmit = () => {
        if(title && content) {
            dispatch(
                postAdded({
                    id: nanoid,
                    title,
                    content
                })
            )
            setTitle("")
            setContent("")
        }
      }

  return (
    <View>
      <Text>Add a new Post</Text>
      <TextInput 
        value={title}
        placeholder='add title'
        onChange={handleTitleChange}
      />
      <TextInput 
        value={content}
        placeholder='add content'
        onChange={handleContentChange}
      />
      <Button 
        title='SUBMIT'
        onPress={handleSubmit}
      />
    </View>
  )
}

export default AddPostForm

const styles = StyleSheet.create({})