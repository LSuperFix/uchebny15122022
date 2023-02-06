import {Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Posts from './pages/Posts';

function App() {


  return (    
    <div>
      <Routes>
        <Route path='/posts' element = {<Posts />}/>
        <Route path='/about' element = {<About /> }/>
        <Route path='*' element = {<Posts /> }/>
      </Routes>
    </div>
  );
}

export default App;
