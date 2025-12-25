# 🤖 Agent's Game Dev Guide (실전 개발 노하우)

이 가이드는 AI 에이전트와 개발자가 추첨 게임 포털의 게임을 수정하거나 새롭게 만들 때, **"어떻게 하면 저사양 PC에서도 부드럽고, 박진감 넘치는 게임을 만들 수 있는가"**에 대한 실전 경험을 정리한 문서입니다.

---

## 1. 일관된 게임 속도: 델타 타임 (Delta Time)
프레임 기반(`requestAnimationFrame` 호출마다 일정 거리 이동)으로 구현하면 성능이 좋은 PC에서는 너무 빠르고, 느린 PC에서는 너무 느려집니다. 하드웨어 사양에 상관없이 동일한 물리 법칙을 적용하려면 반드시 **델타 타임**을 사용하세요.

### 델타 타임 적용 패턴
```javascript
let lastTimestamp = 0;

function gameLoop(timestamp) {
  if (!gameRunning) return;
  
  // 초 단위의 차이 계산 (60fps 기준 약 0.016s)
  if (!lastTimestamp) lastTimestamp = timestamp;
  const dt = (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;

  // 탭 전환 등으로 인한 급격한 튀튀 방지
  const cappedDt = Math.min(dt, 0.1);
  
  update(cappedDt);
  draw();
  requestAnimationFrame(gameLoop);
}

function update(dt) {
  const dtScale = dt * 60; // 60fps 기준 보정값
  // 위치 이동 시 dtScale을 곱해줌
  player.x += player.vx * dtScale;
  gravity = 0.1 * dtScale;
}
```

## 2. 성능 최적화: 캔버스 캐싱 (Canvas Caching)
매 프레임마다 `ctx.arc()`, `ctx.stroke()`, `ctx.fill()`을 수십 번 호출하는 것은 저사양 기기에서 매우 치명적입니다. 변하지 않는 배경이나 반복되는 복잡한 오브젝트는 가상 캔버스에 미리 그려두세요.

### 최적화 전략
- **정적 배경**: 하늘, 나무, 잔디 등은 게임 시작 시 또는 리사이즈 시에만 `treeCanvas`에 한 번 그리고, `draw` 함수에서는 `ctx.drawImage(treeCanvas, 0, 0)` 한 줄만 실행합니다.
- **오브젝트 스프라이트**: 가시가 많은 밤송이처럼 복잡한 이모지/도형은 `chestnutCache` 캔버스에 미리 렌더링한 후 이미지를 복사해 사용하세요. (실제 '밤송이 서바이벌'에서 성능이 5배 이상 향상됨)

## 3. 박진감 넘치는 연출 (Game Juice)
추첨 게임은 결과만큼이나 '과정의 긴장감'이 중요합니다. 아래 효과들을 적극 활용하세요.

- **스크린 셰이크 (Screen Shake)**: 캐릭터가 충돌하거나 폭발할 때 게임 영역 전체를 짧게 흔들어주세요. (CSS Animation이나 Canvas Transform 활용)
- **반동 효과 (Recoil)**: 물건을 받거나 충격이 가해질 때, 물체가 날아온 반대 방향으로 살짝 밀렸다가 돌아오는 `cubic-bezier(0.175, 0.885, 0.32, 1.275)` 곡선을 활용하세요.
- **포물선 던지기**: `Web Animations API`를 사용하여 폭탄이나 물체를 던질 때 중간 지점에서 `scale`을 키우면 3D 포물선 느낌을 줄 수 있습니다.
- **방향 인지**: 폭탄을 들 때 단순히 위에 띄우지 말고, 원의 중심을 향해 '앞으로 내밀고 있는' 위치를 계산(벡터 활용)하여 배치하세요.

## 4. 난이도 가속 (Escalation)
게임이 처음부터 끝까지 같은 속도면 지루합니다.
- **시간 기반**: 게임 시작 10초 후부터 중력이나 속도를 `difficultyMultiplier`를 통해 서서히 높이세요.
- **상태 기반**: 생존자가 줄어들수록(탈락자가 늘어날수록) 남은 이들의 속도를 높여 긴장감을 유도하세요.
- **UI 피드백**: 가속 모드가 시작될 때 화면에 경고 문구(예: `⚠️ 위험! 가속 모드 ⚠️`)를 띄워 플레이어에게 시각적 신호를 줍니다.

## 5. 반응형 게임 레이아웃
브라우저 창 크기에 따라 게임 요소가 너무 작아지지 않게 관리하세요.
- **CSS 변수 활용**: `:root`에 `--circle-size`, `--player-size` 등을 정의하고 미디어 쿼리에서 이 변수값만 조정합니다.
- **리사이즈 대응**: `window.onresize` 시점에 물리 좌표를 다시 계산하여 캐릭터들이 화면 밖으로 나가지 않게 재배치합니다.

## 6. 데이터 신뢰성
- **localStorage**: 모든 설정값과 참여자 명단은 입력 즉시 저장하여 새로고침 시에도 유지되어야 합니다.
- **정밀 타이머**: 초 단위만 보여주더라도 내부적으로는 소수점 셋째 자리(`.3f`)까지 계산하여 '동시에 죽었을 때'의 순위 정렬이나 기록 경쟁에 활용하세요.

---
*이 가이드는 `bomb`, `chestnut-survival` 게임의 개선 과정에서 얻은 교훈을 바탕으로 작성되었습니다.*
