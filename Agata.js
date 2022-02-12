
let col1 = document.querySelector('.col1');
let col2 = document.querySelector('.col2');

window.onload = ()=>{
col1.style.transition = '3s';
col2.style.transition = '3s';
col1.style.transform = 'translateX(0%)';
col2.style.transform = 'translateX(0%)';
setTimeout(function(){
	col1.style.transition = 'unset';
	col2.style.transition = 'unset';
	document.querySelector('.container').style.overflow = 'unset';	
}, 3000);
};

// setTimeout(function(){
// 	col1.style.transition = 'unset';
// 	col2.style.transition = 'unset';
// 	document.querySelector('.container').style.overflow = 'unset';	
// }, 3000);