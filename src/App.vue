<template lang="pug">
    v-app.app
        v-main.app__main.ma-10
            .my-10
                TagList(
                    :list="tagList"
                )
            .my-10
                TagList(
                    :list="tagList"
                    align="full"
                )
            .app__half.my-10
                TagList(
                    :list="tagList"
                )
            .app__half.my-10
                TagList(
                    :list="tagList"
                    align="full"
                )
</template>

<script>
import TagList from './components/TagList';

export default {
    name: 'App',

    components: {
        TagList
    },

    data: () => ({
        tagList: [
            { text: 5, icon: 'mdi-star-outline' },
            { text: 'Историческая' },
            { text: 'На автобусе', icon: 'mdi-bus' },
            { text: '25 марта' },
            { text: '6 часов', icon: 'mdi-clock-outline' },
            { text: 'до 49', icon: 'mdi-account' }
        ]
    }),
};
</script>

<style lang="scss">
.app {
    &__half {
        width: 50%;
        background: #ccc;
    }

    &__main {
        background: #ededed;
    }
}
</style>
