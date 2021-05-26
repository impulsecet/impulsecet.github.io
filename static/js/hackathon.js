const faqs = [
    {
        q: "what is impulse?",
        a: "this is an event"
    },
    {
        q: "when is impulse?",
        a: "next week"
    },
    {
        q: "what is hackathon?",
        a: "You have to solve a problem statement"
    }
]

const accordion = document.querySelector(".accordion")
faqs.forEach(faq => {
    accordion.innerHTML += `
        <div class="accordion-item">
            <a>${faq.q}</a>
            <div class="content">
            <p>${faq.a}</p>
            </div>
        </div>
    `
})


const items = document.querySelectorAll(".accordion a");
function toggleAccordion(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
    console.log('clicked')
}

const search = document.querySelector('.search').addEventListener('keyup', e=>{
    accordion.innerHTML = ''
    faqs.forEach(faq => {
        if(faq.q.toLowerCase().includes(e.target.value.toLowerCase()) || faq.a.toLowerCase().includes(e.target.value.toLowerCase())){
            accordion.innerHTML += `
            <div class="accordion-item">
                <a>${faq.q}</a>
                <div class="content">
                <p>${faq.a}</p>
                </div>
            </div>
            `
        }
    })

    document.querySelectorAll(".accordion a").forEach(item => item.addEventListener('click', e => {
        console.log(e)
        e.target.classList.toggle('active');
        e.target.nextElementSibling.classList.toggle('active');
        console.log('clicked')
    }))
});

items.forEach(item => item.addEventListener('click', e => {
    console.log(e)
    e.target.classList.toggle('active');
    e.target.nextElementSibling.classList.toggle('active');
    console.log('clicked')
}));