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
 * 5. 즉, 외부 라이브러리가 로드 완료되기 전에 해당 iframe 이 들어갈 컨테이너(element id)와
 *    `onYouTubePlayerAPIReady` 함수 둘 다 준비되어 있어야 한다.
 * 6. 심지어 hoisting 이 되어야 하는 것인지 `onYouTubePlayerAPIReady`함수는 선언식으로 작성해야한다.
 * */

/**
 * 재사용 가능하도록 모듈 타입으로 만들기 위해
 * window.onYouTubeIframeAPIReady 에 함수를 등록 후 외부 라이브러리(youtube iframe)을 불러온다.
 *
 * 모듈 타입을 적용한 코드는 YoutubeIframeModule.js 에 정리되어있다.
 * */

const YOUTUBE_IFRAME_SRC = "https://www.youtube.com/iframe_api";

const tag = document.createElement("script");
tag.src = YOUTUBE_IFRAME_SRC;
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  const player = new YT.Player("player", {
    videoId: "An6LvWQuj_8",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8",
    },
    events: {
      onReady: () => onPlayerReady(player),
    },
  });
  player.mute();
}

const onPlayerReady = (player) => {
  // player.setVolume(10);
  player.mute();
};
