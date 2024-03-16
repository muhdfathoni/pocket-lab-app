<template>
  <div></div>
</template>

<script>
export default {
    created() {
        this.logout();
    },
    methods: {
        logout() {
            // Clear session/token
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            
            // Redirect to login page
            this.$router.push('/Login');
        }
    }
}
</script>