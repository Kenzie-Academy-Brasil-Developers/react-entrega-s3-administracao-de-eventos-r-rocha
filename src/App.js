import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import ProductList from "./components/ProductList";
import Confraternization from "./pages/Confraternization";
import Graduation from "./pages/Graduation";
import Wedding from "./pages/Wedding";
import { ConfraternizationProvider } from "./providers/confraternization";
import { GraduationProvider } from "./providers/graduation";
import { WeddingProvider } from "./providers/wedding";

function App() {
  return (
    <div className="App">
      <GraduationProvider>
        <WeddingProvider>
          <ConfraternizationProvider>
            <Menu />
            <Switch>
              <Route exact path="/">
                <ProductList />
              </Route>
              <Route exact path="/graduation">
                <Graduation />
              </Route>
              <Route exact path="/wedding">
                <Wedding />
              </Route>
              <Route path="/confraternization">
                <Confraternization />
              </Route>
            </Switch>
          </ConfraternizationProvider>
        </WeddingProvider>
      </GraduationProvider>
    </div>
  );
}

export default App;
