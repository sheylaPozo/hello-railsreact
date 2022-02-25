export default async () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    const response = await fetch('api/messages', requestOptions);
    const messages = await response.json();
    return messages;
};