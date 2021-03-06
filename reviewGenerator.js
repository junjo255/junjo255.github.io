let reviews = [
    "I love this stuff!!! It is a quality product. At first, I thought it was “sticky/tacky” but when it completely dried, my skin was soooo soft. I almost don’t want to do this perfect review because I want it to be my little secret 🤫",
    "I bought this as an addition to my diy hand sanitizer. This is perfect! It gives it just a thick enough feel that it's not runny and it doesnt dry my hands out.",
    "I am finding the reviews of this product to be spot on! It is a little sticky when it starts to dry, but dries beautifully and so happy with the feeling I'm left with. ",
    "I bought this just as a moisturizer, but it has surpassed my expectations! My face has never looked clearer than it does now; especially during these stressing times when I'm more prone to breakouts!",
    "I really like this lotion. I use it as an after shave and it works great. I see complaints about the smell, but I think it’s fine. Doesn’t smell bad to me. The benefits it provides are much more important.",
    "Cellskin clean pine gel is really very good so handy to use thank you just love them",
    "Great sanitiser, really useful for popping in my handbag and keeping some in the car!",
    "Good value and quick delivery",
    "I'm so glad I was able to find this mask since they're out of stock everywhere else. The KF94 are the N95 equivalent in Korea. This mask is exactly as advertised. It's comfortable easy to use! It's out of stock on YesStyle right now, so I'm glad I ordered plenty.",
    "Well considering world events I'm happy I can find a place which sells masks even if the price is high. Product as shown and the mask is comfortable.",
    "This masks is very comfortable and was exactly what I was looking for!",
    "This face mask fits snug but comfortably on the face. It didn't bother my ears and it's easily adjustable. Seems to filter well but didn't feel too stuffy. Would definitely buy again. Quick, easy shipping to USA even during the pandemic! Thank you!",
    "Korean KF94 Certified Mask with the quality we already are used to of Korean Products.",
    "it’s good quality bought 4 the only thing it’s not wide enough if you have a long face it won’t really fit since it bearly covers me and I don’t really have a long face but besides that it’s good I would just put a thin mask over it for just a little bit more tightness but I would recommend best one yet",
    "Exactly as described. While looking up more information about K94 masks, I learned this will block most contaminants small as 4 microns. N95 block as small as 3 microns. Viruses are around 1 micron and usually transmitted via 3-5 microns or larger particles so in most cases this will protect you if you need to venture outside.",
    "This mask fits like a surgical mask but it is rated as KF94, which means it lets in particles 1 nm bigger than the N95 mask. I really like this mask, especially the black color. I'm gonna buy a case to keep it in.",
    "I love this face mask, it’s very comfortable and has a snug fit. I like the material as well, has 3 protective layers. Would buy again!",
    "will buy again",
    "fast delivery",
    "I am very pleased with the masks I have ordered and continue to order more for family and friends. Thank you for providing a quality product at a reasonable price.",
    "Seemed to fit fine and was good to have as I am in several risk categories.",
    "Very satisfied!",
    "These masks arrived promptly and are meeting my needs as a caregiver to a severely disabled, medically fragile child.",
    "Easy to breathe and talk while wearing this mask. fits comfortably too without tugging on ears as some do.",
    "Comfortable and stays secure",
    "I got my masks very quickly and makes me feel well protected.",
    "I am the user for myself and the caregiver for my husband and his other caregivers. The masks fit well and seem much better and more protective than others I have seen or used.",
    "I  got a 10 pack of these masks. And so far my experience has been better than the 3m N95 mask from a comfortability standpoint.",
    "Super easy to buy, arrived super quick. It fits to my face and I feel way more comfortable going outside now.",
    "Just bought this. Happy to finally find some. ",
    "Great product at the right time. Keep it up. Thank you.",
    "This particular hand sanitizer works well on my hands. It's not as harsh on the hands as some others I've used in the past. It's worth its cost and I highly recommend it.",
    "It was great. Exactly what ordered with no problems. Thanks again.",
    "Just how they described it perfect. Thanks probably have the only hand sanitizer in town .",
    "I am so grateful to have received this today",
    "Arrived quickly, so happy with product. They even put a tight cap on product - so it would not spill and then included another cap to just get drops out. So happy with this product. The best out there. If you can still get this product - do so!",
    "The product is very good thank you very much for making a product that comes from the USA, will highly recommend other people to buy from you thank you Again.",
    "Handy size bottles came with a sealed cap and also caps with a doohickey that opens to pour into the palm of your hand. We keep one in the car so that when we are shopping we can use when we get back in the car.",
    "Great product: fits perfectly in the front of my backpack along with my anti-microbial body soap- thank you!",
    "Excellent!"
]

function newReview() {
    let randNum = Math.floor(Math.random() * (reviews.length));
    document.getElementById("reviewDisplay").innerText = reviews[randNum];
}