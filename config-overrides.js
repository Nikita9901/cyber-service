const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@cs": "src/",
    "@components": "src/components",
    "@pages": "src/pages",
  })(config);
  return config;
};
