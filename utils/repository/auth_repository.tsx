async function requestOTP(){
    fetch('https://api.example.com/data')
      .then(response => {
        return response;
      })
      .catch(error => console.error(error));
}