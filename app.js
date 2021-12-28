const App = {
    data() {
        return {
            // nullable: null,
            // string: 'Vue.js salom!',
            // integer: 22,
            // boolean: true,
            // object: {
            //     ism: 'Shayxnazar',
            //     yoshi: 22,
            //     kasbi: 'Talaba',
            // },
            array: [
                sariq => 'yellow',
                qora => 'black',
                red => 'red',
                green => 'green'
            ],
            son: 2
        }
    },

    methods: {
        // Bu biror sonni kubini qaytaradigan funksiya
        sonniKubi(item) {
            return Math.pow(item, 3)
        }
    },
}

Vue.createApp(App).mount('#app')
