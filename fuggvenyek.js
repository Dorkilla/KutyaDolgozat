export function kutyaOsszeallit(KUTYAK){
    let txt="";
    
    for (let index=0; index < KUTYAK.length; index++){
        txt+=`<div class="kutyakartya"
        <div><img src="${KUTYAK[index].kep}" alt="${KUTYAK[index].nev}">
        <h3>${KUTYAK[index].nev}</h3>
        <p>Kor: ${KUTYAK[index].kor}</p>
        <p>Faj: ${KUTYAK[index].faj}</p>
        </div>`;
    }
    return txt;
}