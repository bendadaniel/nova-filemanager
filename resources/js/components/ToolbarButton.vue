<template>
    <button
        type="button"
        class="rounded-lg cursor-pointer border h-9 min-w-9 px-2 flex items-center justify-center focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 dark:bg-gray-900"
        :class="{
            'border-gray-200 dark:border-gray-700': !active,
            'border-primary-500 text-primary-500': active,
        }"
    >
        <slot />
        <Icon v-if="iconName" :name="iconName" type="outline" class="w-4 h-4" />
    </button>
</template>

<script>
    import { Icon } from "laravel-nova-ui";

    export default {
        components: {
            Icon,
        },
        props: {
            type: {
                type: String,
                required: false,
            },
            active: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            iconName() {
                const iconMap = {
                    'upload': 'arrow-up-tray',
                    'refresh': 'arrow-path',
                    'filter': 'funnel',
                    'folder-add': 'folder-plus',
                    'trash': 'trash',
                    'check': 'check',
                };
                return this.type ? iconMap[this.type] || this.type : null;
            }
        }
    }
</script>
