from flask import Flask, request
import openai

app = Flask(__name__)

# Set your OpenAI API key
openai.api_key = "YOUR_API_KEY"

# Use your existing assistant
assistant = openai.Assistant.retrieve("asst_lXEi37K2NYJ39SdKCEiXfS7c")

@app.route('/', methods=['POST'])
def process_pdf():
    if 'file' not in request.files:
        return 'No file part'
    file = request.files['file']

    if file.filename == '':
        return 'No selected file'

    # Send the file to the assistant
    response = assistant.create_message(
        files=[file],
        content="Please summarize this PDF file."
    )

    return response.content

if __name__ == '__main__':
    app.run(debug=True)