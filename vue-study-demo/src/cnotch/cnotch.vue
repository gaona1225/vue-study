<template>
    <div>
        <cnotchItem :child-notch-size = "notchSize"></cnotchItem>
        <div class = "form">
            <input type = "range" min = "0" max = "50" v-model = "notchSize" @input = "change" />
        </div>
    </div>
</template>

<script type="text/javascript">
import cnotchItem from './cnotch-item'
export default {
    name: 'Cnotch',
    components: {
        cnotchItem
    },
    data () {
        return {
            notchSize: '20'
        }
    },
    computed: {
    },
    methods: {
        change: function (e) {
            this.notchSize = e.target.value
            console.log(this.notchSize)
        }
    }
}
</script>

<style lang = "scss">
@import url('https://fonts.googleapis.com/css?family=Lato|Roboto:700');
body {
    background-color: #777;
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAU0lEQVQIHQXBwRGDIBAAwO2/AMcCDHAcPjIRxjJ8Je1kl1uqUgphsWu6w0sIG6npLpcUBql4e/wsVRKabrkNTacIYbMrwsF06rqUhsnXVKVT+Hj+Ue4rPSONk4kAAAAASUVORK5CYII=);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: 'Lato', sans-serif;
    line-height: 1.4;
    color: #ffdebd;
    margin: 1rem;
}
.notch {
    max-width: 400px;
    padding: 3rem;
    background: #f06d06;
    --notchSize: 20px;
    clip-path:
        polygon(
            0% var(--notchSize),
            var(--notchSize) 0%,
            calc(100% - var(--notchSize)) 0%,
            100% var(--notchSize),
            100% calc(100% - var(--notchSize)),
            calc(100% - var(--notchSize)) 100%,
            var(--notchSize) 100%,
            0% calc(100% - var(--notchSize))
        );
}
h2 {
    color: white;
    margin: 0 0 1rem 0;
    font-family: 'Roboto', sans-serif;
}
p {
    margin: 0;
}
input {
    position: absolute;
    top: 20px;
    left: 5vw;
    width: 90vw;
}
</style>
