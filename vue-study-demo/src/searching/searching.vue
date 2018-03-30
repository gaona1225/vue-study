<template>
    <div>
        <input type = "text" v-model = "searchQuery" />
        <p class = "mt20" v-if = "isSearching">Searching...</p>
        <div class = "mt20" v-else>
            <ol>
                <li v-for = "(result, index) in results" :key = "index">{{ result }}</li>
            </ol>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'Searching',
    components: {
    },
    data () {
        return {
            isSearching: false,
            results: [],
            searchQuery: ''
        }
    },
    computed: {
    },
    methods: {
    },
    watch: {
        searchQuery: function (query) {
            this.isSearching = true
            console.log(query)
            setTimeout(() => {
                this.isSearching = false
                this.results = ['Javascript', 'CSS', 'HTML', 'NodeJs']
            }, 500)
        }
    }
}
</script>

<style lang = "scss">
@import url(https://fonts.googleapis.com/css?family=Montserrat);
html,body {
    width: 100vw;
    height: 100vh;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: montserrat;
    background: linear-gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6));
}

#app {
    background: white;
    border: 0 none;
    border-radius: 3px;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
    padding: 20px 30px;
    box-sizing: border-box;
    text-align: center;
}

input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 0 5px 0 26px;
    border: 1px solid #1c252b;
    height: 30px;
    color: #9fa8b0;
    font-size: 12px;
    line-height: 30px;
    font-weight: bold;
    text-shadow: 1px 1px #1f272b;
    border-radius: 25px;
    background: url(http://i.imgur.com/ViUxYgE.png), linear-gradient(to right, #20282D 3%, #252E34 51%, #222A30 100%);
    background-repeat: no-repeat;
    background-position: 5px center, 0 0;
    box-shadow: 1px 1px 1px rgba(255,255,255,0.1);
     &:focus,
     &:active{
        outline: none;
        border-color: rgba(#03a9f4, .8);
        box-shadow: 1px 1px 4px rgba(#03a9f4, .75);
     }
}

.mt20 {
    margin-top: 20px;
}
ol {
    list-style: none outside none;
    padding:10px;
    border-radius: 5px;
    background: linear-gradient(to bottom, #20282D 3%, #252E34 51%, #222A30 100%);
    box-shadow: 1px 1px 1px rgba(255,255,255,0.1);
    min-width: 30vw;
    li {
        border-radius: 5px;
        margin: 0 0 5px;
        color: #fff;
        background: linear-gradient(to bottom,#515B62 3%, #444E55 5%, #394147 100%);
        &:hover {
          background: linear-gradient(to bottom,#5F6B72 3%,#56646C 4%,#4D5A62 50%,#434D54 100%);
        }
        &:active {
            padding: 5px 12px;
            top: 0;
            background: linear-gradient(to bottom,#515B62 3%,#444E55 5%,#394147 100%);
            box-shadow: 1px 1px 1px rgba(0,0,0,0.2); /* CSS3 */
        }
    }
}
p {
    text-align: center;
    padding:10px;
    border-radius: 5px;
    background: linear-gradient(to bottom, #20282D 3%, #252E34 51%, #222A30 100%);
    box-shadow: 1px 1px 1px rgba(255,255,255,0.1);
    min-width: 30vw;
    color: #fff;
}
</style>
