import React from "react";
import PropTypes from "prop-types";

const format = val => {
  return val.replace(/ /g, "-");
};

const MyComponent = ({ something, requiredThing, notDeclared, notUsed }) => {
  // The below should be flagged by eslint; if `something` isn't set (which is allowed)
  // then this call will throw a TypeError for accessing `value` on undefined
  const output = format(something.value);

  console.log("Required thing prop was passed as", requiredThing);

  console.log("Not declared was passed as", notDeclared);

  return (
    <>
      <p>This component formatted the input as:</p>
      <p>{output}</p>
    </>
  );
};

MyComponent.propTypes = {
  something: PropTypes.shape({
    value: PropTypes.string
  }),
  requiredThing: PropTypes.bool.isRequired,
  notUsed: PropTypes.bool
};

export default MyComponent;
