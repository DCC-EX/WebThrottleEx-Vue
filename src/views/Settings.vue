<template>
    <section id="throttle-window" class="section">
        <div Class="details-panel" id="details-panel">
            <div class="row">
                <div class="column-5">
                    <div class="loco-list-container row">
                        <div class="column-5 loco-list-ctrl">
                            <label for="ex-locoid" class="formbuilder-text-label">
                                Locomotive ID <span class="formbuilder-required">*</span>
                            </label>
                            <input id="ex-locoid" type="text" loco-cv="0" name="Locomotives" />
                        </div>
                        <div class="column-2 formbuilder-button acquire-wrap">
                            <button
                                id="button-getloco"
                                class="acq-loco-btn btn"
                                data-acquired="false"
                            >
                                <span class="icon-circle-right"></span>
                            </button>
                        </div>
                        <div class="column-2 formbuilder-button acquire-wrap"></div>
                    </div>
                </div>
                <div class="server-button column-5">
                    <select
                        id="select-method"
                        class="select-control select-xl"
                        name="selectMethod"
                        title="Change the connection method"
                    >
                        <option value="serial">Serial</option>
                        <option value="emulator">Emulator</option>
                    </select>
                    <button
                        type="button"
                        class="btn-default btn"
                        title="Connect to the Command Station"
                        aria-state="connected"
                        name="button-connect"
                        access="false"
                        id="button-connect"
                    >
                        <span class="con-ind"></span>Connect DCC++ EX
                    </button>
                    <!-- <button class="btn-grey" id="fs-toggle" state="ws" title="Fullscreen">&#10530;</button> -->
                </div>
            </div>
            <hr />
        </div>
        <div class="row pos-rel">
            <button
                type="button"
                class="btn-default btn btn-hide"
                title="Hide the top bar"
                name="button-hide"
                access="false"
                id="button-hide"
            >
                <span class="icon-circle-up"></span>
            </button>
        </div>

        <div class="row flex-center">
            <div class="column-5 mobile-100 throttle-container">
                <div class="row mobile-100 width100 flexx">
                    <div class="column-7 flexx">
                        <div class="flexx btns">
                            <button
                                type="button"
                                title="Decrease speed"
                                class="btn-default btn btn btn-speed btn-left"
                                name="button-left"
                                access="false"
                                id="button-left"
                            >
                                <span class="left" style="line-height: 12px">&nbsp;-&nbsp;</span>
                            </button>
                        </div>
                        <div class="Throttlewrap">
                            <div id="vertical-throttle" class="vertical-throttle speedController">
                                <div id="v-throttle"></div>
                                <div id="speed-indicator" class="progress-numb">0</div>
                            </div>
                            <div id="knobthrottle" class="speedController">
                                <input type="text" class="rotarySwitch" value="0" />
                                <div id="knob-value" class="knob-value">0</div>
                            </div>
                            <div
                                id="circular-throttle"
                                class="circular-throttle speedController"
                            ></div>
                        </div>
                        <div class="flexx btns">
                            <button
                                type="button"
                                title="Increase speed"
                                class="btn-default btn btn-speed btn-right"
                                name="button-right"
                                access="false"
                                id="button-right"
                            >
                                <span class="right">&nbsp;+&nbsp;</span>
                            </button>
                        </div>
                    </div>

                    <div class="column-2">
                        <div class="em-btn">
                            <button class="em-stop" id="emergency-stop" title="Emergency Stop">
                                <span class="icon-stop"></span>
                            </button>
                        </div>
                        <div class="dir-toggle">
                            <button
                                class="dir-btn forward selected"
                                id="dir-f"
                                aria-label="forward"
                            >
                                <span class="arrow-up icon-up"></span>
                            </button>
                            <button class="dir-btn stop" id="dir-S" aria-label="stop">
                                <span class="stop"></span>
                            </button>
                            <button class="dir-btn backward" id="dir-b" aria-label="backward">
                                <span class="arrow-down icon-down"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="functionKeys column-5 mobile-100">
                <div class="row mobile-100">
                    <div
                        class="power-slider column-4 formbuilder-button"
                        id="power-switch-div"
                        title="Enable track power"
                    >
                        <label class="switch">
                            <input type="checkbox" id="power-switch" />
                            <span class="slider round"></span>
                        </label>
                        <span class="pow-status"> Power <span id="power-status">Off</span> </span>
                    </div>
                    <div class="note-msg column-6">
                        <select
                            id="select-map"
                            class="btn select-map select-control"
                            name="selectMap"
                            title="Load a Saved Map"
                        ></select>
                    </div>
                </div>
                <div class="row" id="fn-wrapper"></div>
            </div>
        </div>

        <div class="row">
            <div class="console-slider column-4" title="Enable the debug console">
                <label class="debug switch">
                    <input type="checkbox" id="console-toggle" />
                    <span class="slider round debug-slider"></span>
                </label>
                <span class="debug-status"> Debug Console </span>
            </div>
        </div>
        <div id="debug-console" hidden="true">
            <hr />
            <div class="row mobile-margin-top20">
                <div class="formbuilder-text column-8">
                    <input
                        placeholder="Direct Command (without &lt; &gt;)"
                        class="form-control"
                        name="cmd-direct"
                        access="false"
                        id="cmd-direct"
                    />
                </div>

                <div class="formbuilder-button column-1">
                    <button
                        type="button"
                        class="btn-default btn"
                        name="sendCmd"
                        access="false"
                        data-acquired="false"
                        id="button-sendCmd"
                    >
                        Send
                    </button>
                </div>
                <div class="formbuilder-button dcmd-clear column-1">
                    <button
                        type="button"
                        class="btn-default btn"
                        name="clearLog"
                        access="false"
                        data-acquired="false"
                        id="button-clearLog"
                    >
                        Clear Log
                    </button>
                </div>
            </div>
            <div class="log-msg" id="log-box"></div>
        </div>
    </section>
</template>
<style scoped></style>
<script setup lang="ts"></script>
