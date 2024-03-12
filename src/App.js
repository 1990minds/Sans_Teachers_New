
import "./index.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./Signin";
import Layout from "./Sidebar/index";
import Dashboard from "./Components/Dashboard";
import PrivateComp from './Components/privatecomp';



import Exams from './Components/Exams/datatable'
import CreateExams from './Components/Exams/createexams';
import EditExams from './Components/Exams/editexams';

import Exammarks from './Components/Exams/exammarks';

import StudentList from './Components/Exams/studentlist';
import Coscholastic from './Components/Exams/coscholastic';
import Coscholastic1 from './Components/Exams/coscholasticpretoukg';
import Coscholastic2 from './Components/Exams/coscholastic5to10';

function App() {
  
  return (
    <div >
      <Routes>
      <Route element={<PrivateComp/>}>
        
      <Route path='/dashboard' element={<Layout Compenets={Dashboard}/>} />
      <Route path = '/exams' element={<Layout Compenets={Exams}/>} />
      <Route path = '/create-exams' element={<Layout Compenets={CreateExams} />}/>
      <Route path = '/edit-exams/:id' element={<Layout Compenets={EditExams} />}/>
      <Route path="/exammarks/:sectionId/:examId/:subjectName/:year" element={<Layout Compenets={Exammarks} />} />
      <Route path="/studentlist/:term/:year/:id" element={<Layout Compenets={StudentList} />} />
      <Route path="/coscholastic/:term/:id" element={<Layout Compenets={Coscholastic} />} />
      <Route path="/coscholasticpre/:term/:id" element={<Layout Compenets={Coscholastic1} />} />
      <Route path="/coscholastichigh/:term/:id" element={<Layout Compenets={Coscholastic2} />} />
      </Route>

      <Route index Component={SignIn} />
      
      </Routes>










    </div>
  );
}

export default App;
