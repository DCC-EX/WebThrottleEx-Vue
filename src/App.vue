<template>
    <v-app>
        <v-app-bar>
            <template #prepend>
                <v-app-bar-nav-icon icon="mdi:menu" @click.stop="toggleNav()" />
            </template>

            <v-app-bar-title>{{ getTitle }}</v-app-bar-title>

            <template #append>
                <v-slider v-model="powerModel"></v-slider>
            </template>
        </v-app-bar>
        <v-navigation-drawer v-model="showNavBar">
            <v-list>
                <v-list-item
                    v-for="(item, i) in getNavList"
                    :key="i"
                    active-color="primary"
                    :to="item.to"
                >
                    <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <router-view></router-view>
        </v-main>
        <v-footer height="25">
            <v-row no-gutters>
                <v-col cols="2">
                    <v-switch
                        v-model="themeModel"
                        hide-details
                        true-value="light"
                        false-value="dark"
                        ><v-spacer></v-spacer>
                        <template v-slot:label>
                            <v-icon
                                :icon="
                                    themeModel == `dark`
                                        ? `mdi:moon-waning-crescent`
                                        : `mdi:weather-sunny`
                                "
                            ></v-icon>
                        </template>
                    </v-switch>
                </v-col>
                <v-col> {{ new Date().getFullYear() }} — <strong>DCC EX Team</strong> </v-col>
            </v-row>
        </v-footer>
    </v-app>
    <!-- <div>
        <nav class="menu" id="side-menu" tabindex="0">
            <header class="avatar">
                <button class="nav-btn in" id="nav-close">&times;</button>
                <img src="./assets/cover.jpg" />
            </header>
            <ul>
                <li tabindex="0" class="throttle" id="throttle-nav"><span>Throttle</span></li>
                <li tabindex="0" class="locomotives" id="loco-nav"><span>Locomotives</span></li>
                <li tabindex="0" class="function-maps" id="fn-map-nav">
                    <span>Function Maps</span>
                </li>
                <li tabindex="0" class="settings" id="settings-nav"><span>Settings</span></li>
            </ul>
        </nav>
        <div class="topnav">
            <div class="row">
                <div class="column-2">
                    <button class="nav-btn" id="nav-open">☰</button>
                </div>
                <div class="column-6 align-center">
                    <div class="throttle-heading">
                        <a href="http://www.dcc-ex.com" target="_blank" rel="noopener noreferrer"
                            ><div class="wt-logo"></div
                        ></a>
                        img src="images/WebThrottle.png" /> -->
    <!-- <p>Version 1.2.0</p> -->
    <!-- </div>
                </div>
                <div class="column-2">
                    <button class="btn-expand" id="fs-toggle" state="ws" title="Fullscreen">
                        &#10530;
                    </button>
                    <button class="btn-info" id="info-tooltip" state="ws" title="Information">
                        <span class="icon-info"></span>
                    </button>
                    <button
                        class="btn-info"
                        id="help-button"
                        state="ws"
                        title="Help"
                        onclick=" window.open('https://dcc-ex.com/throttles/ex-webthrottle.html', '_blank')"
                    >
                        <span class="icon-question"></span>
                    </button>
                </div>
            </div>
        </div>
        
    </div> -->
</template>
<script lang="ts" setup>
    import { useTheme } from "vuetify";
    import { computed, ref, watch } from "vue";
    import { useGlobalStore } from "./store/global";
    import { storeToRefs } from "pinia";

    const theme = useTheme();
    const globalStore = useGlobalStore();
    const { getTitle, showNavBar, getNavList } = storeToRefs(globalStore);
    const toggleNav = computed(() => globalStore.toggleNavBar);
    const themeModel = ref("dark");

    watch(themeModel, (newmodel, oldold) => {
        theme.global.name.value = newmodel;
    });
</script>

<style>
    /* #app {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        height: 100vh;
        background: #efefef;
    }

    .column-1 {
        float: left;
        width: 10%;
        padding: 5px 15px;
    }
    .column-2p5 {
        float: left;
        width: 25%;
        padding: 5px 15px;
    }
    .column-2 {
        float: left;
        width: 20%;
        padding: 5px 15px;
    }
    .column-3 {
        float: left;
        width: 30%;
        padding: 5px 15px;
    }
    .column-4 {
        float: left;
        width: 40%;
        padding: 5px 15px;
    }
    .column-5 {
        float: left;
        width: 50%;
        padding: 5px 15px;
    }
    .column-6 {
        float: left;
        width: 60%;
        padding: 5px 15px;
    }
    .column-7 {
        float: left;
        width: 70%;
        padding: 5px 15px;
    }
    .column-8 {
        width: 80%;
        float: left;
        padding: 5px 15px;
    }
    .dcmd-clear {
        padding-left: 0;
    }*/
    /* Clear floats */
    /*
    .row:after {
        content: "";
        display: block;
        clear: both;
    }

    .nav-btn {
        font-size: 30px;
        cursor: pointer;
        color: #666666;
        padding: 10px 15px;
        border: none;
        background: none;
        line-height: 38px;
    }
    .nav-btn.in {
        color: #cccccc;
        font-size: 40px;
        position: absolute;
        right: 0;
        line-height: 30px;
    }
    .btn-expand,
    .btn-info {
        float: right;
        font-size: 20px;
        cursor: pointer;
        color: #666666;
        padding: 10px 15px;
        border: none;
        background: none;
        line-height: 36px;
    }
    .btn-info {
        padding-top: 14px;
    }
    .nav-btn:hover {
        color: #000000;
    }
    .nav-btn.in:hover {
        color: #ffffff;
    }
    .menu {
        background: #00a3b9;
        height: 100vh;
        width: 250px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1020;
        box-shadow: 0 0px 10px #666;
        border-right: 1px solid #929292;
        outline: none;
        left: -260px;
        display: none;
    }
    .menu .avatar img {
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
        border: 0;
    }

    .menu ul {
        list-style: none;
        padding: 0.5em 0;
        margin: 0;
        margin-top: 1em;
    }
    .menu ul li {
        padding: 1em;
        background-repeat: no-repeat;
        background-position: left 15px center;
        background-size: auto 20px;
        transition: all 0.15s linear;
        cursor: pointer;
        color: #fff;
        text-shadow: 0 0 1px #000;
    }
    .menu ul li:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
    .menu ul li:focus {
        border: none;
    }
    .topnav .row div,
    .add-loco-form .row label,
    .add-loco-form .row input {
        box-sizing: border-box;
    }

    .throttle-heading {
        text-align: center;
        padding-top: 5px;
        font-size: 14px;
        display: inline-block;
    }
    .throttle-heading .wt-logo {
        height: 48px;
        width: 142px;
        background: url(./assets/WebThrottle.png);
        display: inline-block;
        background-size: 100%;
        box-shadow: 0 0 3px #989898;
        border-radius: 6px;
    }
    .throttle-heading p {
        font-size: 12px;
        margin: 5px;
    } */
</style>
