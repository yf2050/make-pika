let string = `<style>
.skin {
    background-color: #ffdb00;
    position: relative;
    min-height: 50vh;
}
/*你好，我是喻峰，一位前端的追梦人！*/
/*制作鼻子*/
.nose {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    width: 0;
    height: 0;
    border: 20px solid;
    border-color: #000 transparent transparent;
    border-radius: 20px;
}

/*制作眼睛*/
.eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #2e2e2e;
    border-radius: 50%;
    top: 40px;
}

.eye.left {
    margin-left: 130px;
}

.eye.right {
    margin-left: -130px;
}

/*制作会动的星星眼*/
.eye:before {
    content: '';
    display: block;
    border: 3px solid rgb(0, 0, 0);
    width: 35px;
    height: 35px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    animation: eyeMove 3s infinite;
}

@keyframes eyeMove {
    0%,
    100% {
        left: 8px;
        top: 0;
    }

    20%,
    60% {
        left: 20px;
        top: 0;
    }

    40% {
        left: 15px;
        top: 0;
    }

    80% {
        left: 20px;
        top: 20px
    }
}

/*绘制皮卡丘的脸！*/
.face {
    border: 3px solid black;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background: #fe1800;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 170px;
    z-index: 1;
}

.face.left {
    margin-left: 200px;
}

.face.right {
    margin-left: -200px;
}

/*皮卡丘的胡子！*/
.mouth {
    width: 250px;
    height: 250px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 130px;
}

.mouth .up .lip {
    border: 5px solid #000;
    width: 125px;
    height: 20px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    background: #ffdb00;
}

.mouth .up .lip.left {
    border-radius: 0 0 0 105px;
    border-color: transparent transparent #000;
    position: relative;
    transform: rotate(-15deg) translateX(6px);
}

.mouth .up .lip.right {
    border-radius: 0 0 105px 0;
    border-color: transparent transparent #000 transparent;
    position: absolute;
    transform: rotate(15deg) translateX(-2px);
}

.mouth .up .lip:before {
    content: '';
    display: block;
    width: 8px;
    height: 20px;
    position: absolute;
    bottom: 0;
    background-color: #ffdb00;
}

.mouth .up .lip.left::before {
    left: 110px;
}

.mouth .up .lip.right::before {
    left: -6px;
}

.mouth .up .lip:after {
    content: '';
    display: block;
    width: 115px;
    position: absolute;
    top: -5px;
    background-color: #ffdb00;
}

/*绘制皮卡丘的嘴*/
.mouth .down {
    height: 180px;
    width: 100%;
    position: absolute;
    top: 3px;
    overflow: hidden;
}

.mouth .down .yuan1 {
    border: 3px solid black;
    height: 500px;
    width: 150px;
    border-radius: 100px/300px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #aa1008;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2 {
    width: 150px;
    height: 150px;
    position: absolute;
    border-radius: 80px;
    background: #f65d5f;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

/*触摸鼻子动画*/
@keyframes wave {
    0%, 100% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(5deg);
    }
    66% {
        transform: rotate(-5deg);
    }
}

.nose:hover {
    animation: wave 1s infinite;
    transform-origin: center center;
    margin-left: -20px;}
/*这只皮卡丘送给你，祝你每天开心！*/    
</style>`
export default string