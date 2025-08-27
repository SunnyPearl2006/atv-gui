
document.addEventListener("DOMContentLoaded", function() {
     async function fetchData() {
        try {
            const response = await fetch(`/data?nocache=${Date.now()}`);
            const data = await response.json();
            document.getElementById("test").innerText = data.join(', ');
        } catch (error) {
            document.getElementById("test").innerText = "Error loading data";
            console.error(error);
        }
    }

    fetchData()
});


