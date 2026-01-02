// Define maximum energy value (for scaling)
const maxEnergy = 500;  // Max value in Wh (for video generation, for example)

// Function to update the graph with scaling
function updateGraph(barId, energy) {
    const bar = document.getElementById(barId);
    // Calculate scaled height: (energy / maxEnergy) * max graph height
    const scaledHeight = (energy / maxEnergy) * 200; // 200px is max height of the bars

    bar.style.height = scaledHeight + "px"; // Adjusts bar height dynamically
}
