const updateTime = () => {
  const date = new Date();
  $("#hora").text(date.getHours());
  $("#minuto").text(date.getMinutes());
  $("#segundo").text(date.getSeconds().toString().padStart(2, "0"));
  $("#dia").html(`Hoje é dia <opacity>${date.toLocaleDateString()}</opacity>`);
};

setInterval(updateTime, 1000);

$(".container").click(function() {
  const date = new Date();
  let message = `Agora são: ${date.getHours()} horas`;
  if (this.id === "minuto") {
    message += ` e ${date.getMinutes()} minutos`;
  } else if (this.id === "segundo") {
    message += `, ${date.getMinutes()} minutos e ${date.getSeconds().toString().padStart(2, "0")} segundos`;
  }
  alert(`${message}!`);
});
