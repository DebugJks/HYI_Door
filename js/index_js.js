// 모바일 메뉴 토글

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function () {
        const mainNav = document.getElementById('mainNav');
        if (mainNav) {
            mainNav.classList.toggle('active');
        }
    });
}
// 스크롤 시 헤더 스타일 변경
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});

// 아래로 스크롤 할때 헤더 숨기기
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop && currentScroll > 50) {
        // 아래로 스크롤 → 헤더 숨김
        header.classList.add("hide");
    } else {
        // 위로 스크롤 → 헤더 나타남
        header.classList.remove("hide");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // iOS 스크롤 방지
});

// 첫번째 탭 이미지 4개
// 탭 메뉴 기능
document.addEventListener('DOMContentLoaded', function () {
    const tab22Btns = document.querySelectorAll('.tab22-btn');

    tab22Btns.forEach(btn => {
        btn.addEventListener('click', function () {
            // 모든 탭 버튼과 콘텐츠 비활성화
            document.querySelectorAll('.tab22-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab22-content').forEach(c => c.classList.remove('active'));

            // 현재 클릭한 탭 활성화
            this.classList.add('active');
            const tab22Id = this.getAttribute('data-tab22');
            document.getElementById(tab22Id).classList.add('active');
        });
    });
});

// 섹션 겹친 이미지 펼쳐지는 기능
// document.addEventListener('DOMContentLoaded', function () {
//     const section = document.querySelector('.section-value');
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 section.classList.add('active');
//             }
//         });
//     }, { threshold: 0.2 });

//     observer.observe(section);
// });


// // fade 애니메이션
// document.addEventListener('DOMContentLoaded', function () {

//     // 스크롤 애니메이션
//     const fadeElements = document.querySelectorAll('.fade-up, .container, .tab-menu');

//     function checkScroll() {
//         fadeElements.forEach(element => {
//             const elementTop = element.getBoundingClientRect().top;
//             const windowHeight = window.innerHeight;

//             if (elementTop < windowHeight - 100) {
//                 element.classList.add('visible');
//             }
//         });

//         // 이미지 그리드의 각 아이템에 순차적 애니메이션 적용
//         const imageItems = document.querySelectorAll('.image-item');
//         imageItems.forEach((item, index) => {
//             const itemTop = item.getBoundingClientRect().top;
//             const windowHeight = window.innerHeight;

//             if (itemTop < windowHeight - 100) {
//                 setTimeout(() => {
//                     item.classList.add('visible');
//                 }, index * 200); // 0.2초 간격으로 순차적 애니메이션
//             }
//         });
//     }

//     // 초기 로드 시 체크
//     checkScroll();

//     // 스크롤 이벤트 리스너
//     window.addEventListener('scroll', checkScroll);

//     // 탭 메뉴 기능
//     const tabs = document.querySelectorAll('.tab');
//     const tabContents = document.querySelectorAll('.tab-images');

//     tabs.forEach(tab => {
//         tab.addEventListener('click', () => {
//             // 모든 탭 비활성화
//             tabs.forEach(t => t.classList.remove('active'));
//             tabContents.forEach(content => content.classList.remove('active'));

//             // 선택한 탭 활성화
//             tab.classList.add('active');
//             const tabId = tab.getAttribute('data-tab');
//             document.getElementById(tabId).classList.add('active');
//         });
//     });
// });


// 문의접수

// const form = document.forms['contact-form'];
// const submitBtn = form.querySelector('.submit-btn');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     // 필수 필드 확인
//     const requiredFields = ['이름', '연락처', '학생_학년', '관심_과목', '문의내용'];
//     for (const field of requiredFields) {
//         if (!form[field].value) {
//             alert(`${form[field].placeholder || field} 필드를 입력해주세요.`);
//             form[field].focus();
//             return;
//         }
//     }

//     // 연락처 유효성 검사
//     const phoneNumber = form['연락처'].value;
//     if (!phoneNumber.match(/^[0-9]{11}$/)) {
//         alert("연락처를 11자리 숫자로 입력해주세요 ('-' 제외)");
//         return;
//     }

