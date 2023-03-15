<template>
    <div>
        <h2>  
            <slot name="packageTitle"></slot>
        </h2>
        <h3>
            <slot name="pricing"></slot>
        </h3>
        <h4>
            <slot name="promotion"></slot>
        </h4>
    </div>
</template>

<style scoped>
    div {
        display: flex;
        flex-flow: column nowrap;
        gap: 1px;
    }

    h2, h3, h4 {
        color: var(--color-text);
    }

</style>
