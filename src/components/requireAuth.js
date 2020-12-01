import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const requireAuth = (ChildComponent) => {
  const ComposeComponent = (props) => {
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
      if (!auth) {
        props.history.push("/");
      }
    }, [auth, props.history]);

    return <ChildComponent {...props} />;
  };
  return ComposeComponent;
};

export default requireAuth;
