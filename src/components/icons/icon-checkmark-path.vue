<template>
    <path class="svgPathInit" fill="none" stroke="#161616" stroke-width="2" d="m1 4 3.433 3.433L10.866 1"/>
</template>

<style>
    .svgPathInit {
        /* stroke: var(--color-text); */
        stroke: transparent;
        transition: stroke 0.5s;

    } 
    .pathChecked {
        stroke: var(--color-text-invert);
    }
</style>