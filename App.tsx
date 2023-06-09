import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { fetchUsers } from './src/users/usersSlice';
import PostsList from './src/posts/PostList';
import AddPostForm from './src/posts/AddPostForm';

store.dispatch(fetchUsers())

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ScrollView>
        <SafeAreaView>
          <AddPostForm />
          <PostsList />
        </SafeAreaView>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
