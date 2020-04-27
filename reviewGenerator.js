let reviews = [
    'hello',
    'hi',
    'ni hao'
]

function newReview() {
    let randNum = Math.floor(Math.random() * (reviews.length));
    document.getElementById("reviewDisplay").innerText = reviews[randNum];
}