//     // 버튼 상태 변경
//     const btnText = submitBtn.querySelector('.btn-text');
//     const originalText = btnText.textContent;
//     btnText.textContent = "처리 중...";
//     submitBtn.disabled = true;

//     // 데이터 전송
//     fetch(scriptURL + '?action=contact', {
//         method: 'POST',
//         body: new FormData(form)
//     })
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             }
//             throw new Error("서버 응답 오류");
//         })
//         .then(data => {
//             if (data.result === "success") {
//                 alert("문의가 성공적으로 접수되었습니다.");
//                 form.reset();
//             } else {
//                 throw new Error(data.error || "문의 접수에 실패했습니다.");
//             }
//         })
//         .catch(error => {
//             alert(error.message);
//             console.error('Error!', error);
//         })
//         .finally(() => {
//             // 버튼 상태 복원
//             btnText.textContent = originalText;
//             submitBtn.disabled = false;
//         });
// });

// 드롭다운 스타일링
document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', function () {
        if (this.value) {
            this.style.color = '#1e293b';
        } else {
            this.style.color = '#64748b';
        }
    });
});

// 공지사항 최신글 5개 불러오기
// document.addEventListener('DOMContentLoaded', function () {
//     const latestPostsTable = document.getElementById('latestPostsTable');
//     if (!latestPostsTable) return;

//     const scriptURL = 'https://script.google.com/macros/s/AKfycbwguurzG-f38KpehmGTIWEFVTtVZEF8b2M7SLmxojP2nEkZEUb1h9ukidHb73HAZ_CfmA/exec';

//     function fetchLatestPosts() {
//         fetch(`${scriptURL}?boardType=review`)
//             .then(response => response.json())
//             .then(data => {
//                 if (!Array.isArray(data)) throw new Error("데이터 형식 오류");

//                 // 최신 5개만 선택
//                 const latestPosts = data.slice().reverse().slice(0, 5);

//                 latestPostsTable.innerHTML = '';

//                 latestPosts.forEach((post, index) => {
//                     const row = document.createElement('tr');
//                     row.className = 'post-title';

//                     const titleCell = document.createElement('td');
//                     titleCell.className = 'title';
//                     titleCell.textContent = post["제목"] || '제목 없음';

//                     const dateCell = document.createElement('td');
//                     dateCell.className = 'date';
//                     dateCell.textContent = post["작성일"] ? formatDate(post["작성일"]) : '날짜 없음';

//                     row.appendChild(titleCell);
//                     row.appendChild(dateCell);

//                     const contentRow = document.createElement('tr');
//                     contentRow.className = 'post-content';
//                     contentRow.style.display = 'none';

//                     const contentCell = document.createElement('td');
//                     contentCell.colSpan = 2;
//                     contentCell.innerHTML = `
//                         <div style="margin-bottom: 10px; font-weight: 500;">내용</div>
//                         <div style="white-space: pre-line;">${post["내용"] || '내용 없음'}</div>
//                     `;

//                     contentRow.appendChild(contentCell);

//                     row.addEventListener('click', () => {
//                         const isHidden = contentRow.style.display === 'none';
//                         document.querySelectorAll('.post-content').forEach(item => item.style.display = 'none');
//                         contentRow.style.display = isHidden ? 'table-row' : 'none';
//                     });

//                     latestPostsTable.appendChild(row);
//                     latestPostsTable.appendChild(contentRow);
//                 });
//             })
//             .catch(error => {
//                 latestPostsTable.innerHTML = `
//                     <tr>
//                         <td colspan="2" style="text-align: center; padding: 20px;">
//                             게시글을 불러오는 데 실패했습니다.<br>
//                             ${error.message}
//                         </td>
//                     </tr>`;
//             });
//     }

//     // 날짜 포맷 함수
//     function formatDate(dateString) {
//         const date = new Date(dateString);
//         if (isNaN(date.getTime())) return '날짜 오류';
//         const y = date.getFullYear();
//         const m = String(date.getMonth() + 1).padStart(2, '0');
//         const d = String(date.getDate()).padStart(2, '0');
//         return `${y}-${m}-${d}`;
//     }

