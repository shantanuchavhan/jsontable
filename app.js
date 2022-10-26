var text=document.getElementById('text')

function fetchData(){
    fetch('https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817')
    .then(response=>{
        if (!response.ok){
            throw Error("Error")
        }
        return response.json();

    }).then(data=>{
        const tabledata=data.data
        console.log(tabledata)
        const length=tabledata.length
        console.log(length)
        var table='<table><thead><tr><th>name</th><th>office</th><th>position</th><th>salary</th></tr></thead><tbody>'
        for(var i=0;i<tabledata.length;i++){
            console.log(i)
            table+='<tr><td>'+tabledata[i].name+'</td><td>'+ tabledata[i].office +'</td><td>'+tabledata[i].position+'</td><td>'+ tabledata[i].salary +'</td> </tr>'

        }
        table+='</tbody></table>'
        text.innerHTML=table;
    }).catch(error=>{
        console.log(error);
    });
}

fetchData()

