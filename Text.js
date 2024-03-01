// 获取输入框元素
const userInput = document.getElementById('userInput');
const headerText = document.getElementById('headerText');
const header = document.querySelector('header');

// 初始化变量来跟踪是否按下了 Enter 键
let enterPressed = false;

// 监听输入框的输入事件
userInput.addEventListener('input', function() {
    // 获取输入框中的内容，并设置为标题文本
    headerText.textContent = userInput.value;
});

// 监听输入框的 keydown 事件
userInput.addEventListener('keydown', function(event) {
    // 检查按下的键是否是 Enter 键
    if (event.keyCode === 13) {
        // 阻止默认的 Enter 键行为（防止表单提交）
        event.preventDefault();
        
        // 设置变量表示 Enter 键被按下
        enterPressed = true;
        
        // 隐藏输入框
        userInput.style.display = 'none';
        
        // 上移图片容器
        const imageContainer = document.querySelector('.image-container2');
        imageContainer.style.transform = 'translateY(-50px)';
        
        // 添加动画类
        headerText.classList.add('header-slide-animation');
        
        // 添加文字向左对齐的类
        header.classList.add('header-left-align');
    }
});

// 监听输入框的 keyup 事件
userInput.addEventListener('keyup', function(event) {
    // 检查释放的键是否是 Enter 键
    if (event.keyCode === 13) {
        // 设置变量表示 Enter 键被释放
        enterPressed = false;
        
        // 移除文字向左对齐的类，恢复居中对齐
        header.classList.remove('header-left-align');
    }
});
