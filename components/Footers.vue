
<template>
    <div class="container">
        <footer class="footer mt-auto py-3 my-4 mb-2">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
                <NuxtLink to="https://github.com/nuxt" no-rel> Github </NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="https://linkedin.com/" no-rel> LinkedIn </NuxtLink>
            </li>
            <li class="card-body">
                <NuxtLink to="https://twitter.com/nuxt_js" class="nav-link active"> Twitter </NuxtLink>
            </li>
            </ul>
        <div><p class = "copyright">© Football.</p></div>
        </footer>
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


</style>