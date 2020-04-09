const getCovidData =  async () => {
    const request = await fetch("https://covid19.mathdro.id/api");
    const data = await request.json();
    return data;
};

const getCovidDataNepal =  async () => {
    const request1 = await fetch("https://covid19.mathdro.id/api/countries/nepal");
    const data1 = await request1.json();
    return data1;
};

getCovidData().then(covidData => {
    document.getElementById("totalcases").innerHTML = covidData.confirmed.value;
});

getCovidDataNepal().then(covidDataNepal => {
    document.getElementById("nepal").innerHTML = covidDataNepal.confirmed.value;
});