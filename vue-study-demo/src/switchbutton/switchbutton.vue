<template>
    <div>
        <switchbuttonItem :result = "result" @update:my-result = "onChangeMyResult"></switchbuttonItem>
        <div class = "switch-button" @click = "change" :class = "result ? 'on' : 'off'">
            <span>{{ result ? '开' : '关'}}</span>
        </div>
    </div>
</template>

<script type="text/javascript">
import switchbuttonItem from './switchbutton-item'
export default {
    name: 'Switchbutton',
    components: {
        switchbuttonItem
    },
    data () {
        return {
            result: true
        }
    },
    computed: {
    },
    methods: {
        change: function () {
            this.result = !this.result
        },
        onChangeMyResult: function (val) {
            this.result = val
        }
    }
}
</script>

<style lang = "scss">
* {
    box-sizing: border-box;
}
body {
    background-color: #777;
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAU0lEQVQIHQXBwRGDIBAAwO2/AMcCDHAcPjIRxjJ8Je1kl1uqUgphsWu6w0sIG6npLpcUBql4e/wsVRKabrkNTacIYbMrwsF06rqUhsnXVKVT+Hj+Ue4rPSONk4kAAAAASUVORK5CYII=);
    padding-top: 80px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.switch-button {
    position: relative;
    width: 300px;
    height: 130px;
    background: linear-gradient(to right, #fd1a15 0, #fc8b34 45%, #7fd03e 55%, #007177 100%) 0 0;
    background-size: 650px 100%;
    border-radius: 70px;
    padding: 7px;
    cursor: pointer;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2) inset;
    margin-bottom: 10px;
    span {
        width: 116px;
        height: 116px;
        position: absolute;
        left: 7px;
        top: 7px;
        border-radius: 100%;
        background: #fff;
        text-align: center;
        line-height: 116px;
        font-family: "Cabin", sans-serif;
        font-size: 35px;
        font-weight: bold;
        color: #fd1a15;
        letter-spacing: 3px;
        text-transform: uppercase;
        transition: left 500ms ease, color 500ms ease;
    }
    &.off {
        background-position: 0 0;
    }
    &.on {
        background-position-x: -350px;
        span {
            color: #007177;
            left: 177px;
        }
    }
    &:before {
        content: '开关组件';
        position: absolute;
        right: calc(100% + 10px);
        white-space: nowrap;
        padding: 10px;
        background: rgba(#000, .5);
        color: #fff;
        border-radius: 5px;
        top: 50%;
        transform: translateY(-50%);
    }
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border: 8px solid rgba(#000, .5);
        border-color: transparent  transparent transparent rgba(#000, .5);
        right: calc(100% - 6px);
    }
    &:nth-child(2):before{
        content:"外部控制";
    }
}
input[type="button"]  {
    display: inline-block;
    position: relative;
    text-decoration: none;
    font-family: 'Montserrat', arial, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    width: 11em;
    height: 4.5em;
    box-shadow: 0 3px 5px #282828;
    transition: all 0.6s cubic-bezier(0.37, 0.74, 0.15, 1.65);
    background-color: #fc2161;
    color: #fff;
    text-shadow: 0 1px 1px #b50236;
    border: none 0;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        backround: darken(#fc2161, 10%);
    }
}
</style>
