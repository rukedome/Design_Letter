const carouselImages = document.getElementById("carousel-images");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
const imageCount = 8; // 이미지 총 개수
const imageWidth = 280 + 20; // 이미지 가로 길이 + 여백

// 이미지 10개 동적 생성 (예시로 좌표 추가)
const mailboxLocations = [
  { lat: 40.73611, lng: -73.992111 },
  { lat: 37.7749, lng: -122.4194 }, // San Francisco, CA
  { lat: 34.0522, lng: -118.2437 }, // Los Angeles, CA
  { lat: 40.7128, lng: -74.006 }, // New York, NY
  { lat: 51.5074, lng: -0.1278 }, // London, UK
  { lat: 48.8566, lng: 2.3522 }, // Paris, France
  { lat: 35.6895, lng: 139.6917 }, // Tokyo, Japan
  { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
  { lat: 55.7558, lng: 37.6173 }, // Moscow, Russia
  { lat: 52.52, lng: 13.405 }, // Berlin, Germany
  { lat: 45.4654, lng: 9.1859 }, // Milan, Italy
];

for (let i = 1; i <= imageCount; i++) {
  const img = document.createElement("img");
  img.src = `./images/mailbox/mailbox${i}.jpg`; // 이미지 파일 이름이 mailbox1.jpg, mailbox2.jpg 등의 형식으로 생성
  carouselImages.appendChild(img);

  // 이미지 클릭 시 해당 메일박스 위치의 구글 맵 링크로 이동
  img.addEventListener("click", () => {
    const location = mailboxLocations[i - 1];
    const googleMapsUrl = `https://www.google.com/maps?q=${location.lat},${location.lng}`;
    window.open(googleMapsUrl, "_blank");
  });

  carouselImages.appendChild(img);
}

// 이미지 이동 로직
nextBtn.addEventListener("click", () => {
  if (currentIndex < imageCount - 1) {
    currentIndex++;
    carouselImages.style.transform = `translateX(${
      -currentIndex * imageWidth
    }px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    carouselImages.style.transform = `translateX(${
      -currentIndex * imageWidth
    }px)`;
  }
});
