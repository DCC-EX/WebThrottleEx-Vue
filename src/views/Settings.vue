<template>
<div id="settings-window" class="section">
                    <div class="row">
                        <div class="settings-heading hdng">
                            Settings
                        </div>
                    </div>
                    <div class="row settings-content">
                        <div class="side-panel">
                            <ul>
                                <li id="settings-general">General</li>
                                <li id="settings-storage">Storage</li>
                                <li id="settings-app">App</li>
                            </ul>
                        </div>
                        <div class="settings-panel scrollbar" id="settings-panel">
                            <div class="settings-section" id="general-section">
                                <div class="settings-subheading">
                                    General
                                </div>
                                <div class="settings-group">
                                    <div class="row setting-entry">
                                        <label class="setting-label">
                                            Theme
                                        </label>
                                        <div class="setting-content">
                                            <select id="theme-selector" class="btn theme-selector select-control" name="themeselector" title="Change Theme">
                                                <option value="simple"> Simple </option>
                                                <option value="metallic"> Metallic </option>
                                                <option value="dark"> Dark </option>
                                            </select> 
                                        </div> 
                                    </div>
                                    <div class="row setting-entry">
                                        <label class="setting-label">
                                            Speed Controller
                                        </label>
                                        <div class="setting-content">
                                            <select id="throttle-selector" class="btn throttle-selector select-control" name="throttleselector" title="Change Throttle Controller">
                                                <option value="vertical"> Vertical </option>
                                                <option value="knob"> Knob </option>
                                                <option value="circular"> Circular </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="settings-section" id="storage-section">
                                <div class="settings-subheading">
                                    Storage
                                </div>
                                <div class="settings-group">
                                    <!--<div class="row setting-entry">
                                        <label class="setting-label">
                                            Some placeholder
                                        </label>
                                        <div class="setting-content">
                                            <input /> 
                                        </div> 
                                    </div>
                                    <div class="row setting-entry">
                                        <label class="setting-label">
                                            Some placeholder
                                        </label>
                                        <div class="setting-content">
                                            <input /> 
                                        </div>
                                    </div>-->
                                    <!--<div class="hr"></div>-->
                                    <div class="row setting-entry">
                                        <label class="setting-label">
                                            <button id="backup-app-settings">&#10514;&nbsp; Export App data</button>
                                        </label>
                                    </div>
                                    <div class="row setting-entry">
                                        <label class="setting-label">
                                            <button id="restore-app-settings">&#10515;&nbsp; Import App data</button>
                                        </label>
                                    </div>
                                    <div class="row setting-entry">
                                        <label class="setting-label">
                                            <button id="wipe-app-settings">&#10539;&nbsp; Wipe App data</button>
                                        </label>
                                    </div>
                                </div>
                            <div class="settings-section" id="app-section">
                                <div class="settings-subheading">
                                    App
                                </div>
                                <div class="settings-group">
                                    <div class="row setting-entry">
                                        <label class="setting-label">
                                            Install as an app
                                        </label>
                                        <label class="setting-label">
                                            <button class="add-button">Install</button>
                                            <label class="installed-label">App Installed</label>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
</template>
<style scoped>
* {
    box-sizing: border-box;
  }

  /* Style the header */
.settings-heading {
    padding: 10px 20px;
    text-align: left;
    font-size: 30px;
    border-bottom: 1px solid #bbbbbb;
}
.settings-heading  .hdng{
    padding-top: 10px;
}
  
/* Container for flexboxes */
.settings-content {
    display: -webkit-flex;
    display: flex;
    height: calc(100% - 70px);
}

/* Style the navigation menu */
.side-panel {
    width: 200px;
    border-right: 1px solid #bbbbbb;
    padding: 20px 10px;
}
.settings-section{
    margin-top: 15px;
}
/* Style the list inside the menu */
.side-panel ul {
    list-style-type: none;
    margin: 5px 0;
    padding: 0;
}
.side-panel ul li {
    padding: 10px;
    border-radius: 5px;
    margin: 5px 0;
    cursor: pointer;
    font-size: 14px;
}
.settings-subheading{
    font-size: 18px;
    margin-bottom: 5px;
}
.settings-group{
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    padding: 10px 20px;
    background: #fff;
    margin-bottom: 5px;
}
.setting-entry{
    margin: 15px 0;
    display: -webkit-flex;
    display: flex;
}
.setting-label{
    padding: 5px;
    font-size: 14px;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.setting-content{
    -webkit-flex: 3;
    -ms-flex: 3;
    flex: 3;
}
.side-panel ul li:hover, .side-panel ul li.active {
    background: rgba(4,4,4, 0.05);
}
.settings-group.placeholder {
    min-height: 200px;
    text-align: center;
    padding: 20%;
}
.settings-group.placeholder p {
    border: 1px dashed;
    padding: 4%;
    color: #808080;
    border-radius: 10px;
}
.row.settings-group.fnhead {
    background: #f3f3f3;
    font-weight: 600;
}
.maps-content{
    overflow-y: auto;
    font-size: 14px;
    max-height: calc(100% - 90px);
}
a.edit-cur-loco, a.option-btn{
    float: right;
    text-decoration: none;
    padding: 5px 15px;
    text-align: center;
    border-radius: 5px;
    display: inline-flex;
    background: #f3f3f3;
    border: 1px solid #e8e8e8;
    box-shadow: 0 0 3px #e8e8e8;
    margin-left: 5px;
}
a.edit-cur-loco{
    margin-top: 6px;
}
.settings-subheading.row .map-name-heading{
    padding-top: 8px;
}
/* Style the content */
.settings-panel {
    -webkit-flex: 3;
    -ms-flex: 3;
    flex: 3;
    padding: 24px;
    padding-top: 10px;
    overflow-y: auto;
}

.back-button{
    text-align: left;
    padding: 10px;
}
.caplitalize{
    text-transform: capitalize;
}
.waste-bin{
    font-size: 13px;
}
/* Responsive layout - makes the menu and the content (inside the section) sit on top of each other instead of next to each other */
@media (max-width: 600px) {
    .settings-content {
        -webkit-flex-direction: column;
        flex-direction: column;
    }
}

.scrollbar {
    overflow: auto;
    width: 100%;
}
</style>
<script setup lang="ts"></script>
