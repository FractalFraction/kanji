$(window).on('load', ()=>{
  const search = document.getElementById('search');
  const onRead = document.getElementById('kanji-on-reading');

 $("#search").on('keypress', (e) => {
        const char = $("#search").val();
        console.log(char);
        if(e.keyCode === 13){
            //e.preventDefault(); // Ensure it is only this code that run                      
             console.log(`https://kanjiapi.dev/v1/kanji/${char}`);

            $.get(`https://kanjiapi.dev/v1/kanji/${char}`, (data)=>{           
              console.log(char)
              console.log(`The ${char} has on'yomi reading ${data.on_readings[0]}`)  
              onRead.innerHTML = `${data.on_readings[0]}`
            })      
        }
    })
})