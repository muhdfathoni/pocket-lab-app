<template>
    <form class="login-page" id="login-form">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cpu" width="150" height="150" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /><path d="M9 9h6v6h-6z" /><path d="M3 10h2" /><path d="M3 14h2" /><path d="M10 3v2" /><path d="M14 3v2" /><path d="M21 10h-2" /><path d="M21 14h-2" /><path d="M14 21v-2" /><path d="M10 21v-2" /></svg>
        <div class="row">
            <h1 class="title">Register</h1>
        </div>
            <label for="name" class="subtitle left">
                Name
            </label>
            <input type="text" required class="form-input" id="name">
            <label for="email" class="subtitle left">
                Email
            </label>
            <input type="text" required class="form-input" id="email">
            <label for="password" class="subtitle left">
                Password
            </label>
            <input type="text" required class="form-input" id="password">
            <!-- <label for="confirm_password" class="subtitle left">
                Confirm Password
            </label>
            <input type="text" required class="form-input" id="confirm_password"> -->
        <button type="submit" class="login">
            Sign Up
        </button>
        <p class="subtitle">
            Already have an account? <a href="">Sign in</a>
        </p>
    </form>
</template>

<script>
import '../theme/login.css';
import { baseURL } from '../config.js';

export default {
    data() {
        return {
            email: '',
            password: '',
            error: '',
        };
    },
    methods: {
        async login() {
            try {
                await new Promise(resolve => setTimeout(resolve, 3000));

                const response = await fetch(baseURL + 'login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.name,
                        email: this.email,
                        password: this.password
                    })
                });

                if (response.status === 200) {
                    this.$router.push('/Login');
                } else if (response.status === 401) {
                    throw new Error('Invalid email or password');
                } else {
                    throw new Error('Login failed');
                }
            } catch (error) {
                this.error = 'Login failed. Please check your credentials.';
            }
        }
    }
};
</script>