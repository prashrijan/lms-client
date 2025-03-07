export const capitalizeFirstLetter = (
    str: string | undefined | null
): string | undefined | null => {
    if (str === undefined || str === null) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
};
