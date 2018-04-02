<template>
    <transition name = "modalItem">
        <div class = "modal-mask" @click = "$emit('close')">
            <div class = "modal-wrapper">
                <div class = "modal-container">
                    <div class = "modal-header">
                        <slot name = "header">
                            default header
                        </slot>
                    </div>

                    <div class = "modal-body">
                        <slot name = "body">
                            default body
                        </slot>
                    </div>

                    <div class = "modal-footer">
                        <slot name = "footer">
                            default footer
                            <button class = "modal-default-button" @click = "$emit('close')">
                                OK
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script type="text/javascript">
export default {
    name: 'modalItem',
    props: {
    },
    data () {
        return {
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>
