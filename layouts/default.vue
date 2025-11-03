<template>
    <div>
        <nav>
            <NuxtLink to="/">Home</NuxtLink> <br>
            <NuxtLink to="/blogs">Blogs</NuxtLink> <br>
            <NuxtLink to="/blogs/my-page-123">Blogs/article-page-id</NuxtLink> <br>
            <NuxtLink to="/@devfest">@shortcut</NuxtLink>
        </nav>
        <slot />
    </div>
</template>