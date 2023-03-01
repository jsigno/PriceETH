async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a03acf52dfmsh93b3e1b3ed1b112p14580djsn4fe937b20ea4',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://coinranking1.p.rapidapi.com/coin/razxDUgYGNAdQ/price?referenceCurrencyUuid=yhjMzLPhuIDl', options)
    const record = await res.json()

    const price = (Math.ceil(record.data.price * 100) / 100).toFixed(2);
  
    document.getElementById("Price").innerHTML = "$" + price;
}

fetchData()