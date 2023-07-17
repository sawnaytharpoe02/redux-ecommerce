export const TYPE = {
  WARNING: 'warning',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const MESSAGE = {
  LOGIN_SUCCESS: 'Login successfully!',
  USERNAME_REQUIRE: 'Please enter user name!',
  EMAIL_REQUIRE: 'Please enter email address!',
  PASSWORD_REQUIRE: 'Please enter password!',
  INVALID_EMAIL: 'Invalid email format!',
  INVALID_PASSWORD: 'Password must be at least 6 characters!',
};

export const REGEX = {
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  PASSWORD: /^.{6,}$/,
};
