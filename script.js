// Email obfuscation generated by http://rumkin.com/tools/mailto_encoder
ML="0bcm2artj:ws=ifon@g?p%ludM.e";
MI="35=F7?9@=2?F5;B??;K@A=2F?GHJ2?3C;G18K27<I5=FE40>6?3E40D?67>?F=?E40:K1;=7K";
OT="";
for(j=0;j<MI.length;j++){ OT+=ML.charAt(MI.charCodeAt(j)-48); }

document.getElementById('mail-link-1').href=OT;
document.getElementById('mail-link-2').href=OT;

// Modals
let images = document.querySelectorAll('.recent-work-carousel img');
let modals = document.getElementsByClassName('modal');

function closeModal() {
    this.scrollTop = 0;
    this.style.display = 'none';
}

function openModal() {
    document.getElementById(this.dataset.modal).style.display = 'block';
}

for (let i = 0; i < modals.length; i++) {
    images[i].addEventListener('click', openModal);
    modals[i].addEventListener('click', closeModal);
}
