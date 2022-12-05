const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e){
    e.preventDefault();//이벤트 동작 막기
    const searchTerm = form.elements.query.value;
    const config = { params: {q: searchTerm, isFunny: 'colt'}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    // console.log(res.data[0].show.image.medium);
    // const img = document.createElement('IMG');
    // img.src = res.data[0].show.image.medium;
    // document.body.append(img)
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for(let result of shows){
        // console.log(res.data[0].show.image.medium);
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}
