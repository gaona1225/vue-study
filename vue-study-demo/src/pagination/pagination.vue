<template id = "paginationCom">
    <paginationItem :total-pages = "11" :total = "120" :current-page = "currentPage" @pagechanged = "onPageChange"></paginationItem>
</template>

<script type="text/javascript">
import paginationItem from './pagination-item'
export default {
    name: 'Pagination',
    components: {
        paginationItem
    },
    data () {
        return {
            currentPage: 2
        }
    },
    computed: {
    },
    methods: {
        onPageChange: function (page) {
            console.log(page)
            this.currentPage = page
        }
    }
}
</script>

<style type="text/css">
@import url('https://fonts.googleapis.com/css?family=Lato|Roboto:700');
*:focus {
    outline: none;
}
body {
    background-color: #777;
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAU0lEQVQIHQXBwRGDIBAAwO2/AMcCDHAcPjIRxjJ8Je1kl1uqUgphsWu6w0sIG6npLpcUBql4e/wsVRKabrkNTacIYbMrwsF06rqUhsnXVKVT+Hj+Ue4rPSONk4kAAAAASUVORK5CYII=);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    color: #fff;
    font-family: PingFang SC,Helvetica,sans-serif;
    line-height: 1.4;
    margin: 1rem;
}

#paginationCom {
    display: flex;
    justify-content: center;
    align-items: center;
}

.pagination {
    margin: 0;
    padding: 0;
    list-style: none outside none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pagination li {
    margin: 0 4px;
    padding: 0;
    list-style: none outside none;
    line-height: 25px;
}

.pagination button {
    display: block;
    border: none 0;
    color: #f2f2f2;
    text-shadow: 1px 0 0 #101011;
    padding: .5em 1.5em;
    border-radius: 2px;
    box-shadow: 0 1px 0 #5a5b5c inset, 0 1px 0 #080808;
    background: linear-gradient(to top, #434345, #2f3032);
    text-decoration: none;
    cursor: pointer;
    font-family: "Microsoft Yahei", sans-serif;
    font-size: 100%;
}
.pagination button:hover {
    text-decoration: none;
    box-shadow: 0 1px 0 #f9bd71 inset, 0 1px 0 #0a0a0a;
    background: linear-gradient(to top, #c87100, #f48b03);
}
.pagination button.active {
    text-decoration: none;
    box-shadow: 0 1px 0 #f9bd71 inset, 0 1px 0 #0a0a0a;
    background: linear-gradient(to top, #f48b03, #c87100);
}
</style>
