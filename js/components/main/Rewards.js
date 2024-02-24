import { $, render } from "../../utils/render.js";

const container = $(".rewards");
const template = `
<div class="bg-left"></div>
<div class="bg-right"></div>
<div class="inner">
  <div class="btn-group">
    <div class="btn btn--reverse sign-up">회원가입</div>
    <div class="btn sign-in">로그인</div>
    <div class="btn gift">e-Gift 선물하기</div>
  </div>
</div>
`;

render(container)(template);
