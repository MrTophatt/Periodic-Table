from flask import Flask, render_template
from mendeleev import element

elements = []
for i in range(118):
    el = element(i+1)
    elements.append({
        "Name": el.name,
        "AtomicNumber": el.atomic_number,
        "Symbol": el.symbol,
        "Mass": el.atomic_weight
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
