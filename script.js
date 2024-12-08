// 모든 버튼을 선택
const buttons = document.querySelectorAll('.sound-button');

// 각 버튼에 클릭 이벤트 추가
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundNumber = button.getAttribute('data-sound');
        playSound(soundNumber);
    });
});

// 사운드 재생 함수
function playSound(number) {
    const sound = new Audio(`./sounds/sound${number}.mp3`);
    sound.play();
}