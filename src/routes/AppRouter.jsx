import {BrowserRouter as Router, Routes} from "react-router-dom"
import { Route } from 'react-router-dom'
import Home from "../pages/Home"
import Layout from "../layouts/Layout"
import NotFound from "../pages/NotFound"
const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route element={<Layout />} >
                <Route path="/" element={<Home />} />
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter