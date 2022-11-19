<template lang="pug">
    .tag-list(
        ref="content"
        :class="`tag-list--${align}`"
    )
        template(
            v-for="(tag, key) in visibleList"
        )
            .tag-list__item(
                ref="items"
                :key="key"
            )
                TagItem(
                    v-bind="tag"
                )
            .tag-list__separator(
                ref="separator"
                :key="`separator-${key}`"
            )
                v-icon mdi-circle-small
</template>

<script>
import TagItem from './TagItem';

export default {
    name: 'TagList',
    components: {
        TagItem
    },
    props: {
        align: {
            type: String,
            default: 'start',
            validator(value) {
                return ['start', 'full', 'end'].includes(value);
            }
        },
        list: {
            type: Array,
            required: true,
            validator(value) {
                return value.every((item) => Reflect.has(item, 'text'));
            }
        }
    },
    data: () => ({
        sizeTags: [],
        offsetWidthContent: 0,
        offsetWidthSeparator: 0,
        resizeObserver: null,
        sizes: []

    }),
    computed: {
        visibleList() {
            if (this.sizes.length) {
                const list = this.sizes.filter((size) => {
                    return size - this.offsetWidthSeparator <= this.offsetWidthContent;
                });
                return this.list.slice(0, list.length);
            }
            return this.list;
        }
    },
    mounted() {
        this.$nextTick(() => {
            if (this.$refs.content) {
                this.offsetWidthContent = this.$refs.content?.offsetWidth;
                this.resizeObserver = new ResizeObserver(this.handleResize);
                this.resizeObserver.observe(this.$refs.content);
            }

            this.offsetWidthSeparator = this.$refs?.separator?.[0]?.offsetWidth || 0;

            this.$refs?.items?.forEach((item, key) => {
                this.sizeTags[key] = item?.offsetWidth;
            });

            this.sizes = this.sizeTags.reduce((acc, item) => {
                const accValues = Object.values(acc);
                acc.push((accValues?.[accValues.length - 1] || 0) + item + this.offsetWidthSeparator);
                return acc;
            }, []);
        });
    },
    methods: {
        handleOffsetWidth(value, key) {
            this.tags[key] = value;
        },
        handleResize() {
            this.offsetWidthContent = this.$refs?.content?.offsetWidth || 0;
        }
    },
    beforeDestroy() {
        this.resizeObserver?.disconnect();
        this.resizeObserver = null;
    }
};
</script>

<style lang="scss">
.tag-list {
    $root: &;
    display: flex;

    &--start {
        justify-content: flex-start;
    }

    &--full {
        justify-content: space-between;
    }

    &--end {
        justify-content: flex-end;
    }

    &__separator {
        &:last-child {
            display: none;
        }
    }
}
</style>