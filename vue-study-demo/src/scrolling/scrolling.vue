<template>
    <div>
        <h1>Make yourself some Punk Beers</h1>
        <!-- beers 数组值为空时，显示正在加载中的状态 -->
        <div class = "beer-container">
            <div v-if = "beers.length === 0" class = "loading">Loading</div>
            <!-- 对beers数组进行迭代 -->
            <div v-for = "(beer, index) in beers" :key = "index" class = "beer-contain">
                <div class = "beer-img">
                    <img :src = "beer.img" height = "350" />
                </div>
                <div class = "beer-info">
                    <h2>{{ beer.name }}</h2>
                    <div class = "beer-description">
                        <p>
                            <span class = "bright">Description:</span>
                            {{ beer.desc }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import axios from 'axios'
export default {
    name: 'Scrolling',
    components: {
    },
    created () {
        window.addEventListener('scroll', () => {
            this.bottom = this.bottomVisible()
        })
        this.addBeer()
    },
    data () {
        return {
            bottom: false,
            beers: []
        }
    },
    computed: {
    },
    methods: {
        bottomVisible () {
            const scrollY = window.scrollY
            const visible = document.documentElement.clientHeight
            const pageHeight = document.documentElement.scrollHeight
            const bottomOfPage = visible + scrollY >= pageHeight
            return bottomOfPage || pageHeight < visible
        },
        addBeer () {
            axios.get('https://api.punkapi.com/v2/beers/random').then((response) => {
                let api = response.data[0]
                let apiInfo = {
                    name: api.name,
                    desc: api.description,
                    img: api.image_url,
                    tips: api.brewers_tips,
                    tagline: api.tagline,
                    food: api.food_pairing
                }
                this.beers.push(apiInfo)
                if (this.bottomVisible()) {
                    this.addBeer()
                }
            })
        }
    },
    watch: {
        bottom (bottom) {
            if (bottom) {
                this.addBeer()
            }
        }
    }
}
</script>

<style lang = "scss">
h1,.loading {
    text-align: center;
}
.beer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    padding: 2rem;
}
.beer-contain {
    width: 32%;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-bottom: 15px;
}
.beer-img {
    height: 245px;
    overflow: hidden;
    background-color: #000;
    transition: height 0.5s;
    text-align: center;
}
.beer-img img {
    display: inline-block;
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.5s, transform 0.5s;
    vertical-align: middle;
}
.beer-info {
    position: relative;
    height: 65px;
    padding: 20px;
    transition: height 0.5s;
    h2 {
        margin: 0;
        padding: 0 0 10px 0;
        color: #000;
        font-size: 22px;
        font-weight: bold;
        text-transform: uppercase;
    }
}
.beer-description {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 0;
    margin: 0;
    padding: 0;
    color: #666C74;
    line-height: 27px;
    opacity: 0;
    transform: translateY(45px);
    transition: opacity 0.3s, transform 0.3s;
    transition-delay: 0s;
    p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6;
        overflow: hidden;
    }
}
.beer-contain:hover {
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
    .beer-img {
        height: 60px
        img {
            opacity: 0.6;
            transform: scale(1.2);
        }
    }
    .beer-info {
        height: 200px;
    }
    .beer-description {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.2s;
    }
}
</style>
