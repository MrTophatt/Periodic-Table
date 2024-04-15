from flask import Flask, render_template
from mendeleev import element

element_categories = [
    "Nonmetal",  # Hydrogen
    "Noble Gas",  # Helium
    "Alkali Metal",  # Lithium
    "Alkaline Earth Metal",  # Beryllium
    "Metalloid",  # Boron
    "Nonmetal",  # Carbon
    "Nonmetal",  # Nitrogen
    "Nonmetal",  # Oxygen
    "Nonmetal",  # Fluorine
    "Noble Gas",  # Neon
    "Alkali Metal",  # Sodium
    "Alkaline Earth Metal",  # Magnesium
    "Post-transition Metal",  # Aluminum
    "Metalloid",  # Silicon
    "Nonmetal",  # Phosphorus
    "Nonmetal",  # Sulfur
    "Nonmetal",  # Chlorine
    "Noble Gas",  # Argon
    "Alkali Metal",  # Potassium
    "Alkaline Earth Metal",  # Calcium
    "Transition Metal",  # Scandium
    "Transition Metal",  # Titanium
    "Transition Metal",  # Vanadium
    "Transition Metal",  # Chromium
    "Transition Metal",  # Manganese
    "Transition Metal",  # Iron
    "Transition Metal",  # Cobalt
    "Transition Metal",  # Nickel
    "Transition Metal",  # Copper
    "Transition Metal",  # Zinc
    "Post-transition Metal",  # Gallium
    "Metalloid",  # Germanium
    "Metalloid",  # Arsenic
    "Nonmetal",  # Selenium
    "Nonmetal",  # Bromine
    "Noble Gas",  # Krypton
    "Alkali Metal",  # Rubidium
    "Alkaline Earth Metal",  # Strontium
    "Transition Metal",  # Yttrium
    "Transition Metal",  # Zirconium
    "Transition Metal",  # Niobium
    "Transition Metal",  # Molybdenum
    "Transition Metal",  # Technetium
    "Transition Metal",  # Ruthenium
    "Transition Metal",  # Rhodium
    "Transition Metal",  # Palladium
    "Transition Metal",  # Silver
    "Transition Metal",  # Cadmium
    "Post-transition Metal",  # Indium
    "Post-transition Metal",  # Tin
    "Metalloid",  # Antimony
    "Metalloid",  # Tellurium
    "Nonmetal",  # Iodine
    "Noble Gas",  # Xenon
    "Alkali Metal",  # Cesium
    "Alkaline Earth Metal",  # Barium
    "Lanthanide",  # Lanthanum
    "Lanthanide",  # Cerium
    "Lanthanide",  # Praseodymium
    "Lanthanide",  # Neodymium
    "Lanthanide",  # Promethium
    "Lanthanide",  # Samarium
    "Lanthanide",  # Europium
    "Lanthanide",  # Gadolinium
    "Lanthanide",  # Terbium
    "Lanthanide",  # Dysprosium
    "Lanthanide",  # Holmium
    "Lanthanide",  # Erbium
    "Lanthanide",  # Thulium
    "Lanthanide",  # Ytterbium
    "Lanthanide",  # Lutetium
    "Transition Metal",  # Hafnium
    "Transition Metal",  # Tantalum
    "Transition Metal",  # Tungsten
    "Transition Metal",  # Rhenium
    "Transition Metal",  # Osmium
    "Transition Metal",  # Iridium
    "Transition Metal",  # Platinum
    "Transition Metal",  # Gold
    "Transition Metal",  # Mercury
    "Post-transition Metal",  # Thallium
    "Post-transition Metal",  # Lead
    "Post-transition Metal",  # Bismuth
    "Post-transition Metal",  # Polonium
    "Post-transition Metal",  # Astatine
    "Noble Gas",  # Radon
    "Alkali Metal",  # Francium
    "Alkaline Earth Metal",  # Radium
    "Actinide",  # Actinium
    "Actinide",  # Thorium
    "Actinide",  # Protactinium
    "Actinide",  # Uranium
    "Actinide",  # Neptunium
    "Actinide",  # Plutonium
    "Actinide",  # Americium
    "Actinide",  # Curium
    "Actinide",  # Berkelium
    "Actinide",  # Californium
    "Actinide",  # Einsteinium
    "Actinide",  # Fermium
    "Actinide",  # Mendelevium
    "Actinide",  # Nobelium
    "Actinide",  # Lawrencium
    "Transition Metal",  # Rutherfordium
    "Transition Metal",  # Dubnium
    "Transition Metal",  # Seaborgium
    "Transition Metal",  # Bohrium
    "Transition Metal",  # Hassium
    "Transition Metal",  # Meitnerium
    "Transition Metal",  # Darmstadtium
    "Transition Metal",  # Roentgenium
    "Transition Metal",  # Copernicium
    "Unknown",  # Nihonium
    "Unknown",  # Flerovium
    "Unknown",  # Moscovium
    "Unknown",  # Livermorium
    "Unknown",  # Tennessine
    "Unknown",  # Oganesson
]


elements = []
for i in range(118):
    el = element(i+1)
    elements.append({
        "Name": el.name,
        "OriginName": el.name_origin,
        "AtomicNumber": el.atomic_number,
        "Symbol": el.symbol,
        "Mass": el.atomic_weight,
        "Category": element_categories[i],
        "Description": el.description,
        "Uses": el.uses,
        "Discovery": {
            "People": el.discoverers,
            "Location": el.discovery_location,
            "Year": el.discovery_year
        },
        "Sources": el.sources
    })

print(elements)

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', posts=elements)

@app.route('/get_data')
def get_data():
    return elements

if __name__ == '__main__':
    app.run(debug=True)
