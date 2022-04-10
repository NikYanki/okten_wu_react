import './App.css';
import {Users, Posts, Coments} from './components';


function App() {
    return (
        <div>
            <div className={'wrap'}>
                <div className={'users'}>
                    <Users/>
                </div>
                <div className={'users'}>
                    <Posts/>
                </div>
            </div>
            <Coments/>
        </div>
    );
}

export default App;
