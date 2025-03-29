document.addEventListener("DOMContentLoaded", function () {
  const services = [
    { name: "Service 1", url: "http://localhost:5001/api" },
    { name: "Service Emily", url: "http://localhost:5002/api" },
    { name: "Service Victoria", url: "http://localhost:5003/api" },
    { name: "Service Salome", url: "http://localhost:5005/api" },
    { name: "Service Elkin", url: "http://localhost:5010/api" },
    { name: "Service Miguel", url: "http://localhost:5045/api" },
    { name: "Service Angie", url: "http://localhost:5006/api" },
    { name: "Service Andres", url: "http://localhost:5007/api" },
    { name: "Service Sheila", url: "http://localhost:5009/api" },
    { name: "Service Alcántara", url: "http://localhost:5004/api"}
    
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
