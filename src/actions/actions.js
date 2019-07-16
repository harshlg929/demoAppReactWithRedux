import { LOGIN, SIGNUP } from './actionType';

export function login(data) {
    return { type: LOGIN, data };
}

export function signup() {
    return { type: SIGNUP };
}

