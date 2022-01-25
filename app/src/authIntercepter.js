export const authIntercepter = config =>{ //! перед заголовком token добавляет Bearer 
    config.headers.auth = `Bearer ${localStorage.getItem('token')}`
    return config
}