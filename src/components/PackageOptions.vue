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
        gap: 5px;
    }

    h2, h3, h4 {
        color: var(--color-text);
    }
    @media (min-width: 1024px) {
        h2 { font-size: 1rem; }   
    }
</style>
