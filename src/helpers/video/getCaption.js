const videoCaptions = {
  cht: '中文',
  ja: '日文',
  vi: '越南文',
  en: '英文'
}

const getCaption = (lang, captions) => {
  return captions.indexOf(lang) > -1 ? videoCaptions[lang] : null
}

module.exports = {
  videoCaptions,
  getCaption
}
