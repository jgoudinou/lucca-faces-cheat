obj = await (await fetch('https://qwarry.ilucca.net/api/v3/users/scope?appInstanceId=5&operations=1&paging=0,1000&fields=id,name,picture[id,name,url,href]')).json();

players = [];

for(i in obj.data.items)
  if(obj.data.items[i].picture)
    players.push({"name": obj.data.items[i].name, "image": obj.data.items[i].picture.href.replace('https://qwarry.ilucca.net','')+'&width=400'});

function aa(){
    try{
    e=document.getElementsByTagName('div');
    img=null;
    for(i=0;i<e.length;i++) 
        try{
            v=e[i].style.getPropertyValue("background-image");
            if(/getFile/gi.test(v)) img=e[i].style.getPropertyValue("background-image");
        } catch(t){};

    console.log(img);

    b = document.querySelector('.answers.buttons').children;
    for(i=0;i<b.length;i++)
     for(ii=0;ii<players.length;ii++)
       if(img=='url("'+players[ii].image+'")' && (new RegExp(players[ii].name.replace(' ','.*'),'gi')).test(b[i].innerText)) b[i].click() ;

    } catch(t){};
    setTimeout(function(){ aa();}, 10);
}
aa();