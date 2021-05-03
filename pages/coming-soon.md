---
layout: main
permalink: /coming-soon
og_title: coming-soon
og_image: /static/img/impulse.jpeg
---

<style>
    *{
        box-sizing: border-box;
    }
    body{
        background-color: #312747;
    }
    .content-section{
        width: 100%;
        margin: 0;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 100vh;
        padding: 0 100px;
    }
    .wave{
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1;
        pointer-events: none;
    }
    .contentBx{
        position: relative;
        max-width: 600px;
        z-index: 1000;
    }
    .contentBx h2{
        font-size: 60px;
        color: #fff;
        text-transform: uppercase;
    }
    .contentBx p{
        font-size: 26px;
        color: #fff;
    }
    .contentBx a{
        position: relative;
        margin-top: 10px;
        display: inline-block;
        background-color: #ff0083;
        color: #fff;
        font-size: 20px;
        letter-spacing: 2px;
        padding: 15px 35px;
        text-decoration: none;
        border-radius: 40px;

    }

    .imgBx img{
        position: relative;
        max-width: 500px;
        width: 100%;
        margin-top: 100px;
        z-index: 2;
    }
    .newsletter{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 600px;
        padding: 60px;
        background-color: #fff;
        z-index: 10000;
        box-shadow: 0 0 0 100vh rgba(49, 39, 71, 0.95);
        visibility: hidden;
        opacity: 0;
        transition: 0.5s;
    }
    .newsletter.active{
        visibility: visible;
        opacity: 1;
    }

    .newsletter .fa{
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 25px;
    }
    .newsletter h2{
        font-size: 48px;
        color: #312747;
    }
    .newsletter p{
        font-size: 20px;
        color: #312747;
    }
    .newsletter .inputBox{
        margin-top: 20px;
    }
    .newsletter .inputBox input{
        padding: 10px;
        outline: none;
        width: 300px;
        font-size: 18px;
        border: 1px solid #999;
    }
    .newsletter .inputBox input[type="submit"]{
        padding: 10px;
        outline: none;
        width: 140px;
        color: #fff;
        background-color: #ff0083;
        border: 1px solid #ff0083;
        letter-spacing: 2px;
        cursor: pointer;
    }

    .copyright-text{
        position: absolute;
        bottom: 0;
        left: 20%;
    }

    .header .nav ul li a{
        color: #fff;
        padding: 15px 0;
    }
    .header .brand-name a{
        color: #fff !important;
    }
    .header .nav-toggle{
        border-color: #fff !important;
    }
    .header .nav-toggle span,
    .header .nav-toggle span::before,
    .header .nav-toggle span::after{
        background-color: #fff;
    }

    @media (max-width: 991px){
        .content-section{
            flex-direction: column;
            padding-top: 150px;
            height: auto;
        }
        .contentBx {
            max-width: 100%;

        }
        .imgBx img{
            margin-top: 0;
        }
    }
    @media (max-width: 767px){
        .content-section {
            flex-direction: column;
            padding: 150px 50px 100px;
            height: auto;

        }
        .contentBx h2{
            font-size: 40px;
        }
        .contentBx p{
            font-size: 16px;
        }
        .contentBx a{
            background-color: #fff;
            color: #ff0083;
            font-size: 16px;
            padding: 10px 25px;

        }
        .newsletter{
            width: 90%;
            padding: 30px;

        }
        .newsletter .inputBox input[type="submit"]{
            margin-top: 10px;
            width: 100%;
        }
    }
</style>


<img src="/static/img/icons/curve.png" alt="" class="wave">
<div class="contentBx">
    <h2>Coming Soon</h2>
    <p>Hackathon is coming soon</p>
    <a href="#" onclick="toggle()">Notify Me !</a>
</div>


<div class="imgBx">
    <img src="/static/img/icons/man.png" alt="">
</div>

<div class="newsletter">
    <a href="#" onclick="toggleClose()"><i class="fa fa-close"></i></a>
    <h2>Stay Tuned</h2>
    <p>Get notified at release</p>
    <div class="inputBox">
        <form action="https://send.pageclip.co/3Np4FHBCdzzpHzCSzNaXdsEvuapBjEar/notification-form" class="pageclip-form" method="post">
            <input type="email" name="email" required placeholder="Enter Email">
            <input class="pageclip-form__submit" type="submit" value="Submit">
        </form>
    </div>
</div>

<script>
    const toggle = () => {
        const newsletter = document.querySelector('.newsletter')
        newsletter.classList.toggle('active')
    }
    const toggleClose = () => {
        const newsletter = document.querySelector('.newsletter')
        newsletter.classList.remove('active')
    }
</script>