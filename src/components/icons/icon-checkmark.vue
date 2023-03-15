<template>
    <svg class="svgInit" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
        <slot name="path"></slot>
    </svg>
</template>

<style>
    .svgInit {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 23px;
        height: 23px;
        border: 1px solid var(--color-border-stepform);
        border-radius: 5px;
        padding: 4px 2px 0 3px;
        background-color: transparent;
        transition: background-color 0.5s;
    }
    .svgChecked {
        background-color: var(--color-text);
    }

</style>