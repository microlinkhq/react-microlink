import { css } from 'styled-components'
import { fetchFromApi, getApiUrl as createApiUrl } from '@microlink/mql'

const REGEX_LOCALHOST = /http:\/\/localhost/

export const isSSR = typeof window === 'undefined'

export const castArray = value => [].concat(value)

export const getPreferredMedia = (data, mediaProps) => {
  let prefer

  for (let index = 0; index < mediaProps.length; index++) {
    const key = mediaProps[index]
    const value = data[key]
    if (!isNil(value)) {
      prefer = key
      break
    }
  }

  return prefer
}

export const isFunction = fn => typeof fn === 'function'

export const isObject = obj => typeof obj === 'object'

export const isNil = value => value == null

export const getUrlPath = data => (isObject(data) ? data.url : data)

export const someProp = (data, props) =>
  data[props.find(prop => !isNil(data[prop]))]

export const media = {
  mobile: (...args) => css`
    @media (max-width: 48em) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 48em) {
      ${css(...args)};
    }
  `
}

export const getApiUrl = ({
  apiKey,
  contrast = false,
  data,
  force,
  headers,
  media,
  prerender,
  proxy,
  ttl,
  url
}) =>
  createApiUrl(url, {
    apiKey,
    audio: media.includes('audio'),
    data,
    force,
    headers,
    iframe: media.includes('iframe'),
    palette: contrast,
    prerender,
    proxy,
    screenshot: media.includes('screenshot'),
    ttl,
    video: media.includes('video')
  })

export { fetchFromApi }

export const isLarge = cardSize => cardSize === 'large'

export const isSmall = cardSize => cardSize === 'small'

export const imageProxy = url =>
  REGEX_LOCALHOST.test(url)
    ? url
    : `https://images.weserv.nl/?url=${encodeURIComponent(url)}&l=9&af&il&n=-1`

export const isLazySupported = !isSSR && 'IntersectionObserver' in window

export const formatSeconds = secs => {
  const secsToNum = parseInt(secs, 10)
  const hours = Math.floor(secsToNum / 3600)
  const minutes = Math.floor(secsToNum / 60) % 60
  const seconds = secsToNum % 60

  return [hours, minutes, seconds]
    .filter((v, i) => v > 0 || i > 0)
    .map(v => (v >= 10 ? v : `0${v}`))
    .join(':')
}

const BASE_CLASSNAME = 'microlink_card'
const CONTENT_BASE_CLASSNAME = `${BASE_CLASSNAME}__content`
const MEDIA_BASE_CLASSNAME = `${BASE_CLASSNAME}__media`
const CONTROLS_BASE_CLASSNAME = `${MEDIA_BASE_CLASSNAME}__controls`

export const classNames = {
  main: BASE_CLASSNAME,
  content: CONTENT_BASE_CLASSNAME,
  title: `${CONTENT_BASE_CLASSNAME}_title`,
  description: `${CONTENT_BASE_CLASSNAME}_description`,
  url: `${CONTENT_BASE_CLASSNAME}_url`,
  mediaWrapper: `${MEDIA_BASE_CLASSNAME}_wrapper`,
  media: MEDIA_BASE_CLASSNAME,
  image: `${MEDIA_BASE_CLASSNAME}_image`,
  videoWrapper: `${MEDIA_BASE_CLASSNAME}_video_wrapper`,
  video: `${MEDIA_BASE_CLASSNAME}_video`,
  audioWrapper: `${MEDIA_BASE_CLASSNAME}_audio_wrapper`,
  audio: `${MEDIA_BASE_CLASSNAME}_audio`,
  mediaControls: CONTROLS_BASE_CLASSNAME,
  playbackControl: `${CONTROLS_BASE_CLASSNAME}_playback`,
  volumeControl: `${CONTROLS_BASE_CLASSNAME}_volume`,
  rwControl: `${CONTROLS_BASE_CLASSNAME}_rewind`,
  ffwControl: `${CONTROLS_BASE_CLASSNAME}_fast_forward`,
  rateControl: `${CONTROLS_BASE_CLASSNAME}_rate`,
  progress: `${CONTROLS_BASE_CLASSNAME}_progress`,
  progressBar: `${CONTROLS_BASE_CLASSNAME}_progress_bar`,
  progressBarDrag: `${CONTROLS_BASE_CLASSNAME}_progress_bar_drag`,
  progressTooltip: `${CONTROLS_BASE_CLASSNAME}_progress_tooltip`,
  progressHandle: `${CONTROLS_BASE_CLASSNAME}_progress_handle`,
  progressTime: `${CONTROLS_BASE_CLASSNAME}_progress_time`,
  spinner: `${CONTROLS_BASE_CLASSNAME}_spinner`,
  iframe: `${BASE_CLASSNAME}__iframe`
}
