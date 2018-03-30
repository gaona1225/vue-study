<template>
    <div>
        <h1>初中一年级学生考试分数统计</h1>
        <div class = "control">
            <label for = "studentName">学生: </label>
            <input type = "text" v-model = "newTest.studentName" id = "studentName" />
            <label for = "score">分数: </label>
            <input type = "text" v-model = "newTest.score" id = "score" />
            <button @click = "addTestScore">添加</button>
        </div>
        <ul>
            <li v-for = "(test, index) in tests" :key = "index">{{ test.studentName }}: {{ test.score }}</li>
        </ul>
        <div class = "total">
            <!--<span>总分: {{ totalScore() }}</span>
            <span>平均分: {{ averageScore() }}</span>-->
            <span>总分: {{ totalScore }}</span>
            <span>平均分: {{ averageScore }}</span>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'StudentScore',
    components: {
    },
    data () {
        return {
            newTest: {
                studentName: 'Jack',
                score: 0,
                total: 0,
                average: 0
            },
            tests: [
                {studentName: 'Billy', score: 76},
                {studentName: 'Suzy', score: 85},
                {studentName: 'Emma', score: 93}
            ]
        }
    },
    watch: {
        averageScore: function () {
            this.autoSave()
        }
    },
    computed: {
        totalScore: function () {
            let totalArray = this.tests.reduce((acc, test) => {
                return acc + parseInt(test.score)
            }, 0)
            return totalArray
        },
        averageScore: function () {
            let totalArray = this.tests.reduce((acc, test) => {
                return acc + parseInt(test.score)
            }, 0)
            return parseFloat(totalArray / this.tests.length).toFixed(2)
        }
    },
    methods: {
        /* totalScore: function () {
            let totalArray = [];
            for (let i = 0; i< this.tests.length; i ++) {
                totalArray.push(parseInt(this.tests[i].score))
            }
            this.newTest.total = totalArray.reduce((x, y) => {
                return x + y
            })
            return this.newTest.total
        },
        averageScore: function () {
            let totalArray = []
            for (let i = 0; i < this.tests.length; i ++) {
                totalArray.push(parseInt(this.tests[i].score))
            }
            this.newTest.total = totalArray.reduce((x, y) => {
                return x + y
            })
            return this.newTest.average = parseFloat(this.newTest.total / totalArray.length).toFixed(2)
        }, */
        addTestScore: function () {
            this.tests.push({studentName: this.newTest.studentName, score: this.newTest.score})
            this.newTest.studentName = 'Jack'
            this.newTest.score = 0
        },
        autoSave: function () {
            // 假设我们正在钓鱼我们的后端来保存数据
            console.log('Calling Api, Saving data')
        }
    }
}
</script>

<style lang = "scss">
@import url(https://fonts.googleapis.com/css?family=Montserrat);

$colour:hsla(350,100%,25%,1);
$grey:desaturate($colour,90%);

body {
    background:lighten($grey,30%);
    background-image:
    linear-gradient(40deg,transparentize($grey,0.95),transparentize($colour,0.95)),
    linear-gradient(135deg,
        lighten($grey,18%) 0%,
        lighten($grey,18%) 10%,
        lighten($grey,25%) 11%,
        lighten($grey,25%) 40%,
        lighten($grey,35%) 41%,
        lighten($grey,35%) 50%,
        lighten($grey,18%) 51%,
        lighten($grey,18%) 60%,
        lighten($grey,25%) 61%,
        lighten($grey,25%) 90%,
        lighten($grey,35%) 91%)
    ;
    background-size:7px 7px, 4px 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: montserrat;
}
html,body {
    width: 100vw;
    height: 100vh;
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
h1 {
    margin: 0 0 25px;
    display: inline-block;
    border-bottom: 2px solid #69f;
    padding-bottom: 5px;
    color: #69f;
    text-shadow: 1px 1px 0 rgba(#000, .4);
}
.control {
    margin-bottom: 20px;
    label,
    span {
        display: inline-block;
        vertical-align: middle;
    }
    input {
        height: 40px;
        padding: 5px 10px;
        box-sizing: border-box;
        border-radius: 3px;
        border: 1px solid rgba(#000, .5);
        box-shadow: 0 0 3px rgba(#000, .15);
        &:focus,
        &:active {
            outline: none 0;
            box-shadow: 0 0 4px rgba(0, 169, 244, .9);
            border-color: rgba(0, 169, 244, 1);
        }
    }
    button {
        padding: 0px 20px;
        background: #ff0030;
        color: #fff;
        height: 32px;
        display: inline-block;
        font-size: 16px;
        border: 2px dashed #fff;
        border-radius: 3px;
        box-shadow: 0 0 0 4px #ff0030, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
        text-shadow: -1px -1px #aa3030;
        font-weight: normal;
        box-sizing: border-box;
        margin-left: 10px;
    }
}
ul {
    list-style: none outside none;
    text-align: left;
    margin: 0 0 20px;
    padding: 0 0 20px;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 3px double rgba(#000, .8);
    li {
        list-style: none;
        line-height: 30px;
        flex: 0 0 33.3333%
    }
}

.total {
    display: flex;
    justify-content: space-around;
    font-size: 1.5rem;
    font-weight: bold;
}
</style>
