// @ts-check

/**
 * 필독!!
 * 해당 라이브러리는 다른 라이브러리와 다르게 작동한다.
 *
 * 1. module 타입은 지원하지 않는다.
 * 2. 외부 라이브러리(youtube iframe)을 불러와 내가 라이브러리 메서드를 호출해 사용하는 것이 아니다.
 * 3. 공식 문서에서 function onYouTubePlayerAPIReady() {} 함수를 작성하라고 되어있는데, 이 함수를
 *    작성해두면 외부 라이브러리가 비동기 로드 완료된 후 전역에서 `onYouTubePlayerAPIReady` 함수를 찾아 실행한다.
 * 4. 그렇게 때문에 `onYouTubePlayerAPIReady`함수가 작성된 자바스크립트 리소스를 모듈 타입이 아닌
 *    type="text/javascript" 전역으로 소스를 불러와야한다.
 * 5. 즉, 외부 라이브러리가 로드 완료되고 실해될 때 iframe 이 들어갈 컨테이너(element id)와
 *    `onYouTubeIframeAPIReady` 함수가 존재하면 알아서 youtube iframe 이 추가되는 방식이다.
 * */

/**
 * 재사용 가능하도록 모듈 타입으로 만들기 위해
 * window.onYouTubeIframeAPIReady 에 함수를 등록 후 외부 라이브러리(youtube iframe)을 불러온다.
 * */

import { loadScript } from "./importExternalScript.js";

const YOUTUBE_IFRAME_SRC = "https://www.youtube.com/iframe_api";

// currying 이 적용된 재사용 가능한 최종 리턴 함수
export const attachYoutubeIframe = async ({ elementId, videoId }) => {
  try {
    const result = await loadScript({ src: YOUTUBE_IFRAME_SRC });
    if (result.load) {
      // 사실 안 기다려도 상관 없다...
      window.onYouTubePlayerAPIReady = onYouTubePlayerAPIReady({
        elementId,
        videoId,
      });
    }
  } catch (e) {
    console.error(e);
  }
};

// 재사용 가능하도록 수정한 함수
const onYouTubePlayerAPIReady = ({ elementId, videoId }) => {
  return () => {
    const player = new YT.Player(elementId, {
      videoId: videoId,
      playerVars: {
        autoplay: true,
        loop: true,
        playlist: videoId,
      },
      events: {
        onReady: () => onPlayerReady(player),
      },
    });
  };
};

const onPlayerReady = (player) => {
  // player.setVolume(10);
  player.mute();
};
