import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import { getUser } from "../../redux/actions/userActions";

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  console.log("myuser", users);

  return (
    <div>
      <p>{users?.user?.email ? users.user.email : "Loading …"}</p>
      <p>User page</p>
    </div>
  );
};

UsersPage.propTypes = {
  users: PropTypes.object.isRequired,
};

export default UsersPage;
