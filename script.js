

function verificar(){    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length==0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>0 && idade<12){
                //Criança
                img.setAttribute('src', 'https://img.lovepik.com/free-png/20211102/lovepik-the-image-of-the-lively-and-cute-and-handsome-boys-png-image_400205130_wh1200.png')
            }else if(idade>=11 && idade<18){
                //Adolescente
                img.setAttribute('src', 'https://cdn.w600.comps.canstockphoto.com.br/menino-adolescente-banco-de-imagem_csp20488363.jpg')
            }else if(idade>=18 && idade<50){
                //adulto
                img.setAttribute('src', 'https://img.freepik.com/fotos-premium/homem-adulto-rosto-sereno-expressao-estudio-retrato_53876-79737.jpg?w=2000')
            }else if(idade>=50){
                //Idoso
                img.setAttribute('src', 'https://media.istockphoto.com/id/1218519667/pt/foto/happy-senior-man.jpg?s=612x612&w=0&k=20&c=PxL_Ga0hQC19QSynZ2WrxdQx1mOuaJD8pEJHzTwxXjs=')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade>0 && idade<12){
                //Criança
                img.setAttribute('src', 'https://img.elo7.com.br/product/zoom/339CE66/fantasia-infantil-mundo-bita-vestido-crianca-menina-rosa.jpg')
            }else if(idade>=11 && idade<18){
                //Adolescente
                img.setAttribute('src', 'https://st3.depositphotos.com/1000824/32217/i/450/depositphotos_322175418-stock-photo-happlittle-girl-in-a-blue.jpg')
            }else if(idade>=18 && idade<50){
                //adulto
                img.setAttribute('src', 'https://images.freeimages.com/images/premium/previews/2592/25929716-adult-woman.jpg')
            }else if(idade>=50){
                //Idoso
                img.setAttribute('src', 'https://3talheres.com.br/wp-content/uploads/2023/01/Mulher-sorrindo-com-alegria.jpg')
            }
        }
        
        res.innerHTML = `Você tem ${idade} anos, e é ${genero}!`
        img.style.width = '200px'; img.style.height = '50x'; img.style.borderRadius = '100%'; img.style.marginTop = '20px'
        res.appendChild(img)
    }
        
    
}



// let dia = datasystem.getDate().toString().padStart(2,'0')
    // let mes = (datasystem.getMonth()+1).toString().padStart(2,'0')
    // let ano = datasystem.getFullYear()
    // let datahj = `${dia}/${mes}/${ano}`
