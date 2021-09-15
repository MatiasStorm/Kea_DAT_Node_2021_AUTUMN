# Dank Memes API

## GET (all)
**Endpoint:** `/memes`

Returns a list of all memes

### Example Response
```json
    [
        {
            "id": 1,
            "title": "Dank meme1",
            "url": "https://url.com" 
        },
        {
            "id": 2,
            "title": "Dank meme2",
            "url": "https://url.com"
        }
    ] 
```

## GET (one)
**Endpoint:** `/memes/{id}`

Returns the meme with the given id else 404       

### Example Response
```json
    {
        "id": 1,
        "title": "Dank meme1",
        "url": "https://url.com"
    }       
```


## POST
**Endpoint:** `/memes`

Creates a new meme with auto incremented id   

### Example Request
```json
    {
        "title": "New Meme",
        "url": ""
    }
```

### Example Response
```json
    {
        "id": 3,
        "title": "New Meme",
        "url": ""
    }
```


## PUT
**Endpoint:** `/memes/{id}`

Updates the meme with the given id

### Example Request
Url: `/memes/1`
```json 
    {
        "title": "Dank meme1 updated",
        "url": "https://url.com"
    } 
```

### Example Response
```json 
    {
        "id": 1,
        "title": "Dank meme1 updated",
        "url": "https://url.com"
    } 
```


## PATCH
**Endpoint:** `/memes`

Updates part the meme with the given id

### Example Request
```json 
    {
        "title": "Changed Title"
    } 
```

### Example Response
```json 
    {
        "id": 1, 
        "title": "Changed Title",
        "url": "https://url.com"
    } 
```


## DELETE
**Endpoint:** `/memes/{id}`

Deletes the meme with the given id

