export type AuthLoginRequest = {
    username: string
    password: string
}

export type AuthLoginResponse = {
    "detail"?: "Invalid credentials"
}