from flask import Flask, render_template
from mendeleev import element
from math import lcm
from chempy import Substance, balance_stoichiometry

ferricyanide = Substance.from_formula('Fe(NO3)2')
print([dict(_) for _ in balance_stoichiometry({'C', 'O2'}, {'CO2', 'CO'}, underdetermined=None)])
print(ferricyanide.unicode_name)

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
    print(i+1, str(el._series))
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
        "Mass": round(el.atomic_weight, 3),
        "Density": round(el.density, 3),
        "Category": el.series.title(),
        "Block": el.block,
        "Description": el.description,
        "Uses": el.uses,
        "Discovery": {
            "People": el.discoverers,
            "Location": el.discovery_location,
            "Year": el.discovery_year
        },
        "ElectroNegativity": {
            "Allen": el.en_allen,
            "Ghosh": el.en_ghosh,
            "Pauling": el.en_pauling
        },
        "PhaseTransition": {
            "Tm": {
                "Kelvin": str(("" if isinstance(el.melting_point, dict) else round(el.melting_point, 3)) if not i+1 == 2 else 0.95) + " K",
                "Celsius": str(("" if isinstance(el.melting_point, dict) else (round(el.melting_point, 3)-273.15)) if not i+1 == 2 else -272.2) + "°C",
                "Fahrenheit": str(("" if isinstance(el.melting_point, dict) else ((round(el.melting_point, 3)-273.15)*(9/5)+32)) if not i+1 == 2 else -457.96) + "°F",
            },
            "Tb": {
                "Kelvin": str("" if (isinstance(el.boiling_point, dict) or el.boiling_point is None) else round(el.boiling_point, 3)) + " K",
                "Celsius": str("" if (isinstance(el.boiling_point, dict) or el.boiling_point is None) else (round(el.boiling_point, 3)-273.15)) + "°C",
                "Fahrenheit": str("" if (isinstance(el.boiling_point, dict) or el.boiling_point is None) else ((round(el.boiling_point, 3)-273.15)*(9/5)+32)) + "°F",
            },
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
