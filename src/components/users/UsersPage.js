import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { getUser } from "../../redux/actions/userActions";

const UsersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      <p>User page</p>
    </div>
  );
};

UsersPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // courses: PropTypes.array.isRequired,
  // createCourse: PropTypes.func.isRequired,
  // courseActions: PropTypes.object.isRequired,
};

// const mapStateToProps = (state) => {
//   return {
//     courses: state.courses,
//   };
// };

// const mapDispatchToProps = {
//   createCourse: courseActions.createCourse,
// };

export default UsersPage;
