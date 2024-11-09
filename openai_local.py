from flask import Flask, request, jsonify
from openai import OpenAI, AzureOpenAI

# Define a route for the OpenAI GPT request
def generate_text(prompt_input):
    # Get the prompt from the request body (JSON format)
    prompt = prompt_input

    if not prompt:
        print("No prompt provided")
    try:
        # Call the OpenAI API with the chat model
        client = OpenAI(
            api_key=""
        )

        response = client.chat.completions.create(
            model="gpt-3.5-turbo",  # You can also use "gpt-4" if available
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ]
        )

        # Get the generated response
        return(response.choices[0].message.content)
    except Exception as e:
        raise Exception(e)
