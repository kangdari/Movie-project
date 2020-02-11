// import React from 'react';
// import './App.css';
// import { HashRouter, Route } from 'react-router-dom';
// import Home from './routes/Home';
// import Detail from './routes/Detail';
// import Search from './routes/Search';

// function App() { 

//     return (
//         <div className="App">
//             <HashRouter>
//                 <Route path="/" component={Home} exact />
//                 <Route path="/movie/:id" component={Detail} />
//                 <Route path="/search" component={Search} />
//             </HashRouter>
//         </div>
//     );
// }

// export default App;

import React from 'react';
import './App.css';
import AutocompleteText from './components/Auto/AutocompleteText';

const App = () => {
    return (
        <div className="App">
            <div className="App-Component">
                <AutocompleteText />
                
            </div>
        </div>
    );
};

export default App;