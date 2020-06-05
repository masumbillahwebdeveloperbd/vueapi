<template>
    <div>
        <h2>Log out Successfully</h2>
    </div>
</template>
<script>
export default {
    created(){
        localStorage.removeItem('AToken')
        this.$router.push('/')
    }
}
</script>