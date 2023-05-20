var box=document.getElementById("box")

fetch("http://localhost:3333/getSpend")
.then(response =>{
    if(response.ok){
        response.json()
        .then(data=>{
            for(var i=0;i<data.length;i++){

                var div=document.createElement('div')
                var p1=document.createElement('p')
                var p2=document.createElement('p')
                var p3=document.createElement('p')
                var p4=document.createElement('p')

                div.className="content"

                p1.textContent=data[i].SpendName
                p2.textContent=data[i].SpendValue
                p3.textContent=data[i].Priority
                p4.textContent=data[i].DateSpend

                

                box.appendChild(div)
                div.appendChild(p1)
                div.appendChild(p2)
                div.appendChild(p3)
                div.appendChild(p4)

            }
        })
    }
    else{
        Swal.fire({
            title: '¡Error!',
            text: "No se pudieron obtener los datos del usuario",
            icon: 'error',
            confirmButtonText: 'OK',
        })   
    }
})