import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import teacherReducer from "./teacher";
import sectionReducer from "./section";
import classReducer from "./class";
import subjectReducer from "./subject";
import assignteacherReducer from "./assignteacherdata"
import storedclassReducer from "./storedclass";
import studentReducer from "./student"
import examsReducer from "./exams"
import onetofourthReducer from "./onetofourth"
import fifthtotenthReducer from "./fifthtotenth"
import coscholastic1to4Reducer from "./coscholastic1to4"
import coscholastic5to10Reducer from "./coscholastic5to10"
import coscholasticpretoukgReducer from "./coscholasticpretoukg"

export default configureStore({
  reducer: {
    auth: authReducer,
    teacher: teacherReducer,
    section: sectionReducer,
    class: classReducer,
    subject: subjectReducer,
    storedclass: storedclassReducer,
    assignteacherdata: assignteacherReducer,
    student: studentReducer,
    exams: examsReducer,
    onetofourth:onetofourthReducer,
    fifthtotenth:fifthtotenthReducer,
    coscholastic1to4:coscholastic1to4Reducer,
    coscholastic5to10:coscholastic5to10Reducer,
    coscholasticpretoukg:coscholasticpretoukgReducer
  },
});
