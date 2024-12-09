// 모든 버튼을 선택
const buttons = document.querySelectorAll('.sound-button');
let currentAudio = null; // 현재 재생 중인 오디오 객체

// 각 버튼에 클릭 이벤트 추가
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundNumber = button.getAttribute('data-sound');
        playSound(soundNumber);
    });
});

// 사운드 재생 함수
function playSound(number) {
    // 기존에 재생 중인 사운드를 정지
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // 재생 위치 초기화
    }
    // 새 오디오 객체 생성 및 재생
    currentAudio = new Audio(`./sounds/sound${number}.mp3`);
    currentAudio.play();
}
// 정지 버튼 기능
const stopButton = document.querySelector('.stop-button');
stopButton.addEventListener('click', stopAllSounds);

function stopAllSounds() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // 사운드 재생 위치를 0으로 초기화
        currentAudio = null; // 재생 중인 오디오 초기화
    }
}