// progress.js

document.addEventListener('DOMContentLoaded', () => {
    const leftCircle = document.querySelector('.progress-circle .circle.left');
    const rightCircle = document.querySelector('.progress-circle .circle.right');
    const progressText = document.getElementById('progress-text');
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');

    let progress = 0;
    let interval;

    const updateProgress = () => {
        progress += 1;
        progressText.textContent = `${progress}%`;

        if (progress <= 50) {
            rightCircle.style.transform = `rotate(${progress * 3.6}deg)`;
        } else {
            rightCircle.style.transform = 'rotate(180deg)';
            leftCircle.style.transform = `rotate(${(progress - 50) * 3.6}deg)`;
        }

        if (progress >= 100) {
            clearInterval(interval);
        }
    };

    startBtn.addEventListener('click', () => {
        if (!interval) {
            interval = setInterval(updateProgress, 100);
        }
    });

    stopBtn.addEventListener('click', () => {
        clearInterval(interval);
        interval = null;
    });
});
