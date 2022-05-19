// create action
export const userAction = (users) => {
    return {
        type: 'USERS',
        payload: users
    }
}