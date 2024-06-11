from flask import Flask, render_template
from mendeleev import element
from math import lcm
from chempy import Substance, balance_stoichiometry

ferricyanide = Substance.from_formula('Fe(NO3)2')
print([dict(_) for _ in balance_stoichiometry({'C', 'O2'}, {'CO2', 'CO'}, underdetermined=None)])
print(ferricyanide.unicode_name)

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
    "Unknown",  # Meitnerium
    "Unknown",  # Darmstadtium
    "Unknown",  # Roentgenium
    "Unknown",  # Copernicium
    "Unknown",  # Nihonium
    "Unknown",  # Flerovium
    "Unknown",  # Moscovium
    "Unknown",  # Livermorium
    "Unknown",  # Tennessine
    "Unknown",  # Oganesson
]

man_made_atomic_numbers = [
    43,  # Technetium
    61,  # Promethium
    85,  # Astatine
    93,  # Neptunium
    94,  # Plutonium
    95,  # Americium 
    96,  # Curium
    97,  # Berkelium
    98,  # Californium
    99,  # Einsteinium
    100, # Fermiun
    101, # Mendelevium
    102, # Nobelium
    103, # Lawrencium
    104, # Rutherfordium
    105, # Dubium
    106, # Seaborgium
    107, # Bohrium
    108, # Hassium
    109, # Meitnerium
    110, # Darmstadium
    111, # Roentgenium
    112, # Copernicium
    113, # Nihonium
    114, # Flerovium
    115, # Moscovium
    116, # Livermorium
    117, # Tennessine
    118  # Organesson
]

diatomic = [
    1, # Hydrogen
    7, # Nitrogen
    8, # Oxygen
    9, # Fluorine
    17, # Chlorine
    35, # Bromine
    53, # Iodine
]

liquids = [35, 80]
gasses = [1, 2, 7, 8, 9, 10, 17, 18, 36, 54, 86]

elements = []
for i in range(118):
    el = element(i+1)
    if i+1 in liquids:
        state = "Liquid"
    elif i+1 in gasses:
        state = "Gas"
    else:
        state = "Solid"
    elements.append({
        "Name": el.name,
        "OriginName": el.name_origin,
        "AtomicNumber": el.atomic_number,
        "Symbol": el.symbol,
        "StateOfMatter": state,
        "Mass": el.atomic_weight,
        "Category": element_categories[i],
        "Block": el.block,
        "Description": el.description,
        "Uses": el.uses,
        "Discovery": {
            "People": el.discoverers,
            "Location": el.discovery_location,
            "Year": el.discovery_year
        },
        "ManMade": True if i+1 in man_made_atomic_numbers else False,
        "Diatomic": True if i+1 in diatomic else False,
        "Sources": el.sources
    })

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', posts=elements)

@app.route('/get_data')
def get_data():
    return elements

if __name__ == '__main__':
    app.run(debug=True)
