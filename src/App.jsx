import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux';
// import Delete from './functionalComponents/Axios/delete';
// import Patch from './functionalComponents/Axios/patch';
// import Post from './functionalComponents/Axios/post';
// import Put from './functionalComponents/Axios/put';
// import Get from './functionalComponents/Axios/Get';

// import A from './functionalComponents/Axios/A';
//  import B from './functionalComponents/Axios/B';
// import { store } from './functionalComponents/useState/GlobalVariables/redux/App';
// import One from './functionalComponents/useState/GlobalVariables/redux/One';
// import SignUp from './functionalComponents/ConditionalRendering/SignUp';
// import Login from './functionalComponents/ConditionalRendering/Login';
// import Profile from './functionalComponents/ConditionalRendering/Profile';
// import X from './functionalComponents/react.Memo/X.jsx';
// import Y from './functionalComponents/react.Memo/Y.jsx';
// import Z from './functionalComponents/react.Memo/Z.jsx';
// import A1 from './functionalComponents/useMemo/A1.jsx';
// import B from './functionalComponents/layout/higher order component/B';
// import A from './functionalComponents/layout/higher order component/one'
// import Header from './functionalComponents/layout/higher order component/header';
// import Footer from './functionalComponents/layout/higher order component/footer';
// import Layout from './functionalComponents/layout/higher order component/layout';
//  import A from './functionalComponents/callback Hook/A';
// import B from './functionalComponents/callback Hook/B.jsx';
// import A from './functionalComponents/useMemo/A.jsx';
// import One from './functionalComponents/UseEffect/A';


function App() {
  const [state, setState] = useState(true)

  return (
    <>
    {/* <Provider store={store}>
      <One/>
    </Provider> */}
    {/* <Provider store={store}>
      <Login/>
      <SignUp/>      
    </Provider>  */}
    {/* <Profile/> */}
    {/* <One/> */}
     {/* <button onClick={()=>setState(!state)}>click</button> */}
    {/* <Header/> 
    <Layout value={A}/>
    {state?<A/>:<B/>}
    <Footer/>  */}
    {/* <A/> */}
    {/* <A1/> */}
    {/* <X/> */}
    {/* <A/> */}
    {/* <B/> */}
    {/* <A/> */}
    {/* <B/> */}
     {/* <Post/>  */}
    {/* <Get/> */}
    {/* <Put/> */}
    {/* <Patch/> */}
    {/* <Delete/> */}
    </>
  )
}

export default App
