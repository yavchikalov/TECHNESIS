<template>
    <v-app class="app">
        <v-main class="app__main ma-10">
            <div class="my-10">
                <TagList :list="tagList" />
            </div>
            <div class="my-10">
                <TagList :list="tagList" align="full" />
            </div>
            <div class="app__half my-10">
                <TagList :list="tagList" />
            </div>
            <div class="app__half my-10">
                <TagList :list="tagList" align="full" />
            </div>
        </v-main>
    </v-app>
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
