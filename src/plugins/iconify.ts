import { h } from "vue";
import type { IconSet, IconProps, IconAliases } from "vuetify";
import { Icon } from "@iconify/vue";

export const iconify: (set: string) => IconSet = (set) => ({
    component: (props: IconProps) =>
        h(Icon, {
            icon: `${set}:${props.icon}`,
            disabled: props.disabled,
        })
});