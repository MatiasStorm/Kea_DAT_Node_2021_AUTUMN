# Dank Memes API

| Method |  Endpoint   |                           Example Request                            | Example Response                                                                                                                  | Description                                 |
|--------|:-----------:|:--------------------------------------------------------------------:|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| GET    |   /memes    |                                 None                                 | ```json  [{"id": 1, "title": "Dank meme1", url: "https://url.com"}, {"id": 2, "title": "Dank meme2", url: "https://url.com"}] ``` | Returns a list of all memes                 |
| GET    | /memes/{id} |                                 None                                 | ```json   ```                                                             |  |
| POST   |   /memes    |              `json {"title": "New Meme", url: ""}`               | ```json ```                                                                                |  |
| PUT    | /memes/{id} | ```json {"id": 1, "title": "Dank meme1", url: "https://url.com"} ``` |                                                                                                                                   | Updates the meme with the given id          |
| PATCH  | /memes/{id} |                                                                      |                                                                                                                                   | Updates part of the meme with the given id  |
| DELETE | /memes/{id} |                                 None                                 |                                                                                                                                   | Deletes the meme with the given id          |

<table>
    <tr>
        <th>
            Method
        </th>
        <th>
            Endpoint
        </th>
        <th>
            Example Request
        </th>
        <th>
            Example Response
        </th>
        <th>
            Description
        </th>
    </tr>
    <tr>
        <td>
            GET
        </td>
        <td>
            /memes
        </td>
        <td>
            None
        </td>
        <td>
            
            ```json
                [
                    {"id": 1, "title": "Dank meme1", url: "https://url.com" },
                    {"id": 2, "title": "Dank meme2", url: "https://url.com"}
                ] 
            ```
            
        </td>
        <td>
            Returns a list of all memes
        </td>
    <tr>
        <td>
            GET
        </td>
        <td>
            /memes/{id}
        </td>
        <td>
            None
        </td>
        <td>
            ```json
                {"id": 1, "title": "Dank meme1", url: "https://url.com"}       
            ```
        </td>
        <td>
            Returns the meme with the given id else 404       
        </td>
    </tr>
    <tr>
        <td>
            POST
        </td>
        <td>
            /memes
        </td>
        <td>
            ```json
                {"title": "New Meme", url: ""}
            ```
        </td>
        <td>
            ```json
                {"id": 3, "title": "New Meme", url: ""}
            ```
        </td>
        <td>
            Creates a new meme with auto incremented id   
        </td>
    </tr>
    <tr>
        <td>
            
        </td>
        <td>
            
        </td>
        <td>
            
        </td>
        <td>
            
        </td>
        <td>
            
        </td>
    </tr>
    <tr>
        <td>
            
        </td>
        <td>
            
        </td>
        <td>
            
        </td>
        <td>
            
        </td>
        <td>
            
        </td>
    </tr>
    <tr>
        <td>
            
        </td>
        <td>
            
        </td>
        <td>
            
        </td>
        <td>
            
        </td>
        <td>
            
        </td>
    </tr>
    </tr>
</table>