//     // 초기 로드
//     fetchLatestPosts();
// });



// 탭 로딩바

// 로딩바 함수
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tabA');
    const tabContents = document.querySelectorAll('.tabA-content');
    const progressBar = document.querySelector('.progress');

    let currentTab = 0;
    let interval;
    const transitionTime = 3000;
    const totalTabs = Math.min(tabs.length, tabContents.length);




    // 로딩 바 업데이트
    function updateProgressBar(tabIndex) {
        if (totalTabs <= 1) {
            progressBar.style.width = '100%';
            return;
        }
        const progressPercent = (tabIndex / (totalTabs - 1)) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }


    // 탭 전환 (안전한 인덱스 처리)
    function changeTab(index) {
        // 인덱스 범위 검증
        const safeIndex = Math.max(0, Math.min(index, totalTabs - 1));

        tabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        tabs[safeIndex].classList.add('active');
        tabContents[safeIndex].classList.add('active');
        currentTab = safeIndex;

        updateProgressBar(safeIndex);
    }

    // 자동 전환 (안전한 순환)
    function nextTab() {
        const nextIndex = (currentTab + 1) % totalTabs;
        changeTab(nextIndex);
    }

    // 자동 슬라이드 시작
    function startAutoSlide() {
        clearInterval(interval);
        interval = setInterval(nextTab, transitionTime);
    }

    // 탭 클릭 이벤트
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeTab(index);
            startAutoSlide();
        });
    });

    // 초기화
    changeTab(0); // 첫 번째 탭 활성화
    startAutoSlide();
});


// 햄버거 함수
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainMenu = document.querySelector('.main-menu');

    // 햄버거 메뉴 토글
    menuToggle.addEventListener('click', function () {
        this.classList.toggle('open');
        mainMenu.classList.toggle('active');
    });

    // 서브메뉴 토글 (모바일에서)
    const menuItems = document.querySelectorAll('.menu-item-has-children');
    if (window.innerWidth <= 768) {
        menuItems.forEach(item => {
            const link = item.querySelector('a');
            link.addEventListener('click', function (e) {
                e.preventDefault();
                item.classList.toggle('active');
            });
        });
    }
});








// const scriptURL = 'https://script.google.com/macros/s/AKfycbwguurzG-f38KpehmGTIWEFVTtVZEF8b2M7SLmxojP2nEkZEUb1h9ukidHb73HAZ_CfmA/exec';

// const form = document.forms['contact-form'];
// const submitBtn = form.querySelector('.submit-btn');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     // 연락처 유효성 검사
//     const phoneNumber = document.getElementById("userName").value;
//     if (!phoneNumber.match(/^[0-9]{11}$/)) {
//         alert("연락처를 11자리 숫자로 입력해주세요 ('-' 제외)");
//         return;
//     }

//     // 버튼 상태 변경
//     const originalText = submitBtn.textContent;
//     submitBtn.textContent = "처리 중...";
//     submitBtn.classList.add('loading');
//     submitBtn.disabled = true;

//     // 타임스탬프 추가
//     const currentTime = new Date().toLocaleString();
//     const formData = new FormData(form);
//     formData.append("문의시간", currentTime);

//     // 데이터 전송 (handleContactSubmit 함수로 전송)
//     fetch(scriptURL + '?action=contact', {
//         method: 'POST',
//         body: formData
//     })
//         .then(response => {
//             if (response.ok) {
//                 alert("문의가 성공적으로 접수되었습니다.");
//                 form.reset();
//             } else {
//                 throw new Error("서버 응답 오류");
//             }
//         })
//         .catch(error => {
//             alert("문의 접수에 실패했습니다. 다시 시도해주세요.");
//             console.error('Error!', error.message);
//         })
//         .finally(() => {
//             // 버튼 상태 복원
//             submitBtn.textContent = originalText;
//             submitBtn.classList.remove('loading');
//             submitBtn.disabled = false;
//         });
// });
