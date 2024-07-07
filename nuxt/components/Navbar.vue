<template>
    <nav class="navbar navbar--fixed-top">
        <div class="navbar__inner">
            <div class="navbar__items">
                <h1 class="logo">
                    <span class="cap">P</span>ICTIONARY
                </h1>
            </div>
        </div>
    </nav>
</template>

<script>

</script>

<style scoped>

.navbar {
    display: flex;
    background-color: var(--ifm-navbar-background-color);
    box-shadow: var(--ifm-navbar-shadow);
    height: var(--ifm-navbar-height);
    padding: var(--ifm-navbar-padding-vertical) var(--ifm-navbar-padding-horizontal);
}

.navbar--fixed-top {
    position: sticky;
    top: 0;
    z-index: var(--ifm-z-index-fixed);
}

.navbar__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
}

.navbar__items {
    align-items: center;
    display: flex;
    flex: 1;
    min-width: 0;
}

.logo {
    font-family: Baskervville SC;
    font-size: 1.2em;
}

.cap {
    font-family: Permanent Marker;
    font-size: 1.75rem;
    margin: 0 0.15em 0 0;
    color: rgb(252 211 77);
}
</style>