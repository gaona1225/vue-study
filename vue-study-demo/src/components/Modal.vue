<template>
    <transition name="modal-fade">
        <div class="modal-backdrop" @click="close" v-show="show">
            <div class="modal" @click.stop role="dialog" aria-labeledby="modalTitle" arial-describedby="modalDescription">
                <div class="modal-header">
                    <slot name="header">
                        <h2>这是Modal弹框的标题</h2>
                        <button type="button" class="btn-close" @click="close">x</button>
                    </slot>
                </div>

                <div class="modal-body">
                    <slot name="body">
                        这是Modal弹框的主体
                    </slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        这是Modal弹框的脚部
                        <button type="button" class="btn-green" @click="close">关闭</button>
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Modal',
    props: ['show'],
    data () {
        return {
        }
    },
    methods: {
        close: function () {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
    .modal-backdrop {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background-color: #fff;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
    }

    .modal-header,
    .modal-footer {
        padding: 15px;
        display: flex;
    }

    .modal-header {
        border-bottom: 1px solid #eee;
        color: #4aae9b;
        justify-content: space-between;
    }

    .modal-footer {
        border-top: 1px solid #eee;
        justify-content: flex-end;
    }

    .modal-body {
        position: relative;
        padding: 20px 10px;
    }

    .btn-close {
        border: none 0;
        font-size: 20px;
        padding: 20px;
        cursor: pointer;
        font-weight: bold;
        color: #eaae9b;
        background-color: transparent;
    }

    .btn-green {
        color: #fff;
        background-color: #4aae9b;
        border-radius: 2px;
    }

    .modal-fade-enter,
    .modal-fade-leave-active {
        opacity: 0;
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity .5s ease;
    }
</style>
