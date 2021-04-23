---
layout: main
permalink: /technical-quiz
---

<style>
    .quiz-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
        justify-items: center;
        align-items: center;
    }
    .quiz-container .image img{
        width: 70%;
    }
    .details p{
        margin: 20px 0;
    }
    .prize{
        color: red;
        font-size: 25px;
    }

    @media(max-width: 767px){
        .quiz-container{
            grid-template-columns: 1fr;
        }
        .quiz-container .image img{
            width: 100%;
        }
    }
</style>


<div class="quiz-container">
    <div class="image">
        <img src="/static/img/impulse-quiz.jpeg" alt="">
    </div>
    <div class="details">
        <div class="section-title padd-15">
            <h1>Technical Quiz</h1>
        </div>
        
        <p> <b>IEEE SPS SBC CET</b> invites you to a Technical Quiz as a part of <b>IMPULSE</b> ,a chapter driven initiative of SPS. </p>
        <p>This <b>Technical quiz</b> will comprise of general topics which will provide the participants with a broad idea about the current scenario as well as innovations in the technical world. 
        </p>
        <a href="https://tinyurl.com/IMPULSE-quiz"><button class="btn">Register Now</button></a>

        <p style="font-size: 20px;">Participate Individually or as a team of 2 members</p>

        <p>Prizes Worth <span class="prize">Rs 1000</span>  </p>

        <p>For more details contact :</p>
        <p>Jacob : <a href="https://wa.me/919495119436">9495119436</a> </p>
        <p>Mithun : <a href="https://wa.me/918547045588">8547045588</a> </p>

    </div>
</div>