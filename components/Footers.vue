
<template>
    <div class="container">
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3">
            <li class="card-body">
                <NuxtLink to="https://github.com/nuxt" no-rel> Github </NuxtLink>
            </li>
            <li class="card-body">
                <NuxtLink to="https://linkedin.com/" no-rel> LinkedIn </NuxtLink>
            </li>
            <li class="card-body">
                <NuxtLink to="https://twitter.com/nuxt_js" class="nav-link active"> Twitter </NuxtLink>
            </li>
            </ul>
        <div><p class = "copyright">© Football.</p></div>
    </div>
</template>

<style scoped>
.copyright{
    color: white;
    font-size: 0.75rem;
    padding: 20px auto;
    margin: 20px auto auto;
    bottom: 0;
}

.bottom-container {
    position: fixed;
    bottom: 0;
    margin: 0;
    background-color: blue;
    padding: 30px 0 20px;
}
</style>