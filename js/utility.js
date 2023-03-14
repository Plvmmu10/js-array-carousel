function goUp(){
    document.querySelectorAll('.slide')[currentIndex].classList.add('d-none');
    document.querySelectorAll('.thumb')[currentIndex].classList.remove('active');
    
    if (currentIndex > 0){
        
        currentIndex--;
    }else{
        
        currentIndex = images.length - 1
    }
    console.log(currentIndex);
    document.querySelectorAll('.thumb')[currentIndex].classList.add('active');
    document.querySelectorAll('.slide')[currentIndex].classList.remove('d-none');
}

function goDown(){
    document.querySelectorAll('.slide')[currentIndex].classList.add('d-none');
    document.querySelectorAll('.thumb')[currentIndex].classList.remove('active');
    
    if (currentIndex < images.length - 1){

        currentIndex++;

    }else{
        
        currentIndex = 0 
    }
    
    document.querySelectorAll('.thumb')[currentIndex].classList.add('active')
    document.querySelectorAll('.slide')[currentIndex].classList.remove('d-none');
    console.log(currentIndex);
}