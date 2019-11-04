import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

//Action Creator
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function loadCourseSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses}
}

// THUNK (middleware)
export function loadCourses() {
  return function (dispatch) {
    return courseApi.getCourses().then(courses => {
      dispatch(loadCourseSuccess(courses))
    }).catch(error => {
      throw error;
    })
  }
}