import { createVuetify } from "vuetify";
import * as compoenets from "vuetify/components";
import * as directives from "vuetify/directives";
import { iconify } from "./iconify";

export default createVuetify({
    components: compoenets,
    directives,
    icons: {
        defaultSet: "mdi",
        sets: {
            mdi: iconify("mdi"),
            cib: iconify("cib"),
        },
    },
    theme: {
        defaultTheme: "dark",
    },
});
