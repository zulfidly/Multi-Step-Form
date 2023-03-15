<script setup>
    import iconCheckmark from "./icons/icon-checkmark.vue"
    import iconCheckmarkPath from "./icons/icon-checkmark-path.vue"
</script>
<template>
        <section class="x1">
            <slot name="tickbox">
    
            </slot>
            <section>
                <h1><slot name="addOnTitle"></slot></h1>
                <h4><slot name="addOnDesc"></slot></h4>
            </section>
        </section>

        <h4>
            <slot name="addOnPrice"></slot>
        </h4>
</template>

<style scoped>
    h1 {
        font-weight: 700;
    }
    h1, h3, h4 {
        color: var(--color-text);
    }
    section {
        padding: 5px;
    }
    .x1 {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        text-align: left;
        justify-content: start;
        gap: 7px;
    }
</style>
