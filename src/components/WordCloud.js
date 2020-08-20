import React, { Component } from 'react'
import WordCloud from 'react-wordcloud'
import axios from 'axios'
import md5 from 'md5'
import dotenv from 'dotenv'

class TranslatedWordCloud extends Component {

    constructor(props) {

        super(props)

        dotenv.config()

        this.appid = process.env.BAIDU_TRANSLATE_APPID
        this.key = process.env.BAIDU_TRANSLATE_KEY
        this.langList = [
            'zh', 'yue', 'wyw', 'jp', 'kor',
            'fra', 'spa', 'th', 'ara', 'ru',
            'pt', 'de', 'it', 'el', 'nl',
            'pl', 'bul', 'est', 'dan', 'fin',
            'cs', 'rom', 'slo', 'swe', 'hu',
            'cht', 'vie'
        ]

        this.state = {
            wordList: []
        }

        this.getRandomInt = this.getRandomInt.bind(this)
        this.getTranlatedList = this.getTranlatedList.bind(this)
        this.fontSizeMapper = this.fontSizeMapper.bind(this)
        this.rotate = this.rotate.bind(this)
        this.getTranlatedList = this.getTranlatedList.bind(this)
        this.translateFocusWord = this.translateFocusWord.bind(this)
        this.genWordData = this.genWordData.bind(this)
    }

    componentWillMount() {
        const { word } = this.props
        this.genWordData(word)
    }

    getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
    }

    fontSizeMapper = () => this.getRandomInt(20, 51)
    rotate = () => this.getRandomInt(1, 361)

    async getTranlatedList(word) {
        const translatedList = this.langList.map(
            async (lang) => await this.translateFocusWord(word, lang)
        )
        return translatedList
    }

    async translateFocusWord(word, lang) {
        const randNum = this.getRandomInt(1, 999999999)
        const sign = md5(this.appid + word + randNum + this.key) // according to http://api.fanyi.baidu.com/api/trans/product/apidoc#joinFile
        const tWord = await axios.get(
            'http://fanyi-api.baidu.com/api/trans/vip/translate',
            {
                params: {
                    q: word,
                    from: 'en',
                    to: lang,
                    appid: this.appid,
                    salt: randNum,
                    sign: sign
                }
            }
        ).then(
            (res) => {
                console.log(res.data.trans_result?.[0].dst)
                return res.data.trans_result?.[0].dst
            }
        )
        return tWord
    }

    async genWordData(word) {
        const words = []
        const translatedList = await this.getTranlatedList(word)
        for (const item of translatedList) {
            words.push({ text: item, value: 100 })
        }
        this.setState({ words: words })
        // console.log('s.words:', words)
    }

    render() {
        const s = this.state
        console.log('s.words:', words)
        return (
            <WordCloud
                words={s.words}
            />
        )
    }
}

export default TranslatedWordCloud