export const getErrorMessage = ({ error }: { error: unknown }): string => {
    if (error instanceof Error) {
        return error.message;
    } else if (typeof error === 'string') {
        return error;
    }
    return '';
};
