#sequence diagram for spa open flow

...depicting the situation where the user creates a new note using the single-page version of the app at https://studies.cs.helsinki.fi/exampleapp/spa.

```mermaid
sequence diagram
    participant browser
    participant server
    
    Note right of browser: Browser-side JS renders new note to DOM without server requests for rendering

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa with new note as request body data
    activate server
    server->>browser: 201 Created, with JSON response
    deactivate server

    Note left of server: Server creates note and returns a message in JSON format, indicating successful creation
```
