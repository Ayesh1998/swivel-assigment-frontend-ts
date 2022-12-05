import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import Index from "./pages/home";
import NavBar from "./components/atoms/nav-bar/nav-bar";
import AddEmployeePage from "./pages/add-employee/add-employee-page";
import EditEmployeePage from "./pages/edit-employee/edit-employee-page";
import ErrorModalComponent from "./components/atoms/error-modal/error-modal-component";
import {useDispatch, useSelector} from "react-redux";
import {FC, useEffect} from "react";
import {RootState} from "./redux/reducers";
import {bindActionCreators} from "redux";
import { actionCreators } from './redux';
import ErrorPage from "./pages/error-page/error-page";

const App:FC= () => {

  const dispatch = useDispatch();
  const { fetchEmployees } = bindActionCreators(actionCreators, dispatch);
  const fetchError = useSelector((state: RootState) => state.employees.fetchError);
   
  //retrieving all the employees to redux
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
      <div className="App">
        <Router>
          <NavBar/>
          {fetchError ? <ErrorModalComponent error={fetchError} fetch={true}/> :
              <Routes>
                <Route path="/employee/list" element={<Index/>}/>
                <Route path="/employee/add" element={<AddEmployeePage/>}/>
                <Route path="/employee/edit/:id" element={<EditEmployeePage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
              </Routes>
          }

        </Router>
      </div>
  );
};

export default App;
