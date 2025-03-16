document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < 15; i++) { // สร้างหัวใจ 15 ดวง
        createFloatingHeart();
    }
});

function createFloatingHeart() {
    let heart = document.createElement("img");
    heart.src = "images/pong.png"; // เปลี่ยนเป็นชื่อไฟล์รูปหัวใจของคุณ
    heart.className = "floating-heart";

    heart.style.left = Math.random() * 100 + "vw"; // ตำแหน่งแนวนอนสุ่ม
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // สุ่มความเร็วลอย
    heart.style.animationDelay = Math.random() * 2 + "s"; // สุ่มการเริ่มต้นของอนิเมชัน

    document.body.appendChild(heart);

    // ลบหัวใจเมื่ออนิเมชันจบ
    setTimeout(() => {
        heart.remove();
    }, 100000); // หัวใจจะถูกลบหลังจากอนิเมชัน 5 วินาที
}
