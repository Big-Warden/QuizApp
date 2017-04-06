import React from "react";

const NoMatch = ({ location }) => (
  <div id="nomatch">
	<h1>:-\</h1>
    <h2>Nothing found at <code> { location.pathname } </code></h2>
  </div>
);

NoMatch.propTypes = {
	location: React.PropTypes.object
};

export default NoMatch;
