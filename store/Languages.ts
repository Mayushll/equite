import {makeAutoObservable} from "mobx";


class Languages {
    language = "ru"
    languages = {
        main:{
            title:{
                ru: "Поделитесь своими результатами",
                eng: "Share your results"
            },
            subtitle:{
                ru: "И ПОЛУЧИТЕ ДОВЕРИЕ БОЛЬШОГО КОЛИЧЕСТВА ИНВЕСТОРОВ",
                eng: "AND GAIN THE TRUST OF A LARGE NUMBER OF INVESTORS"
            }
        },
        nav:{
            homepage:{
                ru: "Главная",
                eng: "Homepage"
            },
            ratings:{
                ru: "Рейтинги",
                eng: "Ratings"
            },
            blog:{
                ru: "Блог",
                eng: "Blog"
            },
            PRO:{
                ru: "PRO",
                eng: "PRO"
            },
        },
        buttons:{
            start: {
                ru: "Начать",
                eng: "Start"
            },
            trader:{
                ru: "Я трейдер",
                eng: "I`m a trader"
            },
            investor:{
                ru: "Инвестору",
                eng: "For the investor"
            },
            language:{
                ru: "RU",
                eng: "EN"
            },
            login:{
                ru: "Войти",
                eng: "Log in"
            }
        }

    }
    constructor() {
        makeAutoObservable(this)
    }
    setLanguage(language){
        language === "ru" ? this.language = "eng" : this.language = "ru"
    }

}

export default new Languages()