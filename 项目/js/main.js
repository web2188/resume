//main.js 
//创建游戏所有全局变量
//创建游戏中各个对象调用初始化和绘制方法
//1:创建全局变量
 var can1 = null;   //二个画布
 var can2 = null;
 var ctx1 = null;   //二个画笔
 var ctx2 = null;
 var canWidth = 0;  //画布宽度高度
 var canHeight = 0;
//1.1 创建全局变量背景图片
 var bgPic = null;
//1.2 创建全局变量保存海葵对象
 var ane = null; 

//2:创建入口函数
function game(){
  init();
  gameloop();
}
//3:创建初始化函数
function init(){
  //3.1:初始化画布 画笔 画布宽度和高度
  can1 = document.getElementById("canvas1");
  can2 = document.getElementById("canvas2");
  ctx1 = can1.getContext("2d");
  ctx2 = can2.getContext("2d");
  canWidth = can1.width;
  canHeight = can1.height;
  //3.2:创建背景图片对象并且下载
  bgPic = new Image();
  bgPic.src = "src/background.jpg";
  //3.3:创建海葵对象并且调用初始化方法
  ane = new aneObj();
  ane.init();
}
//4:创建绘制函数
function gameloop(){
  //4.1:创建(智能)定时器 快(10ms) 慢(100ms)
  requestAnimFrame(gameloop);
  //4.5:调用绘制背景函数
  drawBackground();
  //4.6:调用绘制海葵方法
  ane.draw();
}
//5:当index.html 加载结束调用入口函数
document.body.onload = game;


