<template>
    <div class="tag-item">
        <v-icon>
            {{ icon }}
        </v-icon>
        <div class="tag-item__text">
            {{ text }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'TagItem',
    props: {
        text: {
            type: [String, Number],
            required: true
        },
        icon: {
            type: String,
            validator(value) {
                return /^mdi-/.test(value);
            }
        }
    }
};
</script>

<style lang="scss">
.tag-item {
    display: flex;
    align-items: center;
    gap: 4px;

    &__text {
        white-space: nowrap;
    }
}
</style>