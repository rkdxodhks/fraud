document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("user-info-form");
  const photoInput = document.getElementById("photo-input");
  const photoPreview = document.getElementById("photo-preview");
  const outputSection = document.getElementById("output-section");
  const inputSection = document.querySelector(".input-container"); // 입력 폼 컨테이너

  // 이미지 미리보기
  photoInput.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        photoPreview.src = e.target.result;
        document.getElementById("output-photo").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // 폼 제출 처리
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // 입력값 가져오기
    const name = document.getElementById("name").value;
    const studentId = document.getElementById("student-id").value;
    const department = document.getElementById("department").value;
    const semester = document.getElementById("semester").value;

    // 출력 영역에 값 설정
    document.getElementById("output-name").textContent = name;
    document.getElementById("output-student-id").textContent = studentId;
    document.getElementById("output-department").textContent = department;
    document.getElementById("output-semester").textContent = semester;

    // 입력 폼 숨기기
    inputSection.style.display = "none";

    // 출력 섹션 표시
    outputSection.style.display = "block";
  });
});

// 시간 업데이트 함수
function updateTime() {
  const timeElement = document.getElementById("current-date");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // 'hh:mm:ss' 형식으로 시간 표시
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// 버스 번호 업데이트 함수
function updateBusNumber() {
  const busNumberElement = document.getElementById("bus-number");
  const randomNumber = Math.floor(Math.random() * (120 - 10 + 1)) + 10; // 10부터 120 사이의 랜덤 숫자
  busNumberElement.textContent = randomNumber;
}

// DOM이 로드된 후 실행되도록 이벤트 리스너 추가
document.addEventListener("DOMContentLoaded", () => {
  // 페이지 로드 시 시간 업데이트 및 1초마다 업데이트
  setInterval(updateTime, 1000);
  updateTime(); // 즉시 시간 업데이트

  // 페이지 로드 시 랜덤 버스 번호 업데이트
  updateBusNumber();
});
