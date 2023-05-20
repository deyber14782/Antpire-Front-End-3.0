spends.addEventListener('click',(e)=>{
    location.href="/views/registerSpend/registerSpend.html"
})

balance.addEventListener('click',(e)=>{
    location.href="/views/balancePage/balance.html"
})

home.addEventListener('click',(e)=>{
    location.href="/views/homePage/home.html"
})

notification.addEventListener('click',(e)=>{
    location.href="/views/notificationPage/notification.html"
})

user.addEventListener('click',(e)=>{
    location.href="/views/perfilPage/perfil.html"
})

/*
fetch("http://localhost:3333/getData")
.then(response =>{
    if(response.ok){
        response.json()
        .then(data=>{
            document.getElementById("name").value=data[0]
            document.getElementById("email").value=data[1]
            document.getElementById("salary").value=data[2]
            document.getElementById("frequencySalary").value=data[3]
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
*/


changePassword.addEventListener('click',(e)=>{
    e.preventDefault();
    
    Swal.fire({
        title:'Cambia tu contraseña',
        input:'password',
        confirmButtonText: 'OK',
        showCancelButton: true,
        inputValidator:(password)=>{
            if(password.length>=6){
                var updatePassword={password:password}
                var updatePasswordJson=JSON.stringify(updatePassword)
                fetch("http://localhost:3333/updatePassword",{
                    method:'POST',
                    headers:{
                        "Content-type":"application/json",
                    },
                    body:updatePasswordJson
                })
                .then(response=>{
                    if(response.ok){
                        response.json().then(text=>Swal.fire({
                            title: '¡Felicidades!',
                            text: JSON.stringify(text.message),
                            icon: 'success',
                            confirmButtonText: 'OK'
            
                        }))
                    }
                    else{
                        response.json().then(text=>Swal.fire({
                            title: '¡Error!',
                            text: JSON.stringify(text.message),
                            icon: 'error',
                            confirmButtonText: 'OK'
            
                        })) 
                    }
                }) 
            }
            else{
                return 'La contraseña debe tener más de seis caracteres'

            }
        }
    })
})

/*
changeSalary.addEventListener('click',(e)=>{
    e.preventDefault()
    Swal.fire({
        title:'Cambia tu salario',
        input:'number',
        confirmButtonText: 'OK',
        showCancelButton: true,
        inputValidator:(salary)=>{
            if(salary.length!=0){
                var updateSalary={salary:salary}
                var updateSalaryJson=JSON.stringify(updateSalary)
                fetch("http://localhost:3333/updateSalary",{
                    method:'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body:updateSalaryJson
                })
                .then(response=>{
                    if(response.ok){
                        response.json().then(text=>Swal.fire({
                            title: '¡Felicidades!',
                            text: JSON.stringify(text.message),
                            icon: 'success',
                            confirmButtonText: 'OK'
            
                        }))
                    }
                    else{
                        response.json().then(text=>Swal.fire({
                            title: '¡Error!',
                            text: JSON.stringify(text.message),
                            icon: 'error',
                            confirmButtonText: 'OK'
            
                        })) 
                    }
                }) 
            }
            else{
                return 'Debe llenar el campo'

            }
        }
    })

})
*/


logout.addEventListener('click',(e)=>{

    Swal.fire({
        title: '¡Cuidado!',
        text: "¿Seguro deseas cerrar la sesión?",
        icon: 'warning',
        confirmButtonText: 'OK',
        showCancelButton: true,
    }).then((result)=>{
        if(result.isConfirmed){
            fetch("http://localhost:3333/logout",{
                method:'POST',
            })
            .then(response=>{
                if(response.ok){
                    location.href="/index.html" 
                }
                else{
                    response.json().then(text=>Swal.fire({
                        title: '¡Error!',
                        text: JSON.stringify(text.message),
                        icon: 'error',
                        confirmButtonText: 'OK'
        
                    }))  
                }
            })
        }
    })

})

delete1.addEventListener('click',(e)=>{
    Swal.fire({
        title: '¡Cuidado!',
        text: "¿Seguro deseas borrar la cuenta?",
        icon: 'warning',
        confirmButtonText: 'OK',
        showCancelButton: true,
    }).then((result)=>{
        if(result.isConfirmed){
            fetch("http://localhost:3333/deleteAccount",{
                method:'POST',
                headers:{
                    "Content-type":"application/json",
                },
            })
            .then(response=>{
                if(response.ok){
                    location.href="/index.html" 
                }
                else{
                    response.json().then(text=>Swal.fire({
                        title: '¡Error!',
                        text: JSON.stringify(text.message),
                        icon: 'error',
                        confirmButtonText: 'OK'
        
                    }))  
                }
            })
        }
    })
})