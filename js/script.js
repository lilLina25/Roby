"use strict";
//Header button
let menu = document.querySelector('.menu-header__menu');
let burger = document.querySelector('.menu-header__icon');
let headerlinks = document.querySelectorAll('.menu-header__link');
let container = document.querySelector('.container__header');
burger.addEventListener('click', function(){
	menu.classList.toggle('active');
	burger.classList.toggle('active');
});
for(let link of headerlinks){
	link.addEventListener('click', function(){
		if(container.clientWidth <= 468){
			menu.classList.remove('active');
			burger.classList.remove('active');
		}
	});
}

//Slider selectedblock & ourblock
let selectedOffset = 0; //Смещение
let ourOffset = 0;
let backs = document.querySelectorAll('.arrow__back');
let forwards = document.querySelectorAll('.arrow__forward');
let selectedBack = document.querySelector('.selected__back');
let selectedForward = document.querySelector('.selected__forward');
const selectedblockSlider = document.querySelector('.selected__photoblock');
const ourblockSlider = document.querySelector('.ourblock__block');
let ourblockBack = document.querySelector('.ourblock__back');
let ourblockForward = document.querySelector('.ourblock__forward');
for(let back of backs){
	back.addEventListener('click', function(event){
		if(this === selectedBack){
			selectedOffset= selectedOffset - 300;
			if(selectedOffset < 0){
				selectedOffset = 1500;
			}
			selectedblockSlider.style.left = -selectedOffset + 'px';
		}

		if(this === ourblockBack){
			ourOffset= ourOffset - 303;
			if(ourOffset < 0){
				ourOffset = 606;
			}
			ourblockSlider.style.left = -ourOffset + 'px';
		}
	});
}
for(let forward of forwards){
	forward.addEventListener('click', function(event){
		if(this === selectedForward){
				selectedOffset+=300;
				if(selectedOffset > 1500){
					selectedOffset = 0;
				}
				selectedblockSlider.style.left = -selectedOffset + 'px';
		}

		if(this === ourblockForward){
				ourOffset+=303;
				if(ourOffset > 606){
					ourOffset = 0;
				}
				ourblockSlider.style.left = -ourOffset + 'px';
		}
	});
}

