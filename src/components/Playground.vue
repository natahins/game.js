<template>
    <div class="playground">
        <div class="playground__line" v-for='(line, keyLine) in matrix'>
            <div v-for='(block, keyBlock) in line' :class='["playground__block", addClass(keyLine, keyBlock)]'>
                <div class="checker" v-if='block !== null'></div>
            </div>
        </div>
    </div>
</template>


<script>
import { Games } from 'js/classes/Games';

export default {
    name: 'Playground',
    data() {
        return {
            fieldLength: 8,
            matrix: new Games('checkers').load()
        }
    },
    created() {

    },
    methods: {
        addClass(keyLine, keyBlock) {
            if (keyLine % 2 === 0) {
                return `${keyBlock % 2 === 0 ? 'playground__block_theme_white' : 'playground__block_theme_black'} keyLine-${keyLine} keyBlock-${keyBlock}`;
            } else {
                return `${keyBlock % 2 === 0 ? 'playground__block_theme_black' : 'playground__block_theme_white'} keyLine-${keyLine} keyBlock-${keyBlock}`;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @mixin bottomPosition () {
        position: absolute;
        left: 35px;
        font-size: 30px;
        top: 155px;
    }

    @mixin leftPosition () {
        position: absolute;
        left: -60px;
        font-size: 30px;
        top: 50px;
    }
    .playground {
        width: 800px;
        padding: 30px;
        background: #bebbbb;
        box-shadow: inset 0px 0px 10px 0px;
        margin: 0 auto;
        zoom: .8;
        &__block {
            width: 100px;
            height: 100px;
            display: inline-block;
            position: relative;
            padding: 20px;
            box-sizing: border-box;
            &_theme_white {
                background: #fff;
            }
            &_theme_black {
                background: #000
            }
        }
        &__line {
            line-height: 0;
        }

        .checker {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            box-sizing: border-box;
        }

        .keyLine-7.keyBlock-0:after {
            content: "1";
            @include leftPosition();
        }

        .keyLine-6.keyBlock-0:after {
            content: "2";
            @include leftPosition();
        }

        .keyLine-5.keyBlock-0:after {
            content: "3";
            @include leftPosition();
        }

        .keyLine-4.keyBlock-0:after {
            content: "4";
            @include leftPosition();
        }

        .keyLine-3.keyBlock-0:after {
            content: "5";
            @include leftPosition();
        }

        .keyLine-2.keyBlock-0:after {
            content: "6";
            @include leftPosition();
        }

        .keyLine-1.keyBlock-0:after {
            content: "7";
            @include leftPosition();
        }

        .keyLine-0.keyBlock-0:after {
            content: "8";
            @include leftPosition();
        }

        .keyLine-7.keyBlock-0:before {
            content: "a";
            @include bottomPosition();
        }

        .keyLine-7.keyBlock-1:before {
            content: "b";
            @include bottomPosition();
        }

        .keyLine-7.keyBlock-2:before {
            content: "c";
            @include bottomPosition();
        }

        .keyLine-7.keyBlock-3:before {
            content: "d";
            @include bottomPosition();
        }

        .keyLine-7.keyBlock-4:before {
            content: "e";
            @include bottomPosition();
        }

        .keyLine-7.keyBlock-5:before {
            content: "f";
            @include bottomPosition();
        }

        .keyLine-7.keyBlock-6:before {
            content: "g";
            @include bottomPosition();
        }

        .keyLine-7.keyBlock-7:before {
            content: "h";
            @include bottomPosition();
        }
    }
</style>
