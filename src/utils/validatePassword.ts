// validate the followings
// - At least 6 characters
// - 1 uppercase
// - 1 lowercase
// -1 digit
// - special character

export const validatePassword = (
    password: string,
    confirmPassword: string
): string[] => {
    const errors: string[] = [];

    password.length < 6 && errors.push("At least 6 characters required.");

    !/[A-Z]/.test(password) &&
        errors.push("At least one uppercase letter required.");
    !/[a-z]/.test(password) &&
        errors.push("At least one lowercase letter required.");
    !/[0-9]/.test(password) && errors.push("At least one digit required.");
    !/[!@#$%^&*(),.?":{}|<>]/.test(password) &&
        errors.push("At least one special character required.");

    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    return errors;
};
