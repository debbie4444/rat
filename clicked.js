// 获取图片元素
const image = document.getElementById('clickedImage');

// 监听图片的点击事件
image.addEventListener('click', function() {
    // 改变光标样式为点击状态的光标图片
    document.documentElement.style.cursor = 'url("himg/click.png"), auto !important';

    // 在控制台打印消息，表示点击事件已经触发
    console.log('Image clicked!');
});
