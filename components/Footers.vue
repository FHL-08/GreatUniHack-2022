
<template>
    <footer class="footer mt-auto py-3 my-4 mb-2 fixed-bottom" >
        <div class="container bg-light " >
            <ul class="nav justify-content-center border-bottom pb-3 mb-3" style="bottom: 0;">
                <li class="nav-link">
                    <NuxtLink to="https://github.com/nuxt" class="nav-link active"> Github </NuxtLink>
                </li>
                <li class="nav-link">
                    <NuxtLink to="https://linkedin.com/" class="nav-link active"> LinkedIn </NuxtLink>
                </li>
                <li class="nav-link">
                    <NuxtLink to="https://twitter.com/nuxt_js" class="nav-link active"> Twitter </NuxtLink>
                </li>
            </ul>
            <div><p class = "copyright">© Football.</p></div>
        </div>
    </footer>
</template>

<style scoped>
.copyright{
    color: black;
    font-size: 1rem;
    padding: 20px auto;
    margin: 20px auto auto;
    bottom: 0;
    text-align: center;
}
</style>