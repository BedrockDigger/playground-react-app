import React, { Component } from 'react'
import WordCloud from 'react-wordcloud'
import axios from 'axios'
import md5 from 'md5'
import { RateLimiter } from 'limiter'
import _ from 'lodash'

class TranslatedWordCloud extends Component {

    constructor(props) {

        super(props)

        this.appid = '20200820000547686'
        this.key = 'r7ka11zpsN4a4BxBncQ2'

        this.limiter = new RateLimiter(10, 'second')

        this.state = {
            wordColl: []
        }

        this.traverseLang = this.traverseLang.bind(this)
        this.sendSlowRequest = this.sendSlowRequest.bind(this)
        this.getRandomInt = this.getRandomInt.bind(this)
        this.updateWordColl = this.updateWordColl.bind(this)
        this.fontSizeMapper = this.fontSizeMapper.bind(this)
        this.rotate = this.rotate.bind(this)
    }

    componentDidMount() {
        this.traverseLang()
    }

    traverseLang() {
        const langList = [
            'zh', 'yue', 'wyw', 'jp', 'kor',
            'fra', 'spa', 'th', 'ara', 'ru',
            'pt', 'de', 'it', 'el', 'nl',
            'pl', 'bul', 'est', 'dan', 'fin',
            'cs', 'rom', 'slo', 'swe', 'hu',
            'cht', 'vie'
        ]
        const s = this.state
        while (s.wordColl.length < 26) {
            for (let lang of langList) {
                this.sendSlowRequest(lang)
                if (s.wordColl.length = 26)
                    break
            }
        }
    }

    sendSlowRequest = (lang) => _.throttle(() => {
        const { word } = this.props
        const randNum = this.getRandomInt(1, 999999999)
        const sign = md5(this.appid + word + randNum + this.key) // according to http://api.fanyi.baidu.com/api/trans/product/apidoc#joinFile
        axios.get(
            'https://fanyi-api.baidu.com/api/trans/vip/translate',
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
            async (res) => {
                const s = this.state
                const translatedWord = res.data.trans_result?.[0].dst
                if (!translatedWord && !s.wordColl.includes(translatedWord)) {
                    this.updateWordColl(translatedWord)
                    console.log('New word added')
                }
            }
        )
    }, 100)

    getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
    }

    updateWordColl(translatedWord) {
        const newWordObject = { text: translatedWord, value: this.getRandomInt(0, 12) }
        let temp = this.state.wordColl
        temp.push(newWordObject)
        this.setState({ wordColl: temp })
    }

    fontSizeMapper = () => this.getRandomInt(20, 51)
    rotate = () => this.getRandomInt(1, 361)

    getWordColor(word) {
        return 'grey'
    }

    render() {
        const s = this.state
        return (
            <WordCloud
                words={s.wordColl}
                options={{
                    fontFamily: 'Times New Roman',
                    fontSizes: [10, 20],
                    rotations: 2,
                    rotationAngles: [0, 90]
                }}
                callbacks={
                    {
                        getWordColor: this.getWordColor
                    }
                }
            />
        )
    }
}

export default TranslatedWordCloud