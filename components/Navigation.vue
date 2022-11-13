<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Football</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link active" aria-current="page"> Home </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/players/players" class="nav-link active"> Players </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/matches" class="nav-link active"> Matches </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/leagues" class="nav-link active"> Leagues </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/teams" class="nav-link active"> Teams </NuxtLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
