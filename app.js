// // RegExp-регуларные виражения
// const input=document.querySelector('input')
// const h1=document.querySelector('h1')

// let comment='sen jindi'


// let sozdor=/jindi|eshek|chochko|mal/i


// console.log(sozdor.test(comment));
// console.log(comment.match(sozdor));
// console.log(comment.replace(sozdor,'******'));

// input.onchange=()=>{
//     if (sozdor.test(input.value)) {
//         h1.innerHTML=input.value.replace(sozdor,'*****')
        
//     }else{
//         h1.innerHTML=input.value
//     }
// }


// const users=[
//     {name:'Bezat',level:'senior',salary:'200000'}
// ]


const btn=document.querySelector('button')
const users=[
    {name:'Bekzat', level:'senior', salary:200000},
    {name:'Adyl', level:'middle', salary:180000},
    {name:'Jeenbek', level:'middle', salary:190000},
    {name:'Aknur', level:'middle', salary:150000},
    {name:'Aibiike', level:'senior', salary:150000},
]

function getUsers(data){
    return new Promise((resolve, reject)=>{
        if(data){
            setTimeout(()=>{
                resolve(users)
            }, 3000)
        } else {
            reject('Kata ketti')
        }
      
       
        
    })
}
btn.onclick=()=>{
    console.log(
        getUsers(true)
        .then((mass)=>{
        console.log(mass)
       })
       .catch((err)=>{
        console.error(err);
       })
       .finally(()=>{
        console.log('Buttu Promise');
       })
    );
}


function showUsers(arr) {
    for ()
    
}

