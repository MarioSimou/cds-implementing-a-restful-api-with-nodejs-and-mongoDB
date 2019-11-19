export default fn => (parent, variables, ...other) => {
  if (variables && variables.query && variables.query.id) {
    variables.query._id = variables.query.id;
    delete variables.query.id;
  }
  return fn(parent, variables, ...other)
};
