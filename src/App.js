import logo from './logo.svg';
import './assets/styles/_app.scss';
import { BulletList, Facebook  } from 'react-content-loader'

function App() {
  
// const MyBulletListLoader = () => <BulletList />
  return (
    <div id="ResponsiveComponents" className="App">
      {/* <Facebook /> */}
      <div className="container">
        <div className="items">
          Item 1

        </div>

        <div className="items item-2">
          Item 2
        </div>

        <div className="items item-3">
          Item 3
        </div>

        <div className="items">
          Item 4
        </div>
        {/* Testing */}
        <div className="items">
          Item 5
        </div>
 
      </div>
    
    </div>
  );
}

export default App;
