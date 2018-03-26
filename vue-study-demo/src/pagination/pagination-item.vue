<template>
    <ul class = "pagination" aria-label = "Page navigation">
        <li>
            <button type = "button" @click = "onClickFirstPage" :disabled = "isInFirstPage" aria-label = "Go to the first page">« First</button>
        </li>
        <li>
            <button type = "button" @click = "onClickPreviousPage" :disabled = "isInFirstPage" aria-label = "Previous">«</button>
        </li>
        <li v-for = "(page, index) in pages" :key = "index">
            <button type = "button" @click = "onClickPage(page.name)" :disabled = "page.isDisabeld" :class = "{active: isPageActive(page.name)}" aria-label = "`Go to page number ${page.name}`">{{ page.name }}</button>
        </li>

        <li>
            <button type = "button" @click = "onClickNextPage" :disabled = "isInLastPage" aria-label = "Next">Next »</button>
        </li>
        <li>
            <button type = "button" @click = "onClickLastPage" :disabeld = "isInLastPage" aria-label = "Go to last page">»</button>
        </li>
    </ul>
</template>

<script type="text/javascript">
export default {
    name: 'paginationItem',
    props: {
        maxVisibleButtons: {
            type: Number,
            required: false,
            default: 3
        },
        totalPages: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        }
    },
    components: {
    },
    data () {
        return {
        }
    },
    computed: {
        isInFirstPage: function () {
            return this.currentPage === 1
        },
        isInLastPage: function () {
            return this.currentPage === this.totalPages
        },
        startPage: function () {
            if (this.currentPage === 1) {
                return 1
            }
            if (this.currentPage === this.totalPages) {
                return this.totalPages - this.maxVisibleButtons + 1
            }
            return this.currentPage - 1
        },
        endPage: function () {
            return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages)
        },
        pages: function () {
            const range = []
            for (let i = this.startPage; i <= this.endPage; i += 1) {
                range.push({
                    name: i,
                    isDisabeld: i === this.currentPage
                })
            }
            return range
        }
    },
    methods: {
        onClickFirstPage: function () {
            console.log('First')
            this.$emit('pagechanged', 1)
        },
        onClickPreviousPage: function () {
            this.$emit('pagechanged', this.currentPage - 1)
        },
        onClickPage: function (page) {
            this.$emit('pagechanged', page)
        },
        onClickNextPage: function () {
            this.$emit('pagechanged', this.currentPage + 1)
        },
        onClickLastPage: function () {
            this.$emit('pagechanged', this.totalPages)
        },
        isPageActive: function (page) {
            return this.currentPage === page
        }
    }
}
</script>
