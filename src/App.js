import PostList from './components/posts/PostList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Post from './components/posts/Post';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/post">
            <Post />
          </Route>
          <Route exact path="/">
            <PostList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
