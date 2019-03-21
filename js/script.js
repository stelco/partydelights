let config = {
    size: {
        width: 200,
        height: 100
    },
    interval: 2000,
    direction: 'left',
    slides: [
        {
            id: "slide1",
            imgurl: 'img/party1.jpg',
            title: 'Party 1',
            clickurl: 'slide1.html'
        },
        {
            id: "slide2",
            imgurl: 'img/party2.jpg',
            title: 'Party 2',
            clickurl: 'slide2.html'
        },
        {
            id: "slide3",
            imgurl: 'img/party3.jpg',
            title: 'Party 3',
            clickurl: 'slide3.html'
        }
    ]
};

document.slide.style.width = String(config.size.width + "px");
document.slide.style.height = String(config.size.height + "px");

// Change Slide
function changeSlide() {

    let chars = config.slides;
    for (let i = 0, len = chars.length; i < len; i++)

        (function (index) {
            setTimeout(function () {

                console.log(chars[i])
                console.log(chars[i].imgurl)
                console.log(chars[i].title)
                console.log(chars[i].clickurl)

                document.slide.src = chars[i].imgurl;
                document.getElementById("title").innerHTML = chars[i].title;
                document.getElementById("url").href = chars[i].clickurl;

                // loop not iterating since adding the timeout
                
                // Check If Index Is Under Max
/*                 if (i < chars[i].length - 1) {
                    console.log(chars[i].length)
                    // Add 1 to Index
                    i++;
                } else {
                    i = 0
                } */

            }, i * 2000);

        })(i);

    changeSlide()

}

// Run function when page loads
window.onload = changeSlide;