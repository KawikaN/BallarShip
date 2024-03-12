async function fetchData(){
    const axios = require('axios');
    const FormData = require('form-data');

    const data = new FormData();
    data.append('locale', 'en');
    data.append('image', );

    const options = {
    method: 'POST',
    url: 'https://photomath1.p.rapidapi.com/maths/solve-problem',
    headers: {
        'X-RapidAPI-Key': 'c157379a30msh1009181c69a1737p17a135jsn1dbe6eb70205',
        'X-RapidAPI-Host': 'photomath1.p.rapidapi.com',
        ...data.getHeaders(),
    },
    data: data
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

}
fetchData();