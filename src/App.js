import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import BlogPage from './pages/Blog'
import TestPage from './pages/Test'
import RootLayout from './layouts/RootLayout'
import StudentLayout from './layouts/StudentLayout'


function App() {
  
  return (
   
   <Routes>
    
     <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/home" element={<HomePage />}> </Route>
        <Route path="/about" element={<AboutPage />}> </Route>
        <Route path="/contact" element={<ContactPage />}> </Route>
        <Route path="/blog" element={<BlogPage />}> </Route>

     </Route>   

     <Route element={<StudentLayout />}>
     <Route path="/test" element={<TestPage />}> </Route>
     </Route> 

   </Routes>

    



  )

}
export default App;


/* <div className="App">
       <Header></Header>
       <Content></Content>
      <Footer /> 
    </div> */