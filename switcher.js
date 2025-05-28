chrome.storage.local.get('enabled', function(result) {
    let enabled = result.enabled;
    if (enabled){
        console.log(`extension working...`)
        /* Little bit optimization for GitHub*/
        function switchToDark(){
        const _A = document.querySelectorAll('a');
        _A.forEach(a => {
            a.classList.remove('color-bg-overlay');
        })

        const _BODY = document.querySelector('body');
        _BODY.style.visibility =  'hidden';

        const elems = document.querySelectorAll('div, p, span, h1, h2, h3, h4, h5, h6, a, pre, label, header, aside, section, dialog, form');
        elems.forEach(div => {
            div.classList.add('my-dark-theme')
        });
        _BODY.classList.add('my-dark-theme');

        requestAnimationFrame(() => {
            _BODY.style.visibility = 'visible';
        })
    }    

    switchToDark();
    
    }
})
