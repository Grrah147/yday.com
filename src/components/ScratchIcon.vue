<!-- components/ScratchIcon.vue -->
<template>
    <svg :width="svgWidth" :height="svgHeight" viewBox="0 0 54.239582 54.239583" version="1.1"
        xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" class="scratch-icon">
        <path
            d="m 32.841379,20.273711 q 0.06615,-0.06614 0.198437,-0.115755 0.132292,-0.04961 0.314192,-0.04961 0.181901,0 0.314192,0.06615 0.148828,0.04961 0.248047,0.132291 0.08268,0.09922 0.148828,0.248047 0.06614,0.148828 0.06614,0.314192 0.01654,0.165364 -0.03307,0.297655 -0.04961,0.132292 -0.132291,0.198438 v 0 l -7.242954,7.25949 -1.223696,0.115755 0.09922,-1.207159 7.242954,-7.259491 z m 2.100126,-0.992185 q -0.314192,-0.314192 -0.727603,-0.46302 -0.41341,-0.148828 -0.826821,-0.165364 -0.41341,-0.01654 -0.843358,0.132291 -0.41341,0.132292 -0.727602,0.46302 v 0 l -7.441392,7.441392 q -0.08268,0.09922 -0.148828,0.214973 -0.04961,0.115755 -0.06614,0.248047 l -0.181901,2.331636 q -0.01654,0.148827 0.03307,0.314192 0.06614,0.148828 0.1819,0.248046 0.115755,0.115755 0.264583,0.181901 0.148828,0.04961 0.314192,0.03307 l 2.348173,-0.214974 q 0.132291,-0.01654 0.248046,-0.06615 0.115755,-0.04961 0.198437,-0.148827 l 7.441392,-7.441392 q 0.330728,-0.330729 0.46302,-0.744139 0.132291,-0.429947 0.115755,-0.826821 -0.01654,-0.413411 -0.181901,-0.810285 -0.148828,-0.413411 -0.46302,-0.727603 z M 21.13359,20.108347 q -1.025259,0 -1.752862,0.727603 -0.727602,0.727603 -0.727602,1.752861 v 10.517167 q 0,1.025258 0.727602,1.752861 0.727603,0.727603 1.752862,0.727603 h 10.517166 q 1.025259,0 1.752862,-0.727603 0.727602,-0.727603 0.727602,-1.752861 v -5.258584 q 0,-0.297655 -0.214973,-0.512629 -0.214974,-0.214973 -0.512629,-0.214973 -0.297656,0 -0.51263,0.214973 -0.214973,0.214974 -0.214973,0.512629 v 5.258584 q 0,0.429947 -0.297656,0.727603 -0.297655,0.297655 -0.727603,0.297655 H 21.13359 q -0.429947,0 -0.727603,-0.297655 -0.297656,-0.297656 -0.297656,-0.727603 V 22.588811 q 0,-0.429947 0.297656,-0.727603 0.297656,-0.297655 0.727603,-0.297655 h 5.258583 q 0.297656,0 0.512629,-0.214974 0.214974,-0.214973 0.214974,-0.512629 0,-0.297656 -0.214974,-0.512629 -0.214973,-0.214974 -0.512629,-0.214974 z"
            :fill="computedFillColor" />
    </svg>
</template>

<script setup>
import { computed } from 'vue';

// Define props for customization
const props = defineProps({
    width: {
        type: [Number, String],
        default: 128,
    },
    height: {
        type: [Number, String],
        default: 128,
    },
    fillColor: {
        type: String,
        default: null, // Null allows CSS to take over
    },
});

// Ensure width and height are strings with 'px' for SVG attributes
const svgWidth = computed(() => (typeof props.width === 'number' ? `${props.width}px` : props.width));
const svgHeight = computed(() => (typeof props.height === 'number' ? `${props.height}px` : props.height));

// Compute fill color: use prop if provided, otherwise fallback to CSS
const computedFillColor = computed(() => props.fillColor || 'var(--p-surface-600)');
</script>

<style scoped>
.scratch-icon {
    display: inline-block;
    vertical-align: middle;
}

.scratch-icon path {
    transition: fill 0.3s ease;
}

/* Dark mode styles when .yd-app-dark is applied on an ancestor */
:where(.yd-app-dark) .scratch-icon path {
    fill: var(--p-surface-300);
}
</style>