import React from "react";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation"

function App(){
  return <HashRouter>
    {/* BrowserRouter는 url에 #이 사라지지만 github page에 배포하기 힘듦 */}
    {/* Navigation 안의 Link는 Router안에 있어야 함 */}
    {/* movie-detail에 데이터가 전달될 수 있는 이유는 Route에 있기 때문 */}
    <Navigation/> 
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About} />
    {/* <Route path="/movie/moive-detail" component={Detail}/> */}
    <Route path="/movie/:id" component={Detail}/>
  </HashRouter> 
}

export default App;