//Thinkblock auto slider
let slider = document.querySelector('.thinkblock__slider');
let clientWidth = document.querySelector('.thinkblock__slider').clientWidth;
const sliderItems = document.querySelectorAll('.thinkblock__post');
const squares = document.querySelectorAll('.thinkitems__item');
let i = 0;
//Подстройка под размер окна
window.onresize = function(){
	if(slider.clientWidth<521){
	sliderItems[0].classList.add('active');
	sliderItems[1].classList.add('active');
	sliderItems[2].classList.add('active');
	}
	return(slider.clientWidth);
}
//Автопрокрутка
setInterval(function(){
	let stepTimer1 = setInterval(function(){
	step1(slider.clientWidth);
	clearInterval(stepTimer1);
	},3000);

	setTimeout(function(){
		let stepTimer2 = setInterval(function(){
			step2(slider.clientWidth);
			clearInterval(stepTimer2);
			},3000);
		},3000);
	
	setTimeout(function(){
		let stepTimer3 = setInterval(function(){
			step3(slider.clientWidth);
			clearInterval(stepTimer3);
			},3000);
	},6000);
},9000);
//Этапы прокрутки
function step1(width){
	activeSquare();
	if(width>=1438){
	sliderItems[0].style.left = 975 + 'px';//+975-470-505;
	sliderItems[1].style.left = -455 + 'px';//-455+935-480;
	sliderItems[2].style.left = -455 + 'px';//-455-455+910;
	sliderItems[1].classList.remove('active');
	sliderItems[2].classList.add('active');
} 
	if(width<1438 && width>=968){
	sliderItems[0].style.left = 645 + 'px';
	sliderItems[1].style.left = -320 + 'px';
	sliderItems[2].style.left = -320 + 'px';
	sliderItems[1].classList.remove('active');
	sliderItems[2].classList.add('active');
	}
	if(width<968 && width>=521){
	sliderItems[0].style.left = 500 + 'px';
	sliderItems[1].style.left = -250 + 'px';
	sliderItems[2].style.left = -245 + 'px';
	sliderItems[1].classList.remove('active');
	sliderItems[2].classList.add('active');
	}
	if(width<521 && width>=299){
	sliderItems[0].style.left = 500 + 'px';
	sliderItems[1].style.left = -440 + 'px';
	sliderItems[2].style.left = -245 + 'px';
	sliderItems[0].classList.add('active');
	sliderItems[1].classList.add('active');
	sliderItems[2].classList.add('active');
	}
	if(width<299){
	sliderItems[0].style.left = 500 + 'px';
	sliderItems[1].style.left = -298 + 'px';
	sliderItems[2].style.left = -245 + 'px';
	sliderItems[0].classList.add('active');
	sliderItems[1].classList.add('active');
	sliderItems[2].classList.add('active');
	}

};
function step2(width){
	activeSquare();
	if(width>=1438){
	sliderItems[0].style.left = 505 + 'px';
	sliderItems[1].style.left = 480 + 'px';
	sliderItems[2].style.left = -910 + 'px';
	sliderItems[2].classList.remove('active');
	sliderItems[1].classList.remove('active');
	sliderItems[0].classList.add('active');
	}
	if(width<1438 && width>=968){
	sliderItems[0].style.left = 325 + 'px';
	sliderItems[1].style.left = 325 + 'px';
	sliderItems[2].style.left = -645 + 'px';
	sliderItems[2].classList.remove('active');
	sliderItems[1].classList.remove('active');
	sliderItems[0].classList.add('active');
	}
	if(width<968 && width>=521){
	sliderItems[0].style.left = 250 + 'px';
	sliderItems[1].style.left = 250 + 'px';
	sliderItems[2].style.left = -495 + 'px';
	sliderItems[2].classList.remove('active');
	sliderItems[1].classList.remove('active');
	sliderItems[0].classList.add('active');
	}
	if(width<521 && width>=299){
	sliderItems[0].style.left = 450 + 'px';
	sliderItems[1].style.left = 250 + 'px';
	sliderItems[2].style.left = -885 + 'px';
	sliderItems[0].classList.add('active');
	sliderItems[1].classList.add('active');
	sliderItems[2].classList.add('active');
	}
	if(width<299){
	sliderItems[0].style.left = 450 + 'px';
	sliderItems[1].style.left = 250 + 'px';
	sliderItems[2].style.left = -596 + 'px';
	sliderItems[0].classList.add('active');
	sliderItems[1].classList.add('active');
	sliderItems[2].classList.add('active');
	}
};
 function step3(width){
 	activeSquare();
 	if(width>=1438 || width<1438 && width>=521){
 	sliderItems[0].style.left = 0 + 'px';
	sliderItems[1].style.left = 0 + 'px';
	sliderItems[2].style.left = 0 + 'px';
	sliderItems[0].classList.remove('active');
	sliderItems[1].classList.add('active');
	}
	if(width<521 && width>=299 || width<299){
		sliderItems[0].classList.add('active');
		sliderItems[1].classList.add('active');
		sliderItems[2].classList.add('active');
		sliderItems[0].style.left = 0 + 'px';
		sliderItems[1].style.left = 0 + 'px';
		sliderItems[2].style.left = 0 + 'px';
	}
 }
//Автопрокрутка элементов декора
function activeSquare(){
		i++;
		if(i>4){
			i=0;
		}
		for(let square of squares){
			if(square === squares[i]){
				squares[i].classList.add('active');
			} else {
				square.classList.remove('active');
			}
		}
};

//Footer buttons
let contents= document.querySelectorAll('.column-footer__content');
let titles= document.querySelectorAll('.column-footer__title');
let closes =document.querySelectorAll('.close');
for(let i=0; i<3; i++){
	titles[i].addEventListener('click', function(event){
		contents[i].classList.add('open');		
	})
	closes[i].addEventListener('click', function(event){
	contents[i].classList.remove('open');
	})
}
//Footer map buttons
let map = document.querySelector('.column-footer__map');
let map_btn = document.querySelector('.column-footer__btn');
let closemap = document.querySelector('.closemap');
map_btn.addEventListener('click', function(){
	map.classList.add('activemap');
});
closemap.addEventListener('click', function(){
	map.classList.remove('activemap');
});