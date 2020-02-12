import React from 'react';
import './component/navbar/style.css';
import Footer from './component/footer';
import Navbar from './component/navbar';
import Content from './component/content';
import Side from './component/side';

const App = () => {
  return(
    <div>
    <Navbar/>
    <div className="com">
    <Side/>
    <Content/>
    </div>
    <Footer/>
    </div> 
  );
}

// class App extends Component{
//   render(){
//       return(
//           <h1>Nama Saya Ardhi</h1>
//       )
//   }
//}
export default App;