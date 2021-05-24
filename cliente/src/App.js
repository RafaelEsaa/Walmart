import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './layout/Header'
import Dashboard from './pages/Dashboard'
import ShoppingState from './context/shoppingCart/shoppingCartState'

const App = () => {
    return (
        <ShoppingState>
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/">
                            <Dashboard/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ShoppingState>
    )
}

export default App;
