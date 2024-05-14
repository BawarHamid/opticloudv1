/**
 * This file contains functions related to authentication and user management
 * It is marked as 'use server' to activate Next.js server actions
 */

'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { get } from '../api';

/* Edit the types according to your needs */
type Token = {
    token: string;
    expires: string;
}

type UserInfo = {
    id: number;
    username: string;
    email: string | null;
    phoneNumber: string | null;
    roles: string[] | null;
    enabled: boolean;
}

/* This is called from the /login page via the LoginForm component */
// Log the user in and save the JWT in a cookie
export async function login(prevState: undefined | {error: string}, formData: FormData) {
    console.log('login()');

    // Verify the credentials and get the user
    const username = formData.get('username');
    const password = formData.get('password');

    /* Placeholder - Delete when backend is integrated */
    const today = new Date(); // get today's date
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const expires = tomorrow;
    cookies().set('session', 'my-token', { expires, httpOnly: true });
    redirect('/');
    /* End of placeholder */

    try {
        /* Adjust the url */
        const response = await fetch(process.env.API_URL + '/Authentication/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });
        
        if (response.status !== 200) {
            const message = await response.text();
            return { error: message };
        }

        // Mutate the data
        const data: Token = await response.json();

        // Create the session
        const expires = new Date(data.expires);
        const token = data.token;
    
        // Save the session in a cookie
        cookies().set('session', token, { expires, httpOnly: true });
    } catch (error) {
        return { error: 'An error occurred!' };
    }

    // If login was successful, redirect the user to home
    redirect('/');
}

// Destroy the session
export async function logout() {
    console.log('logout()');

    cookies().delete('session');
    redirect('/login');
}

// Get the session (to use for API calls)
export async function getSession(): Promise<string | null> {
    const session = cookies().get('session')?.value;

    if (!session) {
        return null;
    }

    return session;
}

// Get the current user's details
export async function getUserDetails(): Promise<UserInfo | undefined> {
    console.log('getUserDetails()');

    /* Integrate with backend by inputting correct url */
    //const result: UserInfo | any = await get('/Authentication/details');

    /* Placeholder - Delete after backend integration */
    const result: UserInfo | any = {
        id: 1,
        username: 'John Doe',
        email: 'johndoe@mail.com',
        phoneNumber: '12345678',
        roles: ['admin'],
        enabled: true,
    }
    /* End of placeholder */

    if (result.error) {
        return undefined;
    }

    return result;
}
