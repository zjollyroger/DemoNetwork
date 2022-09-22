export const required = value => (value || typeof value === 'number' ? undefined : 'Required fill');


export const maxLengthCreator = maxLength => value =>
    (value && value.length > maxLength ? `max length is ${maxLength} symbols` : undefined);

export const minLengthCreator = minLength => value =>
    (value && value.length < minLength ? `minimal length is ${minLength} symbols` : undefined);