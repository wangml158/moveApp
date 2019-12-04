//返回顶部
function returnTop() {
    let body = document.getElementsByClassName("view")[0];
    let circular = document.createElement('div');
    circular.innerHTML = '返回';
    circular.className = "returnTop";
    body.append(circular);

    // circular.style.width = 3 + 'rem';
    // circular.style.height = 3 + "rem";
    // circular.style.lineHeight = 3 + "rem";
    // circular.style.textAlign = "center";
    // circular.style.borderRadius = '50%';
    // circular.style.position = 'fixed';
    // circular.style.zIndex = 2000;
    // circular.style.bottom = 5 + 'rem';
    // circular.style.right = 1.5 + 'rem';
    // circular.style.background = 'rgba(213,134,134,.5)'
    return
}