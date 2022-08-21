const initialState = {
  courseName: '',
  courseNum: '',
  courseClass: '',
  courseCollege: '',
  courseDept: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COURSE_NAME':
      return {
        ...state,
        courseName: action.payload,
      };
    case 'SET_COURSE_NUM':
      return {
        ...state,
        courseNum: action.payload,
      };
    case 'SET_COURSE_CLASS':
      return {
        ...state,
        courseClass: action.payload,
      };
    case 'SET_COURSE_COLLEGE':
      return {
        ...state,
        courseCollege: state.courseCollege,
      };
    case 'SET_COURSE_DEPT':
      return {
        ...state,
        courseDept: state.courseDept,
      };
    default:
      return state;
  }
};

export default rootReducer;
