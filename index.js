(async () => {
  const dataObject = await (
    await fetch(
      'https://qwarry.ilucca.net/api/v3/users/scope?appInstanceId=5&operations=1&paging=0,1000&fields=name,picture[id]',
    )
  ).json();

  const players = [];

  dataObject.data.items.forEach((item) => {
    if (item.picture) {
      players.push({
        name: item.name,
        pictureId: item.picture.id,
      });
    }
  });

  function check() {
    try {
      const img = document.querySelector('app-game app-timer div.image').style.getPropertyValue('background-image');
      const buttons = document.querySelectorAll('app-game .answers.buttons button');

      buttons.forEach((button) => {
        players.forEach((player) => {
          if (
            new RegExp(player.pictureId).test(img)
            && new RegExp(player.name.replace(' ', '.*'), 'i').test(button.innerText)
          ) {
            button.click();
          }
        });
      });
    } catch (t) {
      //
    }
  }

  setInterval(() => {
    check();
  }, 10);
})();
