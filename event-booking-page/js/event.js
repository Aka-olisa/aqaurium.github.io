// Mobile Eveent
{
    let mobile_bar = document.querySelector('.fa-bars');
    let mobil_view = document.querySelector('.mobile_view');
    let exit = document.querySelector('.fa-times')
    let name = document.querySelector('#logoAndNameDiv')

    mobile_bar.onclick = function () {   
        mobil_view.style.display = 'block';

        setTimeout(() => {
            mobil_view.style.right = '0%'
            mobil_view.style.height = '250px';
            mobile_bar.style.display = 'none';
            name.style.margin = 'auto';

        }, 10);
       
    }

    exit.onclick = function () {
        mobil_view.style.height = '0px';
        mobil_view.style.right = '100%'
            setTimeout(() => {
                 mobil_view.style.display = 'none';     
                 mobile_bar.style.display = 'block';
                 name.style.margin = '0px'; 
             }, 500);
    }

}