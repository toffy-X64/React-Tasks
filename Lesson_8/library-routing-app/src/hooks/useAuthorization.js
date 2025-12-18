function useAuthorization(users) {
    const login = (email, password) => {
        const foundUser = users.find(user => user.email === email && user.password === password);
        if (!foundUser)
            return {
                success: false,
                error: 'Ви ввели невірні дані для авторизації!'
            };

        return {
            success: true,
            data: {...foundUser}
        }
    };

    return { login };
}

export default useAuthorization;