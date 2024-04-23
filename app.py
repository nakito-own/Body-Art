from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit-form', methods=['POST'])
def submit_form():
    # Получаем данные из формы
    surname = request.form['surname']
    name = request.form['name']
    phone = request.form['phone']
    email = request.form['email']

    print(surname, name, phone, email)

    # Ваша логика обработки данных...

    # Отправляем ответ клиенту
    response = jsonify({'message': 'Данные успешно получены на сервере!'})
    response.status_code = 200
    return response

if __name__ == '__main__':
    app.run(debug=True, host='192.168.0.149')
