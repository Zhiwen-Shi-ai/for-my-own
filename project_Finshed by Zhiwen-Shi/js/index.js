// 文字交互效果与跳转页面功能已通过 CSS 完成
// 以下代码功能用于登录验证。

document.addEventListener('DOMContentLoaded', function() {
// 获取登录按钮
let loginButton = document.querySelector('.log-in button');
if (!loginButton) return;
// 绑定单击监听事件
loginButton.addEventListener('click', function() {
	let accountInput = document.querySelector('.account input');
	let passwordInput = document.querySelector('.password input');

	let account = accountInput ? accountInput.value.trim() : '';
	let password = passwordInput ? passwordInput.value.trim() : '';

	if (account === "") {
		alert('账号不能为空。')
		accountInput.focus(); // ← 让账号输入框获得光标
		return;
	}
	if (account.length < 3) {
		alert('账号长度不能少于三位。')
		accountInput.focus(); // ← 让账号输入框获得光标
		return;
	}
	if (password === "") {
		alert('密码不能为空。')
		passwordInput.focus(); // ← 让账号输入框获得光标
		return;
	}
	if (password.length < 6) {
		alert('密码不能少于六位。。')
		passwordInput.focus(); // ← 让账号输入框获得光标
		return;
	}
	if (account === 'admin' && password === '123456') {
		window.location.href = 'photoWall.html';
	} else {
		alert('账号或密码错误')
	}
})
})

