export default validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username can not be empty")
      .min(2, "Password longer than 2 characters"),
    password: yup
      .string()
      .min(5)
      .required("Password can not be empty")
      .min(6, "Password longer than 6 characters"),
  });