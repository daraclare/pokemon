import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import { getUser } from "../../redux/actions/userActions";

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const { user, error } = users;

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      <p>User Details:</p>
      {error ? (
        <p>Error Message: {error}</p>
      ) : (
        <p>{user?.email ? user.email : "Loading …"}</p>
      )}
    </div>
  );
};

UsersPage.propTypes = {
  users: PropTypes.object.isRequired,
};

export default UsersPage;
