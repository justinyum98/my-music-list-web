export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/**
 * only allows alphanumeric characters (uppercase and lowercase) and underscores
 * Usernames can contain letters (a-z), numbers (0-9), dashes (-), underscores (_), and periods (.).
 * Length will be between 3 to 30 characters.
 */
export const USERNAME_REGEX = /^(?!\.)(?!.*\.$)(?!.*\.\.)[a-zA-Z0-9_.]{3,30}$/;

/**
 * Minimum eight characters, at least one letter and one number.
 * Special characters allowed, optional.
 * See https://stackoverflow.com/a/21456918/7498164
 */
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*\d)[\w!@#$%^&*()-+=]{8,}$/;
