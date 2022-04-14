var pictures = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg",
    "images/banner4.jpg",
    "images/banner5.jpg",
    "images/banner6.jpg",
    "images/banner7.jpg",
];

var captions = [
    'LOCAL BRAND',
    'SWE',
    'LOCAL',
    'BRAND',
    'HADES',
    'HADES',
    'HADES',
]

var caption = document.getElementById('captions');
caption.innerHTML = captions[0];

var slide = document.getElementById('slide');
slide.innerHTML = '';
for (let i = 0; i < pictures.length; i++) {
    var picture = pictures[i]
    slide.innerHTML += `<img src="${picture}"/>`
}

var current = 0;


function goNext() {
    current++;
    // nếu ví trí hiện tại = độ dài thì khi bấm next sẽ gán cho nó giá trị 0 để quay lại hình đầu
    if (current == pictures.length) {   
        current = 0;
        slide.style.transition = '0s all ease-in-out'; // chuyển ngay lập tức chứ không di chuyển chậm
        document.getElementById('dem').innerHTML = (current+1) + '/' + pictures.length;
        caption.innerHTML = captions[0];
        
    }
    else if (current < pictures.length) {
        slide.style.transition = '2s all ease-in-out';
        
    }

    document.getElementById('dem').innerHTML = (current+1) + '/' + pictures.length;
    caption.innerHTML = captions[current];
    // khi bấm dịch chuyển hình sang trái đúng với width của hình
    slide.style.marginLeft = - (current * 1180) + 'px';
}

setInterval(goNext, 3500)

function goPrev() {
    current--;

    if (current < 0) {
        current = pictures.length - 1;
        document.getElementById('dem').innerHTML = (current+1) + '/' + pictures.length;
    caption.innerHTML = captions[captions.length-1];
    slide.style.transition = '0s all ease-in-out';
    }
    else {
        slide.style.transition = '2s all ease-in-out';

    }
    caption.innerHTML = captions[current];
    document.getElementById('dem').innerHTML = (current+1) + '/' + pictures.length;
    slide.style.marginLeft = - (current * 1180) + 'px';

}

// Di chuyển hình lên đầu
function goFirst() {
        current = 0;
        document.getElementById('dem').innerHTML = (current+1) + '/' + pictures.length;
        caption.innerHTML = captions[0];
        slide.style.marginLeft = - (current * 1180) + 'px'; 
}

// Di chuyển hình xuống cuối
function goLast() {
    current = captions.length-1;
    document.getElementById('dem').innerHTML = (current+1) + '/' + pictures.length;
    caption.innerHTML = captions[current];
    slide.style.marginLeft = - (current * 1180) + 'px';
}