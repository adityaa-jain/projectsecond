const body = document.body;
const btn = document.getElementById("btn");
const bulb = document.getElementById("bulb");
const glow = document.getElementById("glow");
const lbl = document.getElementById("lbl");
const fils = ["fil1", "fil2", "fil3"].map((id) => document.getElementById(id));
let on = false;

function toggle() {
    on = !on;
    body.className = on ? "on" : "off";
    btn.className = "btn " + (on ? "on" : "off");
    bulb.className.baseVal = on ? "bulb-on" : "bulb-off";
    fils.forEach(
        (f) => (f.className.baseVal = "filament" + (on ? " filament-on" : "")),
    );
    glow.setAttribute("r", on ? "48" : "0");
    glow.setAttribute("opacity", on ? "0.22" : "0");
    lbl.textContent = on ? "On" : "Off";
}

btn.addEventListener("click", toggle);
document.getElementById("lamp").addEventListener("click", toggle);