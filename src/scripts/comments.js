import Vue from "vue"
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const commentItem = {
    template: "#speak-item",
    props: ['item'],
    components:{
        swiperSlide
    }
}

new Vue({
    el:"#speak-component",
    template: "#speak-list",
    components: {
        commentItem,
        swiper,
    },
    data: {
        comments: [],
        swiperOption: {
            slidesPreView: 2,
            spaceBetween: 10,
            navigation: {
                nextEl: '.speak-btn--right',
                prevEl: '.speak-btn--left',
                disabledClass: '.speak-btn--disabled',
            },
            breakpoints: {
                1800: {
                    slidesPerView: 2,
                },
                750: {
                    slidesPerView: 1,
                }
            }
        }
    },
    methods: {
        addImagePaths(comments) {
            return comments.map(el => {
                let photo = require(`../images/content/${el.photo}`);
                el.photo = photo
                return el
            })
        }
    },
    created() {
        const data = require("../data/comments.json");
        this.comments = this.addImagePaths(data)
    }
})