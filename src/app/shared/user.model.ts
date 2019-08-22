


  export  interface LoginRequest {
    username: string;
    password: string;
}

 
    export interface LoginReply {
    token?: string;
    result: boolean;
}

    export interface ProfileRequest {
    token: string;
}


