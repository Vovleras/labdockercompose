document.addEventListener("DOMContentLoaded", function () {
  const services = [
    { name: "Service 1", url: "http://localhost:5001/api" },
    { name: "Service 2", url: "http://localhost:5002/api" },
    { name: "Service 3", url: "http://localhost:5003/api" },
  ];

  const list = document.getElementById("services-list");

  services.forEach((service) => {
    fetch(service.url)
      .then((response) => response.json())
      .then((data) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${service.name}:</strong> ${data.message}`;
        list.appendChild(li);
      })
      .catch((error) => {
        console.error("Error connecting to the service:", service.name, error);
        const li = document.createElement("li");
        li.innerHTML = `<strong>${service.name}:</strong> ❌ Not available`;
        li.style.color = "red";
        list.appendChild(li);
      });
  });
});
