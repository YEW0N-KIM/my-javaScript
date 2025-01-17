let mainList = document.querySelectorAll('.level-1');

// mainmenu click event
mainList.forEach((main)=>{
    main.addEventListener('click', function(){
        main.classList.add('active');

        let sub = main.closest('.level-2');
        console.log(main);
        console.log(sub);
    });
})